"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MetallicBeam3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip on reduced motion or mobile devices (< 768px)
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for object
    const group = new THREE.Group();
    scene.add(group);

    // Create a stylized industrial stainless steel geometrical node (structural dodecahedron + steel struts)
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0xdde2e8,
      metalness: 0.92,
      roughness: 0.22,
    });

    const orangeAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7628,
      metalness: 0.85,
      roughness: 0.3,
      emissive: 0xff4d00,
      emissiveIntensity: 0.25,
    });

    // Central geometric node
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMesh = new THREE.Mesh(coreGeo, steelMaterial);
    group.add(coreMesh);

    // Outer architectural steel wireframe ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.035, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeo, steelMaterial);
    group.add(ringMesh);

    // Accent inner glowing orbital ring
    const innerRingGeo = new THREE.TorusGeometry(1.15, 0.025, 16, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, orangeAccentMaterial);
    innerRingMesh.rotation.x = Math.PI / 3;
    group.add(innerRingMesh);

    // Lighting: Cool industrial steel key light + fiery orange fill light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const weldingLight = new THREE.PointLight(0xff7628, 4.0, 10);
    weldingLight.position.set(-2.5, -1.5, 1.5);
    scene.add(weldingLight);

    const ambientLight = new THREE.AmbientLight(0x222b35, 1.2);
    scene.add(ambientLight);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      // Smooth interpolation to target mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Continuous slow rotation
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x += 0.003;

      ringMesh.rotation.y -= 0.003;
      ringMesh.rotation.x += 0.002;

      innerRingMesh.rotation.z += 0.006;

      group.rotation.y = mouseX;
      group.rotation.x = -mouseY;

      // Subtle flickering of the welding point light
      weldingLight.intensity = 3.5 + Math.sin(Date.now() * 0.01) * 0.8;

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up Three.js resources
      coreGeo.dispose();
      ringGeo.dispose();
      innerRingGeo.dispose();
      steelMaterial.dispose();
      orangeAccentMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative hidden h-72 w-72 md:block lg:h-96 lg:w-96 select-none"
      aria-label="3D Stainless Steel Precision Structure"
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-radial from-[#FF7628]/10 via-transparent to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}
