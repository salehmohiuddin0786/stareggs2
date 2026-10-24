'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3D, Sparkles, ZoomIn, RefreshCw } from 'lucide-react';

export default function Egg3DScene({ className = '' }) {
  const containerRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [inspected, setInspected] = useState(false);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const eggGroupRef = useRef(null);
  const targetRotationRef = useRef({ x: 0.15, y: -0.35 });
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Egg Geometry (Mathematical Ovoid Deformation)
    const eggGroup = new THREE.Group();
    eggGroupRef.current = eggGroup;
    scene.add(eggGroup);

    // High-resolution sphere morphed into an egg ovoid
    const sphereGeo = new THREE.SphereGeometry(1.35, 96, 96);
    const position = sphereGeo.attributes.position;
    const heightRange = 1.35;

    for (let i = 0; i < position.count; i++) {
      let x = position.getX(i);
      let y = position.getY(i);
      let z = position.getZ(i);

      // Normalized y from -1 to +1
      const ny = y / heightRange;
      
      // Egg taper factor: wider bottom, tapered elegant top
      const taper = 1.0 - 0.22 * ny - 0.06 * (ny * ny);
      
      position.setX(i, x * taper);
      position.setZ(i, z * taper);
      // Elongate slightly along the vertical axis for natural organic proportions
      position.setY(i, y * 1.18);
    }
    sphereGeo.computeVertexNormals();

    // 4. Calcium White Egg Shell Material
    const eggMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfdfbf7,
      roughness: 0.38,
      metalness: 0.02,
      clearcoat: 0.22,
      clearcoatRoughness: 0.25,
      reflectivity: 0.4,
      sheen: 0.15,
      sheenColor: new THREE.Color(0xfcf7eb),
    });

    const eggMesh = new THREE.Mesh(sphereGeo, eggMaterial);
    eggMesh.castShadow = true;
    eggMesh.receiveShadow = true;
    eggGroup.add(eggMesh);

    // Initial tilt to display editorial profile
    eggGroup.rotation.x = targetRotationRef.current.x;
    eggGroup.rotation.y = targetRotationRef.current.y;
    eggGroup.rotation.z = -0.1;

    // 5. Studio Soft Contact Shadow Plane underneath
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    gradient.addColorStop(0, 'rgba(21, 23, 19, 0.22)');
    gradient.addColorStop(0.35, 'rgba(21, 23, 19, 0.09)');
    gradient.addColorStop(0.7, 'rgba(21, 23, 19, 0.02)');
    gradient.addColorStop(1, 'rgba(21, 23, 19, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.2, 3.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.72;
    scene.add(shadowPlane);

    // 6. Luxury Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfaf7ef, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff6e5, 1.4);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xebe2cc, 0.7);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xdcd4be, 0.9);
    rimLight.position.set(0, -3, -4);
    scene.add(rimLight);

    // 7. Interactive Mouse / Touch Dragging
    const handlePointerDown = (e) => {
      isDraggingRef.current = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      previousMousePosition.current = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const deltaX = clientX - previousMousePosition.current.x;
      const deltaY = clientY - previousMousePosition.current.y;

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x += deltaY * 0.008;

      previousMousePosition.current = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // 8. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating levitation
      const floatY = Math.sin(elapsedTime * 1.4) * 0.08;
      eggMesh.position.y = floatY;
      shadowPlane.scale.setScalar(1.0 - floatY * 0.4);

      // Auto rotation if enabled and not actively dragging
      if (autoRotate && !isDraggingRef.current) {
        targetRotationRef.current.y += 0.004;
      }

      // Smooth damping interpolation
      eggGroup.rotation.y += (targetRotationRef.current.y - eggGroup.rotation.y) * 0.08;
      eggGroup.rotation.x += (targetRotationRef.current.x - eggGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      eggMaterial.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTexture.dispose();
    };
  }, [autoRotate]);

  const handleReset = () => {
    targetRotationRef.current = { x: 0.15, y: -0.35 };
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0.2, 5.2);
    }
    setInspected(false);
  };

  const handleZoomInspect = () => {
    if (!cameraRef.current) return;
    if (inspected) {
      cameraRef.current.position.z = 5.2;
      setInspected(false);
    } else {
      cameraRef.current.position.z = 3.9;
      setInspected(true);
    }
  };

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Target */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[380px] sm:min-h-[440px] cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Interaction Control Dock */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 bg-brand-cream/90 backdrop-blur-md px-4 py-3 border border-brand-champagne/80 rounded-sm shadow-card pointer-events-auto">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
          <Rotate3D className="w-4 h-4 text-brand-taupe animate-pulse" />
          <span>Interactive 3D Model</span>
          <span className="hidden sm:inline text-brand-muted font-normal text-[10px] tracking-normal">
            (Drag to rotate 360°)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            type="button"
            className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold border transition-colors ${
              autoRotate
                ? 'bg-brand-navy text-brand-cream border-brand-navy'
                : 'bg-brand-ivory text-brand-charcoal border-brand-champagne'
            }`}
          >
            {autoRotate ? 'Rotate: On' : 'Rotate: Off'}
          </button>

          <button
            onClick={handleZoomInspect}
            type="button"
            title="Inspect Shell Curvature"
            className={`p-1.5 border transition-colors ${
              inspected
                ? 'bg-brand-navy text-brand-cream border-brand-navy'
                : 'bg-brand-ivory text-brand-charcoal border-brand-champagne hover:bg-brand-beige/50'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleReset}
            type="button"
            title="Reset View"
            className="p-1.5 bg-brand-ivory text-brand-charcoal border border-brand-champagne hover:bg-brand-beige/50 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
