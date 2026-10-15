import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const container = document.querySelector('#blenderScene');
if (container) {
  const status = container.querySelector('.blender-status span:last-child');
  const css = document.createElement('style');
  css.textContent = '.three-logo-canvas{position:absolute!important;inset:44px 0 25px;width:100%!important;height:calc(100% - 69px)!important;z-index:2;touch-action:none}.blender-scene .logo-model{display:none}';
  document.head.append(css);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.5, 8);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = 'three-logo-canvas';
  container.append(renderer.domElement);

  const mark = new THREE.Group();
  mark.rotation.set(-0.28, 0.48, 0.04);
  scene.add(mark);
  const material = new THREE.MeshStandardMaterial({ color: 0x313842, metalness: 0.45, roughness: 0.25 });
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x637184, metalness: 0.25, roughness: 0.35 });
  const createTube = (points, radius = .12) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, true, 'centripetal'), 90, radius, 10, true), material);
  const roundedRect = (width, height, radius, z, tubeRadius) => {
    const p = [], segments = 10;
    const arc = (cx, cy, start) => { for (let i = 0; i <= segments; i++) { const a = start + i * Math.PI / 2 / segments; p.push(new THREE.Vector3(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, z)); } };
    arc(width / 2 - radius, height / 2 - radius, 0); arc(-width / 2 + radius, height / 2 - radius, Math.PI / 2); arc(-width / 2 + radius, -height / 2 + radius, Math.PI); arc(width / 2 - radius, -height / 2 + radius, Math.PI * 1.5);
    return createTube(p, tubeRadius);
  };
  mark.add(roundedRect(4.3, 4.3, .66, 0, .18));
  mark.add(roundedRect(3.2, 3.2, .42, .05, .15));
  const wPoints = [new THREE.Vector3(-1.34,.38,.18),new THREE.Vector3(-.82,-1.12,.18),new THREE.Vector3(-.26,-.08,.18),new THREE.Vector3(.28,-1.1,.18),new THREE.Vector3(.9,.38,.18),new THREE.Vector3(1.46,-.4,.18)];
  const wCurve = new THREE.CatmullRomCurve3(wPoints, false, 'centripetal');
  const wMesh = new THREE.Mesh(new THREE.TubeGeometry(wCurve, 100, .17, 12, false), material);
  mark.add(wMesh);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(.24,.075,10,32), edgeMaterial); rim.position.set(-.2,.8,.18); mark.add(rim);
  const base = new THREE.Mesh(new THREE.CircleGeometry(3.2,64), new THREE.ShadowMaterial({ color:0x000000, opacity:.35 })); base.rotation.x=-Math.PI/2; base.position.y=-2.2; base.position.z=-.4; base.receiveShadow=true; scene.add(base);
  const key = new THREE.DirectionalLight(0xffffff, 3.2); key.position.set(3,4,6); key.castShadow=true; scene.add(key);
  const fill = new THREE.PointLight(0x8c9eff, 16, 12); fill.position.set(-4,1,3); scene.add(fill);
  const rimLight = new THREE.PointLight(0xe4f1ff, 10, 10); rimLight.position.set(2,-2,-2); scene.add(rimLight);
  scene.add(new THREE.AmbientLight(0x91a1b9, 1.2));

  let pointerDown = false, last = { x: 0, y: 0 }, velocity = { x: 0, y: 0 };
  renderer.domElement.addEventListener('pointerdown', e => { pointerDown = true; last = { x:e.clientX, y:e.clientY }; renderer.domElement.setPointerCapture(e.pointerId); e.stopPropagation(); });
  renderer.domElement.addEventListener('pointermove', e => { if (!pointerDown) return; velocity = { x:(e.clientX-last.x)*.012, y:(e.clientY-last.y)*.012 }; mark.rotation.y += velocity.x; mark.rotation.x += velocity.y; mark.rotation.x = Math.max(-.9, Math.min(.7, mark.rotation.x)); last = { x:e.clientX, y:e.clientY }; });
  renderer.domElement.addEventListener('pointerup', () => { pointerDown = false; });
  const resize = () => { const rect = renderer.domElement.getBoundingClientRect(); if (!rect.width || !rect.height) return; renderer.setSize(rect.width,rect.height,false); camera.aspect=rect.width/rect.height; camera.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(container); resize();
  const clock = new THREE.Clock();
  const animate = () => { requestAnimationFrame(animate); const t=clock.getElapsedTime(); if (!pointerDown) { mark.rotation.y += velocity.x; mark.rotation.x += velocity.y; velocity.x *= .92; velocity.y *= .92; if (Math.abs(velocity.x)+Math.abs(velocity.y)<.001) mark.rotation.y = .48 + Math.sin(t*.45)*.13; } mark.position.y = Math.sin(t*.9)*.08; renderer.render(scene,camera); };
  animate();
  if (status) status.textContent = 'Drag to rotate · Three.js';
}
