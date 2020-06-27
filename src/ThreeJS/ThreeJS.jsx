import React, { Component } from "react";
import * as THREE from "three";

class ThreeJS extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01; // changes rotation left to right 0.00 only spins like a top
      cube.rotation.y += 0.01; // changes rotation up to down 0.00 spins like a slinky
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default ThreeJS;
