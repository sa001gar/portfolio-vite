import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const codeSnippets = [
  'const train = async () => {',
  '  await model.fit(x, y);',
  '}',
  'class AI {',
  '  predict(input) {',
  '    return this.forward(input);',
  '  }',
  '}',
  'optimizer.step();',
  'loss.backward();',
  'accuracy.update();',
  'weights.zero_();'
];

const symbols = ['0', '1', '{', '}', '[', ']', '<', '>', '(', ')', '+', '-', '*', '/', '='];

function Stars() {
  const ref = useRef();
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    velocities[i] = Math.random() * 0.2 + 0.1;
  }

  useFrame((state) => {
    const positions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 2] += velocities[i];
      if (positions[i * 3 + 2] > 25) {
        positions[i * 3 + 2] = -25;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#10B981"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingText({ text, position, delay = 0 }) {
  const ref = useRef();
  const initialY = position[1];

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() + delay;
    ref.current.position.y = initialY + Math.sin(time) * 0.3;
    ref.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    ref.current.material.opacity = 0.6 + Math.sin(time) * 0.2;
  });

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
    >
      {text}
    </Text>
  );
}

function CodeSnippets() {
  return codeSnippets.map((snippet, i) => (
    <FloatingText
      key={i}
      text={snippet}
      position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ]}
      delay={i * 0.5}
    />
  ));
}

function Symbols() {
  return symbols.map((symbol, i) => (
    <FloatingText
      key={i}
      text={symbol}
      position={[
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      ]}
      delay={i * 0.3}
    />
  ));
}

export function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, #111827 0%, #000000 100%)'
      }}
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