import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

function SkillsCube() {
  const mountRef = useRef(null);
  const [activeFace, setActiveFace] = useState(0);

  const skills = [
    {
      name: "React",
      description:
        "Experienced with hooks, state management using context api, and component architecture.",
    },
    {
      name: "Three.js",
      description:
        "Creating 3D scenes and interactive experiences on the web. Working with geometries, materials, and textures.",
    },
    {
      name: "express.js",
      description:
        "Developing REST APIs and handling backend logic with Node.js and Express.",
    },
    {
      name: "Mongodb",
      description:
        "Designing and managing databases with clean, scalable schema structures.",
    },
    {
      name: "JavaScript",
      description:
        "Building backend logic and controllers with modern ES6+ JavaScript.",
    },
    {
      name: "GSAP",
      description:
        "Web animations with GSAP. Creating smooth, performant animations for engaging user experiences.",
    },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // ✅ Prevent duplicate renderer safely
    if (mountRef.current.firstChild) {
      mountRef.current.innerHTML = "";
    }

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x09090b);
    scene.background = new THREE.Color(0x18181b);

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new TextureLoader();
    const imagePaths = [
      "/images/react.png",
      "/images/three.png",
      "/images/express.png",
      "/images/mongodb.png",
      "/images/javascript.png",
      "/images/gsap.png",
    ];

    const materials = imagePaths.map(
      (path) =>
        new THREE.MeshStandardMaterial({
          map: textureLoader.load(path),
          metalness: 0.3,
          roughness: 0.5,
        })
    );

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let lastFace = null;
    let frameId;

    const detectActiveFace = () => {
      // Define local-space normals for each cube face
      const normals = [
        new THREE.Vector3(1, 0, 0), // +X
        new THREE.Vector3(-1, 0, 0), // -X
        new THREE.Vector3(0, 1, 0), // +Y
        new THREE.Vector3(0, -1, 0), // -Y
        new THREE.Vector3(0, 0, 1), // +Z
        new THREE.Vector3(0, 0, -1), // -Z
      ];

      let maxDot = -Infinity;
      let faceIndex = 0;
      const cameraDir = new THREE.Vector3(0, 0, 1); // camera looks toward +Z

      // Find which face's normal aligns most with the camera
      for (let i = 0; i < normals.length; i++) {
        const worldNormal = normals[i].clone().applyQuaternion(cube.quaternion);
        const dot = worldNormal.dot(cameraDir);
        if (dot > maxDot) {
          maxDot = dot;
          faceIndex = i;
        }
      }

      if (faceIndex !== lastFace) {
        setActiveFace(faceIndex);
        lastFace = faceIndex;
      }
    };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.01;
      rotationVelocity.x = deltaY * 0.01; // REMOVE the negative sign

      cube.rotation.y += rotationVelocity.y;
      cube.rotation.x += rotationVelocity.x;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      detectActiveFace();
    };

    const onMouseUp = () => (isDragging = false);

    const onTouchStart = (e) => {
      e.preventDefault();
      isDragging = true;
      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.01;
      rotationVelocity.x = deltaY * 0.01; // REMOVE the negative sign

      cube.rotation.y += rotationVelocity.y;
      cube.rotation.x += rotationVelocity.x;
      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      detectActiveFace();
    };

    const onTouchEnd = () => (isDragging = false);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isDragging) {
        cube.rotation.y += rotationVelocity.y;
        cube.rotation.x += rotationVelocity.x;
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
        if (
          Math.abs(rotationVelocity.x) > 0.001 ||
          Math.abs(rotationVelocity.y) > 0.001
        )
          detectActiveFace();
      }
      renderer.render(scene, camera);
    };

    detectActiveFace();
    animate();

    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth || window.innerWidth;
      const newHeight = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    renderer.domElement.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });
    renderer.domElement.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("touchstart", onTouchStart, {
        passive: false,
      });
      renderer.domElement.removeEventListener("touchmove", onTouchMove, {
        passive: false,
      });
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="skills"
      className="w-full h-[78%] lg:h-[90%] realtive flex flex-col justify-center items-center bg-zinc-950 text-white lg:gap-8 gap-2"
    >
      <div className="heading text-center justify-center">
        <h2 className="text-gray-400 text-sm md:text-base font-mono">
          {"{ my skills }"}
        </h2>
      </div>

      <div className="layout w-full h-[90%] lg:h-[80%] flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-4 bg-zinc-950 lg:flex md:justify-center lg:items-center overflow-hidden ">
        {/* CUBE SECTION */}

        <div className="flex justify-center items-center w-full lg:w-[60%] h-[50vh] lg:h-screen lg:justify-start">
          <div
            ref={mountRef}
            className="w-[90%] h-[90%] cursor-grab active:cursor-grabbing"
          />
          {/* <div className="top-8 right-8  px-4 py-2 rounded-lg border border-zinc-800">
          <p className="text-xs text-gray-400">Face: {activeFace + 1}/6</p>
        </div> */}
        </div>

        {/* LEFT TEXT SIDE */}

        <div className="copy flex lg:flex-col justify-center">
          <div>
            <h3 className="skill text-2xl md:text-3xl font-bold text-white transition-all duration-500">
              {skills[activeFace].name}
            </h3>

            <p className="description text-sm max-w-64 h-18 leading-tight mt-2">
              {skills[activeFace].description}
            </p>

            <p className="text-gray-600 text-xs font-mono mt-3">
              ← Drag or touch the cube to explore different skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCube;
