const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true, transparent: true, opacity: 0.3 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);
torusKnot.position.x = 15;
camera.position.z = 30;

let mouseX = 0; let mouseY = 0; let targetX = 0; let targetY = 0;
const windowHalfX = window.innerWidth / 2; const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
});

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.y += 0.005; torusKnot.rotation.x += 0.002;
    targetX = mouseX * 0.001; targetY = mouseY * 0.001;
    torusKnot.rotation.y += 0.05 * (targetX - torusKnot.rotation.y);
    torusKnot.rotation.x += 0.05 * (targetY - torusKnot.rotation.x);
    renderer.render(scene, camera);
}
animate();