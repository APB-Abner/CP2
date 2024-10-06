import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBViewer = ({ modelo }) => {
  const mountRef = useRef(null); // Referência para o DOM onde será renderizada a cena

  useEffect(() => {
    // Configurar cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Fundo transparente
    renderer.setClearColor(0x000000, 0); // Define a transparência

    // Adicionar o renderizador ao DOM
    mountRef.current.appendChild(renderer.domElement);

    const { clientWidth, clientHeight } = mountRef.current;
    renderer.setSize(clientWidth, clientHeight);

    // Adicionar controles de câmera
    // const controls = new OrbitControls(camera, renderer.domElement);

    // Adicionar luz à cena
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Carregar o modelo GLB
    const loader = new GLTFLoader();
    let mixer; // Armazenar o mixer de animações

    loader.load(modelo, (gltf) => {
      const model = gltf.scene;

      // Ajustar a escala do modelo
      model.scale.set(0.015, 0.015, 0.015);

      // Adicionar o modelo à cena
      scene.add(model);

      // Criar o mixer de animações
      mixer = new THREE.AnimationMixer(model);

      // Reproduzir a primeira animação
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    });

    camera.position.set(0, 3, 5);
    camera.lookAt(0, 0, -8);


    // Função de animação
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta); // Atualizar as animações

      // controls.update(); // Atualizar controles
      renderer.render(scene, camera); // Renderizar a cena
    };
    animate();

    // Ajustar o tamanho da janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup: remover o evento e o renderizador ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ 'max-width': '100%', width: '200%', height: '70vh', margin: '0 auto' }} />;
};

export default GLBViewer;
