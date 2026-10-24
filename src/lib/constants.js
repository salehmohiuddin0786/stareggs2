/**
 * Star Eggs Brand Constants & Configuration
 * Featuring the 4 exact user-uploaded color palettes with full RGB transparency support,
 * multi-page navigation, and expanded distribution corridors.
 */

export const BRAND = {
  name: 'Star Eggs',
  shortName: 'Star Eggs',
  tagline: 'Freshness, Delivered.',
  eyebrow: 'QUALITY • FRESHNESS • TRUST',
  description:
    'Premier wholesale fresh white egg supplier and commercial bulk distributor serving food businesses, supermarkets, bakeries, and catering institutions across Telangana and Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani).',
  location: 'Adilabad, Telangana & Maharashtra Commercial Corridors',
  phoneDisplay: '+91 90000 00000',
  whatsappNumber: '919000000000',
  email: 'supply@stareggs.in',
  establishedYear: '2020',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Wholesale Supply', href: '/wholesale' },
  { label: 'Distribution', href: '/distribution' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS = [
  {
    id: 'white-table-eggs',
    name: 'Grade-A Fresh White Table Eggs',
    category: 'Table White Eggs',
    badge: 'Daily Harvest • Grade A',
    subtitle: 'Uniform sizing, pristine calcium-dense white shells, and firm natural yolks.',
    description:
      'Specially selected Grade-A white eggs with immaculate shells, consistent 50–55g weight class, and firm natural yolks. Harvested fresh daily for supermarkets, premium cafes, bakeries, and catering kitchens.',
    moq: '10 Trays (300 Eggs)',
    specs: [
      'Uniform 50–55g weight grading',
      'High calcium shell density & zero hairline cracks',
      'Daily morning farm-gate collection',
      'Available in 6, 12, 30 packs & full wholesale crates',
    ],
    technical: {
      averageWeight: '50g - 55g (Grade A Calibrated)',
      shellThickness: '0.38 mm (High transit resistance)',
      haughUnit: '88+ (Ultra Fresh Grade AA)',
      storageLife: 'Store in cool, dry ventilated area away from direct sunlight',
    },
    image: '/images/white-eggs.jpg',
    alt: 'Pristine fresh white eggs on an elegant ceramic surface',
    idealFor: 'Supermarkets, Kirana Stores, Cloud Kitchens, Cafes',
  },
  {
    id: 'wholesale-30-trays',
    name: 'Commercial 30-Egg Molded Trays',
    category: 'Commercial Pulp Trays',
    badge: 'Hygienic Pulp Trays • 30 Pack',
    subtitle: 'Impact-absorbing molded fiber crates designed for zero transport breakage.',
    description:
      'Standardized 30-egg biodegradable molded fiber trays engineered for high-turnover grocery shelves, bakeries, and restaurant kitchens. High sidewall rim cushioning prevents shell-on-shell friction.',
    moq: '20 Trays (600 Eggs)',
    specs: [
      'Industrial molded-fiber shock absorption',
      'Air-permeable natural pulp material',
      'Acoustic candling & sorting verified',
      'Perfect for daily shelf retail display',
    ],
    technical: {
      capacity: '30 Eggs per tray',
      material: '100% Recyclable biodegradable molded wood pulp',
      stackability: 'Up to 6 trays high without pressure damage',
      ventilation: 'Permeable cellular structure preventing moisture retention',
    },
    image: '/images/white-egg-tray.jpg',
    alt: 'Standardized 30-egg molded fiber tray with fresh white eggs',
    idealFor: 'Bakeries, Quick-Service Restaurants, Retailers, Catering Units',
  },
  {
    id: 'bulk-crates-180',
    name: 'Wholesale Master Crates (180 / 210 Count)',
    category: 'Heavy-Duty Corrugated Master Boxes',
    badge: 'Commercial Fleet Logistics',
    subtitle: 'Reinforced pallet-ready crates for high-volume distributors & institutions.',
    description:
      'Heavy-duty multi-tier corrugated commercial crates precision-nested for long-haul highway transport across Telangana, Nagpur, Akola, Yavatmal, Arni, and Vani. Built to eliminate transit loss.',
    moq: '5 Master Cartons (1,050 Eggs)',
    specs: [
      'Reinforced impact-resistant master packaging',
      'Optimized interlocking pallet stacking',
      'Batch-coded freshness timestamp',
      'Scheduled recurring daily or weekly fleet drops',
    ],
    technical: {
      capacity: '7 Packed Trays (210 Eggs total)',
      boxStructure: 'Double-walled heavy-duty fluted corrugated carton',
      burstingStrength: 'Commercial heavy transport rated',
      palletOptimization: 'Interlocking stack footprint for highway transport',
    },
    image: '/images/white-egg-crate.jpg',
    alt: 'Stacked wholesale commercial egg packaging crates for bulk logistics',
    idealFor: 'Wholesalers, Bulk Stockists, Hotel Chains, Institutional Caterers',
  },
];

export const BENEFITS = [
  {
    title: 'Quality-Focused Sourcing',
    description:
      'Every consignment undergoes strict visual candling and acoustic sorting to ensure flawless shell integrity, centered yolks, and absolute freshness.',
  },
  {
    title: 'Fresh & Carefully Handled',
    description:
      'Our rapid turnaround workflow eliminates warehouse holding times. Gentle handling and cushioned fiber crating protect eggs against road vibrations.',
  },
  {
    title: 'Reliable Bulk Supply',
    description:
      'With dedicated reserve inventory buffers and disciplined fleet schedules, we safeguard your business from sudden market shortages and price spikes.',
  },
  {
    title: 'Wholesale & Retail Availability',
    description:
      'From neighborhood supermarkets to regional food processing plants and hotel chains, our dispatch volumes adapt flexibly to your exact weekly cadence.',
  },
];

export const DISTRIBUTION_REGIONS = [
  {
    region: 'Telangana Network',
    hubs: [
      { name: 'Adilabad', type: 'Headquarters & Border Logistics Hub' },
      { name: 'Hyderabad & Secunderabad', type: 'Primary Supply Corridor' },
      { name: 'Warangal & Hanamkonda', type: 'Eastern Logistics Hub' },
      { name: 'Nizamabad', type: 'North-Western Corridor' },
      { name: 'Karimnagar', type: 'Northern Commercial Hub' },
      { name: 'Khammam', type: 'Southeastern Network' },
      { name: 'Mahbubnagar', type: 'Southern Route Hub' },
    ],
  },
  {
    region: 'Maharashtra (Vidarbha Corridors)',
    hubs: [
      { name: 'Nagpur', type: 'Central Vidarbha Logistics Terminal' },
      { name: 'Akola', type: 'Western Vidarbha Wholesale Market' },
      { name: 'Yavatmal', type: 'Regional Distribution Hub' },
      { name: 'Arni', type: 'Commercial Transit Route' },
      { name: 'Vani (Wani)', type: 'Industrial & Bulk Depot' },
    ],
  },
];

export const COLOR_PALETTES = [
  {
    id: 'warm-beige',
    name: 'Warm Beige & Ivory',
    tag: 'Signature Brand',
    description: 'Refined editorial beige, muted champagne and deep navy',
    swatches: ['#EBE2CC', '#DED6C1', '#CFC6B1', '#07131B'],
    variables: {
      '--color-cream-rgb': '250 248 242',
      '--color-ivory-rgb': '235 226 204',
      '--color-beige-rgb': '222 214 193',
      '--color-champagne-rgb': '207 198 177',
      '--color-taupe-rgb': '183 176 158',
      '--color-navy-rgb': '7 19 27',
      '--color-charcoal-rgb': '21 23 19',
      '--color-muted-rgb': '119 116 104',

      '--color-cream': '#FAF8F2',
      '--color-ivory': '#EBE2CC',
      '--color-beige': '#DED6C1',
      '--color-champagne': '#CFC6B1',
      '--color-taupe': '#B7B09E',
      '--color-navy': '#07131B',
      '--color-charcoal': '#151713',
      '--color-muted': '#777468',
    },
  },
  {
    id: 'saffron-slate',
    name: 'Saffron & Slate Blue',
    tag: 'User Palette 1',
    description: 'Vibrant saffron tangerine, yolk gold, vanilla cream and slate blue',
    swatches: ['#FF933E', '#FFCB56', '#FFE9A9', '#73A5CA'],
    variables: {
      '--color-cream-rgb': '255 253 249',
      '--color-ivory-rgb': '255 233 169',
      '--color-beige-rgb': '255 203 86',
      '--color-champagne-rgb': '226 207 164',
      '--color-taupe-rgb': '115 165 202',
      '--color-navy-rgb': '255 147 62',
      '--color-charcoal-rgb': '35 23 15',
      '--color-muted-rgb': '130 111 93',

      '--color-cream': '#FFFDF9',
      '--color-ivory': '#FFE9A9',
      '--color-beige': '#FFCB56',
      '--color-champagne': '#E2CFA4',
      '--color-taupe': '#73A5CA',
      '--color-navy': '#FF933E',
      '--color-charcoal': '#23170F',
      '--color-muted': '#826F5D',
    },
  },
  {
    id: 'imperial-plum',
    name: 'Imperial Plum & Blush',
    tag: 'User Palette 2',
    description: 'Royal velvet plum, dusty mauve, soft blush and porcelain cream',
    swatches: ['#7C0E44', '#AA5E7A', '#D49A9A', '#F2DACE'],
    variables: {
      '--color-cream-rgb': '250 245 242',
      '--color-ivory-rgb': '242 218 206',
      '--color-beige-rgb': '212 154 154',
      '--color-champagne-rgb': '170 94 122',
      '--color-taupe-rgb': '135 92 111',
      '--color-navy-rgb': '124 14 68',
      '--color-charcoal-rgb': '44 7 24',
      '--color-muted-rgb': '138 99 116',

      '--color-cream': '#FAF5F2',
      '--color-ivory': '#F2DACE',
      '--color-beige': '#D49A9A',
      '--color-champagne': '#AA5E7A',
      '--color-taupe': '#875C6F',
      '--color-navy': '#7C0E44',
      '--color-charcoal': '#2C0718',
      '--color-muted': '#8A6374',
    },
  },
  {
    id: 'emerald-cognac',
    name: 'Emerald & Cognac Amber',
    tag: 'User Palette 3 (#A55704)',
    description: 'Deep obsidian emerald, rich caramel cognac (#A55704) and warm sand',
    swatches: ['#09251C', '#A55704', '#F3D2AF', '#F8EADC'],
    variables: {
      '--color-cream-rgb': '250 247 242',
      '--color-ivory-rgb': '248 234 220',
      '--color-beige-rgb': '243 210 175',
      '--color-champagne-rgb': '222 194 162',
      '--color-taupe-rgb': '165 87 4',
      '--color-navy-rgb': '9 37 28',
      '--color-charcoal-rgb': '9 37 28',
      '--color-muted-rgb': '107 94 82',

      '--color-cream': '#FAF7F2',
      '--color-ivory': '#F8EADC',
      '--color-beige': '#F3D2AF',
      '--color-champagne': '#DEC2A2',
      '--color-taupe': '#A55704',
      '--color-navy': '#09251C',
      '--color-charcoal': '#09251C',
      '--color-muted': '#6B5E52',
    },
  },
];

export const REQUIREMENT_TYPES = [
  { id: 'wholesale', label: 'Wholesale Recurring' },
  { id: 'retail', label: 'Retail Store Supply' },
  { id: 'bulk', label: 'One-Time Bulk' },
  { id: 'institutional', label: 'Catering / Hotel' },
];
