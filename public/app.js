let { ipcRenderer } = require("electron")
import * as THREE from 'three';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';

function getData() {
  return new Promise((resolve, reject) => {
    ipcRenderer.on("line", (event, line) => {
      let data = line.split(",");
      resolve(data);
    });
  });
}

//setInterval(() => {

//}, 1000);

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(224, 229, 236)");
// Create a camera
var camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);
camera.position.z = -150;
camera.position.y = 135;
camera.position.x = 150;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);
const canvas = document.querySelector('canvas');
const width = window.innerWidth * 0.5;
canvas.style.width = `${width}px`;
canvas.style.height = `auto`;

// Ad 3D object
const loader = new GLTFLoader();

loader.load('./assets/3D/tesla.glb', function (gltf) {
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

loader.load('./assets/3D/az.glb', function (gltf) {
  const obj1 = gltf.scene.clone();
  obj1.scale.set(2, 2, 2);
  obj1.rotation.y = 3;
  obj1.position.set(30, -5, 140);

  const obj2 = gltf.scene.clone();
  obj2.scale.set(2, 2, 2);
  obj2.rotation.y = 0;
  obj2.position.set(-30, -5, -140);

  const obj3 = gltf.scene.clone();
  obj3.scale.set(2, 2, 2);
  obj3.rotation.y = -1.5;
  obj3.position.set(70, -5, -30);

  const obj4 = gltf.scene.clone();
  obj4.scale.set(2, 2, 2);
  obj4.rotation.y = 1.5;
  obj4.position.set(-70, -5, 30);

  let data = getData();
  scene.add(obj1);
  scene.add(obj2);
  scene.add(obj3);
  scene.add(obj4);

  obj1.visible = false;
  obj2.visible = false;
  obj3.visible = false;
  obj4.visible = false;

  window.az = function(deger) {
    if(deger[0] > 150)
    {
      obj1.visible = true;
    }else if(deger[0] < 150)
    {
      obj1.visible = false;
    } 
    if(deger[1] > 150)
    {
      obj2.visible = true;
    }else if(deger[1] < 150)
    {
      obj2.visible = false;
    }
    if(deger[2] > 150)
    {
      obj3.visible = true;
    }else if(deger[2] < 150)
    {
      obj3.visible < false;
    }
    if(deger[3] > 150)
    {
      obj4.visible = true;
    }else if(deger[3] < 150)
    {
      obj4.visible = false;
    }
  }

}, undefined, function (error) {

  console.error(error);

});

loader.load('./assets/3D/orta.glb', function (gltf) {
  const obj1 = gltf.scene.clone();
  obj1.scale.set(2, 2, 2);
  obj1.rotation.y = 3;
  obj1.position.set(30, -5, 140);

  const obj2 = gltf.scene.clone();
  obj2.scale.set(2, 2, 2);
  obj2.rotation.y = 0;
  obj2.position.set(-30, -5, -140);

  const obj3 = gltf.scene.clone();
  obj3.scale.set(2, 2, 2);
  obj3.rotation.y = -1.5;
  obj3.position.set(70, -5, -30);

  const obj4 = gltf.scene.clone();
  obj4.scale.set(2, 2, 2);
  obj4.rotation.y = 1.5;
  obj4.position.set(-70, -5, 30);

  scene.add(obj1);
  scene.add(obj2);
  scene.add(obj3);
  scene.add(obj4);

  obj1.visible = false;
  obj2.visible = false;
  obj3.visible = false;
  obj4.visible = false;

  window.orta = function(deger) {
    if(150 >= deger[0] && deger[0] > 75)
    {
      obj1.visible = true;
    }else if(deger[0] < 150 || deger[0] > 75)
    {
      obj1.visible = false;
    } 
    if(150 >= deger[1] && deger[1] > 75)
    {
      obj2.visible = true;
    }else if(deger[1] < 150 || deger[1] > 75)
    {
      obj2.visible = false;
    }
    if(150 >= deger[2] && deger[2] > 75)
    {
      obj3.visible = true;
    }else if(deger[2] < 150 || deger[2] > 75)
    {
      obj3.visible < false;
    }
    if(150 >= deger[3] && deger[3] > 75)
    {
      obj4.visible = true;
    }else if(deger[3] < 150 || deger[3] > 75)
    {
      obj4.visible = false;
    }
  }

}, undefined, function (error) {

  console.error(error);

});

loader.load('./assets/3D/Cok.glb', function (gltf) {
  const obj1 = gltf.scene.clone();
  obj1.scale.set(2, 2, 2);
  obj1.rotation.y = 3;
  obj1.position.set(30, -5, 140);

  const obj2 = gltf.scene.clone();
  obj2.scale.set(2, 2, 2);
  obj2.rotation.y = 0;
  obj2.position.set(-30, -5, -140);

  const obj3 = gltf.scene.clone();
  obj3.scale.set(2, 2, 2);
  obj3.rotation.y = -1.5;
  obj3.position.set(70, -5, -30);

  const obj4 = gltf.scene.clone();
  obj4.scale.set(2, 2, 2);
  obj4.rotation.y = 1.5;
  obj4.position.set(-70, -5, 30);

  scene.add(obj1);
  scene.add(obj2);
  scene.add(obj3);
  scene.add(obj4);

  obj1.visible = false;
  obj2.visible = false;
  obj3.visible = false;
  obj4.visible = false;

  window.cok = function(deger) {
    if(75 >= deger[0] && deger[0] >= 0)
    {
      obj1.visible = true;
    }else if(deger[0] > 75)
    {
      obj1.visible = false;
    } 
    if(75 >= deger[1] && deger[1] >= 0)
    {
      obj2.visible = true;
    }else if(deger[1] > 75)
    {
      obj2.visible = false;
    }
    if(75 >= deger[2] && deger[2] >= 0)
    {
      obj3.visible = true;
    }else if(deger[2] > 75)
    {
      obj3.visible < false;
    }
    if(75 >= deger[3] && deger[3] >= 0)
    {
      obj4.visible = true;
    }else if(deger[3] > 75)
    {
      obj4.visible = false;
    }
  }

}, undefined, function (error) {

  console.error(error);

});

//Add Isik
var light = new THREE.PointLight(0xffffff, 1, 600);
light.intensity = 3;
light.position.copy(camera.position);
scene.add(light);
var light2 = new THREE.PointLight(0xffffff, 1, 600);
light2.intensity = 3;
light2.position.set(300, 135, -300);
scene.add(light2);
var light3 = new THREE.PointLight(0xffffff, 1, 600);
light3.intensity = 3;
light3.position.set(0, 415, 0);
scene.add(light3);
var light4 = new THREE.PointLight(0xffffff, 1, 600);
light4.intensity = 3;
light4.position.set(5, 271, 353);
scene.add(light4);
var light5 = new THREE.PointLight(0xffffff, 1, 600);
light5.intensity = 3;
light5.position.set(1, 234, -378);
scene.add(light5);
var light6 = new THREE.PointLight(0xffffff, 1, 600);
light6.intensity = 3;
light6.position.set(375, 237, -13);
scene.add(light6);
var light7 = new THREE.PointLight(0xffffff, 1, 600);
light7.intensity = 3;
light7.position.set(-381, 229, -7);
scene.add(light7);

// Add OrbitControls
var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

function updateLightPosition() {
  light.position.copy(camera.position);
}

// Render the scene
function animate() {
  getData().then(data => {
    az(data);
    orta(data);
    cok(data);
    console.log(data)
  });
  requestAnimationFrame(animate);
  //console.log(camera.position)
  controls.update();
  updateLightPosition();
  renderer.render(scene, camera);
}
animate();