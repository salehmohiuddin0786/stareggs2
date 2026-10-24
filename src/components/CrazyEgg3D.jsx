'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Zap, 
  Rotate3D, 
  Layers, 
  Activity, 
  Eye, 
  Sliders, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export default function CrazyEgg3D({ className = '' }) {
  const containerRef = useRef(null);
  
  // Interactive UI states
  const [activeMode, setActiveMode] = useState('laser'); // 'porcelain', 'laser', 'exploded', 'wireframe'
  const [autoRotate, setAutoRotate] = useState(true);
  const [explodeAmount, setExplodeAmount] = useState(0); // 0 to 1
  const [pulseCount, setPulseCount] = useState(0);
  const [rotationDeg, setRotationDeg] = useState(0);

  // Three.js internal references
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const eggGroupRef = useRef(null);
  const topShellRef = useRef(null);
  const bottomShellRef = useRef(null);
  const yolkMeshRef = useRef(null);
  const albumenMeshRef = useRef(null);
  const wireframeMeshRef = useRef(null);
  const laserRingRef = useRef(null);
  const particlesRef = useRef(null);
  const rippleRingsRef = useRef([]);

  // Drag interaction refs
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.1, y: 0.4 });
  const activeModeRef = useRef(activeMode);
  const explodeAmountRef = useRef(explodeAmount);

  useEffect(() => {
    activeModeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    explodeAmountRef.current = explodeAmount;
  }, [explodeAmount]);

  useEffect(() => {
    const onPaletteChange = (e) => {
      const palette = e.detail;
      if (laserRingRef.current && palette) {
        if (palette.id === 'saffron-slate') {
          laserRingRef.current.material.color.setHex(0xff933e);
        } else if (palette.id === 'imperial-plum') {
          laserRingRef.current.material.color.setHex(0xaa5e7a);
        } else if (palette.id === 'emerald-cognac') {
          laserRingRef.current.material.color.setHex(0xa55704);
        } else {
          laserRingRef.current.material.color.setHex(0xff8c00);
        }
      }
    };
    window.addEventListener('stareggs-palette-changed', onPaletteChange);
    return () => window.removeEventListener('stareggs-palette-changed', onPaletteChange);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.8);
    cameraRef.current = camera;

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
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Master Egg Group
    const eggGroup = new THREE.Group();
    eggGroupRef.current = eggGroup;
    scene.add(eggGroup);

    // 3. Egg Geometry Helper (Mathematical Ovoid Splitting)
    // We create top shell (y >= 0) and bottom shell (y <= 0) so we can separate them in exploded mode!
    const createHalfEggGeometry = (isTop) => {
      const geo = new THREE.SphereGeometry(
        1.38,
        96,
        64,
        0,
        Math.PI * 2,
        isTop ? 0 : Math.PI / 2,
        Math.PI / 2
      );
      const pos = geo.attributes.position;
      const heightRange = 1.38;

      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);

        const ny = y / heightRange;
        const taper = 1.0 - 0.22 * ny - 0.05 * (ny * ny);

        pos.setX(i, x * taper);
        pos.setZ(i, z * taper);
        pos.setY(i, y * 1.18);
      }
      geo.computeVertexNormals();
      return geo;
    };

    const topShellGeo = createHalfEggGeometry(true);
    const bottomShellGeo = createHalfEggGeometry(false);

    // Shell Material (Pristine Calcium White with Porcelain Luster)
    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfefcf7,
      roughness: 0.32,
      metalness: 0.03,
      clearcoat: 0.35,
      clearcoatRoughness: 0.2,
      reflectivity: 0.5,
      sheen: 0.25,
      sheenColor: new THREE.Color(0xfff3db),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.98,
    });

    const topShell = new THREE.Mesh(topShellGeo, shellMaterial);
    topShell.castShadow = true;
    topShell.receiveShadow = true;
    eggGroup.add(topShell);
    topShellRef.current = topShell;

    const bottomShell = new THREE.Mesh(bottomShellGeo, shellMaterial.clone());
    bottomShell.castShadow = true;
    bottomShell.receiveShadow = true;
    eggGroup.add(bottomShell);
    bottomShellRef.current = bottomShell;

    // 4. Internal Glowing Golden Egg Yolk
    const yolkGeo = new THREE.SphereGeometry(0.72, 64, 64);
    const yolkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffa000,
      emissive: 0xff6200,
      emissiveIntensity: 0.45,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.25, // organic yolk depth
      opacity: 1,
    });
    const yolkMesh = new THREE.Mesh(yolkGeo, yolkMaterial);
    yolkMesh.position.set(0, -0.05, 0);
    eggGroup.add(yolkMesh);
    yolkMeshRef.current = yolkMesh;

    // 5. Albumen Refractive Membrane
    const albumenGeo = new THREE.SphereGeometry(0.98, 48, 48);
    const albumenMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.34,
    });
    const albumenMesh = new THREE.Mesh(albumenGeo, albumenMat);
    albumenMesh.position.set(0, -0.05, 0);
    eggGroup.add(albumenMesh);
    albumenMeshRef.current = albumenMesh;

    // 6. Holographic Cyber Wireframe
    const fullEggWireGeo = new THREE.SphereGeometry(1.4, 32, 24);
    const posW = fullEggWireGeo.attributes.position;
    for (let i = 0; i < posW.count; i++) {
      let x = posW.getX(i);
      let y = posW.getY(i);
      let z = posW.getZ(i);
      const ny = y / 1.4;
      const taper = 1.0 - 0.22 * ny - 0.05 * (ny * ny);
      posW.setX(i, x * taper);
      posW.setZ(i, z * taper);
      posW.setY(i, y * 1.18);
    }
    fullEggWireGeo.computeVertexNormals();

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x07131b,
      wireframe: true,
      transparent: true,
      opacity: 0,
    });
    const wireframeMesh = new THREE.Mesh(fullEggWireGeo, wireframeMat);
    eggGroup.add(wireframeMesh);
    wireframeMeshRef.current = wireframeMesh;

    // 7. Candling Laser Scanning Ring
    const ringGeo = new THREE.TorusGeometry(1.52, 0.025, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff8c00,
      transparent: true,
      opacity: 0.85,
    });
    const laserRing = new THREE.Mesh(ringGeo, ringMat);
    laserRing.rotation.x = Math.PI / 2;
    eggGroup.add(laserRing);
    laserRingRef.current = laserRing;

    // 8. Floating Micro Calcium Particles Atmosphere
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 7;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xdcd2b9,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 9. Soft Ground Shadow
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    grad.addColorStop(0, 'rgba(7, 19, 27, 0.28)');
    grad.addColorStop(0.4, 'rgba(7, 19, 27, 0.1)');
    grad.addColorStop(0.8, 'rgba(7, 19, 27, 0.02)');
    grad.addColorStop(1, 'rgba(7, 19, 27, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 3.6),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.82;
    scene.add(shadowPlane);

    // 10. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfffbf2, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff2d4, 1.8);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xcfd8dc, 1.2);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    const internalCandleLight = new THREE.PointLight(0xff8400, 0, 4);
    internalCandleLight.position.set(0, 0, 0);
    eggGroup.add(internalCandleLight);

    // 11. Mouse / Touch Dragging
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

      targetRotationRef.current.y += deltaX * 0.009;
      targetRotationRef.current.x += deltaY * 0.009;

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

    // 12. Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle floating levitation
      const floatY = Math.sin(elapsed * 1.5) * 0.1;
      eggGroup.position.y = floatY;
      shadowPlane.scale.setScalar(1.0 - floatY * 0.35);

      // Auto rotation
      if (autoRotate && !isDraggingRef.current) {
        targetRotationRef.current.y += 0.006;
      }

      // Smooth damping interpolation
      eggGroup.rotation.y += (targetRotationRef.current.y - eggGroup.rotation.y) * 0.08;
      eggGroup.rotation.x += (targetRotationRef.current.x - eggGroup.rotation.x) * 0.08;

      // Update rotation degrees for HUD display
      const deg = Math.round(((eggGroup.rotation.y % (Math.PI * 2)) / (Math.PI * 2)) * 360);
      setRotationDeg((deg + 360) % 360);

      // Floating particles slow rotation
      if (particles) {
        particles.rotation.y = elapsed * 0.04;
      }

      const mode = activeModeRef.current;
      const explodeVal = mode === 'exploded' ? Math.max(explodeAmountRef.current, 0.85) : explodeAmountRef.current;

      // Mode-specific animations
      if (mode === 'laser') {
        // Laser scanning ring moves up and down
        const laserY = Math.sin(elapsed * 2.2) * 1.25;
        laserRing.position.y = laserY;
        laserRing.visible = true;

        // Shell becomes semi-translucent, showing internal golden yolk!
        topShell.material.opacity = THREE.MathUtils.lerp(topShell.material.opacity, 0.38, 0.1);
        bottomShell.material.opacity = THREE.MathUtils.lerp(bottomShell.material.opacity, 0.38, 0.1);
        topShell.material.roughness = 0.15;
        bottomShell.material.roughness = 0.15;
        internalCandleLight.intensity = THREE.MathUtils.lerp(internalCandleLight.intensity, 3.2, 0.1);
        wireframeMat.opacity = THREE.MathUtils.lerp(wireframeMat.opacity, 0, 0.1);

        yolkMesh.visible = true;
        albumenMesh.visible = true;
      } else if (mode === 'exploded') {
        // Exploded anatomy: Shell halves separate vertically
        laserRing.visible = false;
        internalCandleLight.intensity = 1.2;
        wireframeMat.opacity = THREE.MathUtils.lerp(wireframeMat.opacity, 0, 0.1);

        topShell.material.opacity = THREE.MathUtils.lerp(topShell.material.opacity, 0.95, 0.1);
        bottomShell.material.opacity = THREE.MathUtils.lerp(bottomShell.material.opacity, 0.95, 0.1);

        yolkMesh.visible = true;
        albumenMesh.visible = true;

        // Animate yolk gentle pulsation
        const pulse = 1.0 + Math.sin(elapsed * 3.5) * 0.035;
        yolkMesh.scale.set(pulse, pulse, pulse);
      } else if (mode === 'wireframe') {
        // Cyber wireframe mode
        laserRing.visible = false;
        topShell.material.opacity = THREE.MathUtils.lerp(topShell.material.opacity, 0.1, 0.1);
        bottomShell.material.opacity = THREE.MathUtils.lerp(bottomShell.material.opacity, 0.1, 0.1);
        wireframeMat.opacity = THREE.MathUtils.lerp(wireframeMat.opacity, 0.85, 0.1);
        wireframeMesh.rotation.y = elapsed * 0.2;
        yolkMesh.visible = false;
        albumenMesh.visible = false;
        internalCandleLight.intensity = 0;
      } else {
        // Default pristine porcelain mode
        laserRing.visible = false;
        topShell.material.opacity = THREE.MathUtils.lerp(topShell.material.opacity, 0.98, 0.1);
        bottomShell.material.opacity = THREE.MathUtils.lerp(bottomShell.material.opacity, 0.98, 0.1);
        topShell.material.roughness = 0.32;
        bottomShell.material.roughness = 0.32;
        internalCandleLight.intensity = 0;
        wireframeMat.opacity = THREE.MathUtils.lerp(wireframeMat.opacity, 0, 0.1);
        yolkMesh.visible = false;
        albumenMesh.visible = false;
      }

      // Smooth explosion displacement
      const targetSep = explodeVal * 0.95;
      topShell.position.y += (targetSep - topShell.position.y) * 0.1;
      bottomShell.position.y += (-targetSep - bottomShell.position.y) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
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
      topShellGeo.dispose();
      bottomShellGeo.dispose();
      yolkGeo.dispose();
      albumenGeo.dispose();
      fullEggWireGeo.dispose();
      ringGeo.dispose();
      particleGeo.dispose();
      shadowTex.dispose();
    };
  }, [autoRotate]);

  const handleResetAngle = () => {
    targetRotationRef.current = { x: 0.1, y: 0.4 };
  };

  const handleTriggerPulse = () => {
    setPulseCount((c) => c + 1);
  };

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        onClick={handleTriggerPulse}
        className="w-full h-full min-h-[440px] sm:min-h-[540px] cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Futuristic Real-Time Quality HUD Overlay (Left & Right) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cream/90 backdrop-blur-md border border-brand-champagne/80 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-charcoal">
          <Activity className="w-3.5 h-3.5 text-brand-navy animate-pulse" />
          <span>Real-Time 3D Laboratory</span>
        </div>
        <div className="p-3 bg-brand-cream/80 backdrop-blur-md border border-brand-champagne/60 rounded-sm text-[11px] font-mono text-brand-charcoal/90 space-y-1 shadow-sm hidden sm:block">
          <p className="flex justify-between gap-4">
            <span className="text-brand-muted">BEAM STATUS:</span>
            <span className="font-semibold text-brand-navy">ACTIVE OPTICAL</span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-brand-muted">CALCIUM INDEX:</span>
            <span className="font-semibold text-emerald-700">99.4% DENSE</span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-brand-muted">HAUGH UNIT:</span>
            <span className="font-semibold">88 (GRADE AA)</span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-brand-muted">ROTATION:</span>
            <span>{rotationDeg}°</span>
          </p>
        </div>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 pointer-events-none hidden md:block">
        <div className="p-3 bg-brand-cream/80 backdrop-blur-md border border-brand-champagne/60 rounded-sm text-[11px] font-mono text-brand-charcoal/90 space-y-1 shadow-sm text-right">
          <p className="text-brand-muted uppercase text-[9px] tracking-wider">Quality Diagnostic</p>
          <p className="font-semibold text-brand-navy">0.38mm Shell Thickness</p>
          <p className="text-emerald-700">✓ 100% Candling Verified</p>
          <p className="text-brand-muted">Zero Hairline Defects</p>
        </div>
      </div>

      {/* Main Mode Switcher Deck (Bottom Toolbar) */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-col gap-2.5 bg-brand-cream/95 backdrop-blur-md p-3 sm:p-4 border border-brand-champagne/80 rounded-sm shadow-card pointer-events-auto">
        
        {/* Mode Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => {
              setActiveMode('laser');
              setExplodeAmount(0);
            }}
            type="button"
            className={`flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-wider font-semibold border transition-all ${
              activeMode === 'laser'
                ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-sm'
                : 'bg-brand-ivory/50 text-brand-charcoal border-brand-champagne hover:bg-brand-ivory'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Laser Candling</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('exploded');
              setExplodeAmount(0.85);
            }}
            type="button"
            className={`flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-wider font-semibold border transition-all ${
              activeMode === 'exploded'
                ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-sm'
                : 'bg-brand-ivory/50 text-brand-charcoal border-brand-champagne hover:bg-brand-ivory'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Explode & Yolk</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('porcelain');
              setExplodeAmount(0);
            }}
            type="button"
            className={`flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-wider font-semibold border transition-all ${
              activeMode === 'porcelain'
                ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-sm'
                : 'bg-brand-ivory/50 text-brand-charcoal border-brand-champagne hover:bg-brand-ivory'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Porcelain Shell</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('wireframe');
              setExplodeAmount(0);
            }}
            type="button"
            className={`flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-wider font-semibold border transition-all ${
              activeMode === 'wireframe'
                ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-sm'
                : 'bg-brand-ivory/50 text-brand-charcoal border-brand-champagne hover:bg-brand-ivory'
            }`}
          >
            <Rotate3D className="w-3.5 h-3.5" />
            <span>Holo Wireframe</span>
          </button>
        </div>

        {/* Dynamic Controls Strip: Explode Slider + Auto-rotate + Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-brand-champagne/40 text-xs">
          
          {/* Explode Distance Slider (active in exploded mode) */}
          {activeMode === 'exploded' ? (
            <div className="flex items-center gap-2 flex-1 max-w-xs">
              <span className="text-[10px] uppercase tracking-wider text-brand-muted whitespace-nowrap font-medium">
                Split Gap:
              </span>
              <input
                type="range"
                min="0"
                max="1.2"
                step="0.05"
                value={explodeAmount}
                onChange={(e) => setExplodeAmount(parseFloat(e.target.value))}
                className="w-full accent-brand-navy cursor-pointer h-1.5 bg-brand-champagne/60 rounded-none"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[11px] text-brand-muted">
              <Rotate3D className="w-3.5 h-3.5 text-brand-taupe animate-spin" style={{ animationDuration: '6s' }} />
              <span>Click & Drag to rotate 360° | Click egg to pulse</span>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              type="button"
              className={`px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border transition-colors ${
                autoRotate
                  ? 'bg-brand-navy text-brand-cream border-brand-navy'
                  : 'bg-brand-ivory text-brand-charcoal border-brand-champagne'
              }`}
            >
              {autoRotate ? 'Auto-Spin: ON' : 'Auto-Spin: OFF'}
            </button>

            <button
              onClick={handleResetAngle}
              type="button"
              title="Reset View Position"
              className="p-1.5 bg-brand-ivory text-brand-charcoal border border-brand-champagne hover:bg-brand-beige/50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
