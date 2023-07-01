var THREE = require('three');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);


var scene = new THREE.Scene();
// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 2;
camera.position.x = 3;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/

var objLoader = new OBJLoader();
objLoader.load('./assets/3D.Car.obj', function ( object ) {
  // Add the object to the scene
  scene.add( object );
  // Render the scene
});

//Creare obje
renderer.render(scene, camera);
















var THREE = require('three');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);


var scene = new THREE.Scene();
// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 2;
camera.position.x = 3;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Creare obje
renderer.render(scene, camera);