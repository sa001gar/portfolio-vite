import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Memoize static data
const codeSnippets = [
  'const train = async () => {',
  '  await model.fit(x, y);',
  '}',
  'class AI {',
  '  predict(input) {',
  '    return this.forward(input);',
  '  }',
  '}'
];

const symbols = ['0', '1', '{', '}', '[', ']', '<', '>', '(', ')'];

function Stars() {
  const ref = useRef();
  const count = 1000; // Reduced for better performance
  
  // Memoize star data
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      velocities[i] = Math.random() * 0.1 + 0.05; // Reduced velocity
    }
    
    return [positions, velocities];
  }, []);

  // Memoize geometry attributes
  const bufferGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  // Optimize animation frame
  useFrame(() => {
    const positionArray = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      positionArray[i * 3 + 2] += velocities[i];
      if (positionArray[i * 3 + 2] > 25) {
        positionArray[i * 3 + 2] = -25;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  // Memoize material
  const material = useMemo(() => (
    new THREE.PointsMaterial({
      size: 0.1,
      color: '#10B981',
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })
  ), []);

  return (
    <points ref={ref} geometry={bufferGeometry} material={material} />
  );
}

const FloatingText = React.memo(({ text, position, delay = 0 }) => {
  const ref = useRef();
  const initialY = position[1];

  const animate = useCallback(({ clock }) => {
    const time = clock.getElapsedTime() + delay;
    ref.current.position.y = initialY + Math.sin(time * 0.5) * 0.3;
    ref.current.rotation.z = Math.sin(time * 0.25) * 0.1;
    ref.current.material.opacity = 0.6 + Math.sin(time * 0.5) * 0.2;
  }, [delay, initialY]);

  useFrame(animate);

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.4}
      color="#10B981"
      font="https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKaJO.woff"
      anchorX="center"
      anchorY="middle"
      transparent
      opacity={0.8}
      renderOrder={2}
    >
      {text}
    </Text>
  );
});

const CodeSnippets = React.memo(() => {
  const positions = useMemo(() => 
    codeSnippets.map(() => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    ]),
    []
  );

  return codeSnippets.map((snippet, i) => (
    <FloatingText
      key={i}
      text={snippet}
      position={positions[i]}
      delay={i * 0.5}
    />
  ));
});

const Symbols = React.memo(() => {
  const positions = useMemo(() => 
    symbols.map(() => [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30
    ]),
    []
  );

  return symbols.map((symbol, i) => (
    <FloatingText
      key={i}
      text={symbol}
      position={positions[i]}
      delay={i * 0.3}
    />
  ));
});

export function NeuralNetwork() {
  // Memoize scene configuration
  const sceneConfig = useMemo(() => ({
    camera: { position: [0, 0, 15], fov: 60 },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at center, #111827 0%, #000000 100%)'
    }
  }), []);

  return (
    <Canvas
      camera={sceneConfig.camera}
      style={sceneConfig.style}
      dpr={[1, 2]} // Limit pixel ratio for performance
      performance={{ min: 0.5 }} // Allow frame rate to drop for performance
    >
      <React.Suspense fallback={null}>
        <Stars />
        <CodeSnippets />
        <Symbols />
        <fog attach="fog" args={['#000', 5, 30]} />
      </React.Suspense>
    </Canvas>
  );
}