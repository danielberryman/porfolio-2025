// app/components/DiceCanvas.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Text } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import * as THREE from 'three'
import TextMesh from './TextMesh'

// app/config/diceLabels.ts
export const DICE_FACE_LABELS = [
  'About', 'Projects', 'Skills', 'Contact',
  'Blog', 'Resume', 'GitHub', 'LinkedIn',
  'Stack', 'Art', 'Music', 'Fun',
  'Work', 'Story', 'Values', 'Now',
  'FAQ', 'Hire', 'Code', 'Speak',
]

type FaceLabel = {
  position: THREE.Vector3
  rotation: THREE.Euler
}

export default function DiceCanvas() {
  return (
    <Canvas style={{ height: '45vh' }} camera={{ position: [0, 0, 8], fov: 35 }}>
      <ambientLight intensity={5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />
      <SpinningDice />
      {/* <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={10} /> */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

function SpinningDice() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [geometry, setGeometry] = useState<THREE.IcosahedronGeometry | null>(null)
  const [labelPositions, setLabelPositions] = useState<FaceLabel[]>([])
  const [faceGeometries, setFaceGeometries] = useState<THREE.BufferGeometry[]>([])
  const [hoveredFace, setHoveredFace] = useState<number | null>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x += 0.000
    }
  })

  // Only run when geometry is set
  useEffect(() => {
    if (!geometry) return
    if (labelPositions.length > 0) return

    const positions = geometry.getAttribute('position')
    const labels: FaceLabel[] = []

    const labelOffset = 0

    for (let i = 0; i < positions.count; i += 3) {
      const vA = new THREE.Vector3().fromBufferAttribute(positions, i)
      const vB = new THREE.Vector3().fromBufferAttribute(positions, i + 1)
      const vC = new THREE.Vector3().fromBufferAttribute(positions, i + 2)

      const center = new THREE.Vector3()
        .addVectors(vA, vB)
        .add(vC)
        .divideScalar(3)

      const cb = new THREE.Vector3().subVectors(vC, vB)
      const ab = new THREE.Vector3().subVectors(vA, vB)
      const normal = new THREE.Vector3().crossVectors(cb, ab).normalize()

      const position = center.clone().add(normal.clone().multiplyScalar(labelOffset))
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal
      )
      const rotation = new THREE.Euler().setFromQuaternion(quaternion)

      labels.push({ position, rotation })
    }

    console.log("Label Positions:", labels.map(l => l.position))

    setLabelPositions(labels)
  }, [geometry])


  useEffect(() => {
    if (!geometry) return;

    const positionAttr = geometry.getAttribute('position');
    const newGeometries: THREE.BufferGeometry[] = [];

    for (let i = 0; i < positionAttr.count; i += 3) {
      const vA = new THREE.Vector3().fromBufferAttribute(positionAttr, i);
      const vB = new THREE.Vector3().fromBufferAttribute(positionAttr, i + 1);
      const vC = new THREE.Vector3().fromBufferAttribute(positionAttr, i + 2);

      const faceGeometry = new THREE.BufferGeometry().setFromPoints([vA, vB, vC]);
      faceGeometry.setIndex([0, 1, 2]); // make it a triangle

      newGeometries.push(faceGeometry);
    }

    setFaceGeometries(newGeometries);
  }, [geometry]);

  const handleClick = (i: number) => {
    console.log(`Clicked on face ${i}`)
  }

  return (
    <group ref={meshRef} castShadow={false} receiveShadow={false}>
      <mesh>
        <icosahedronGeometry
          args={[2, 0]}
          attach="geometry"
          ref={(geo) => geo && setGeometry(geo)}
        />
        <meshStandardMaterial color="white" roughness={0.4} metalness={0.2} />
        <Edges />
      </mesh>

      {labelPositions.map((face, i) => (
        <group key={i}>
          <TextMesh
            key={i}
            text={DICE_FACE_LABELS[i] ?? ''}
            position={face.position}
            rotation={face.rotation}
            color={hoveredFace === i ? 'white' : 'black'}
          />
        </group>
      ))}

      {faceGeometries.map((faceGeo, i) => (
        <mesh
          key={i}
          geometry={faceGeo}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHoveredFace(i);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHoveredFace(null);
            document.body.style.cursor = 'default';
          }}
          onClick={() => handleClick(i)}
        >
          <meshBasicMaterial
            color={hoveredFace === i ? '#62748e' : 'black'}
            transparent={hoveredFace !== i}
            opacity={hoveredFace === i ? 1 : 0}
          />
        </mesh>
      ))}
    </group>
  )
}

// Add black outlines for edges
function Edges() {
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[new THREE.IcosahedronGeometry(2, 0)]} />
      <lineBasicMaterial attach="material" color="black" linewidth={1} />
    </lineSegments>
  )
}
