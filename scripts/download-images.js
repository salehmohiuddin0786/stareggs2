const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'white-eggs.jpg': 'https://images.unsplash.com/photo-1569288052389-adc9b9acaccf?auto=format&fit=crop&w=1000&q=85',
  'brown-eggs.jpg': 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1000&q=85',
  'wholesale-trays.jpg': 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&w=1000&q=85',
  'farm-quality.jpg': 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85',
  'editorial-craft.jpg': 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1000&q=85',
};

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(publicImagesDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, filename).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          console.log(`Saved ${filename}: ${stats.size} bytes`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      await download(url, filename);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err.message);
    }
  }
}

run();
