import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.module.js';
    import {
      OrbitControls
    } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';
    var fractal = new THREE.Group();
    const scale = 0.95

    function angle(scale) {
      let a = 2;
      let b = -2;
      var res1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * (1 - scale * scale)))) / (2 * a);
      var res2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * (1 - scale * scale)))) / (2 * a);
      return Math.asin(Math.min(res1, res2) / scale);
    }

    function draw(edge, a) {
      if (edge > 1) {
        var geometry = new THREE.BoxBufferGeometry(edge, edge, edge);
        var edges = new THREE.EdgesGeometry(geometry);
        var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
          color: 0x00ff66,
          transparent: true,
          opacity: 0.5 * edge / 650 + 0.5
        }));
        line.rotateX(a)
        fractal.add(line)
        a = a + angle(scale)
        draw(edge * scale, a)
      } else {
        console.log('Draw completed')
        scene.add(fractal)
      }
    }
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    draw(650, 0)
    //Camera
    var frustumSize = 1000;
    var aspect = window.innerWidth / window.innerHeight;
    var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);
    camera.position.set(20, 5, 0);
    //Camera controls
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 20;
    controls.maxDistance = 1050;
    controls.update();
    var animate = function() {
      requestAnimationFrame(animate);
      fractal.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();