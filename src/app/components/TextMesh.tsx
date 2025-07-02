import { useMemo } from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import fontJson from '../../../public/fonts/roboto.json'; // JSON version of your TTF

type TextMeshProps = {
  text: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  color: string;
};

const TextMesh = ({ text, position, rotation, color }: TextMeshProps) => {
  const font = useMemo(() => {
    const loader = new FontLoader();
    return loader.parse({
      ...fontJson,
      original_font_information: Object.entries(
        fontJson.original_font_information || {}
      ).reduce((acc, [key, value]) => {
        acc[key] = value?.toString?.() ?? '';
        return acc;
      }, {} as Record<string, string>)
    });
  }, []);

  const geometry = useMemo(() => {
    const geom = new TextGeometry(text, {
      font,
      size: 0.23,
      depth: 0.01,
    });
    geom.center(); // Optional: center the text
    return geom;
  }, [text, font]);

  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default TextMesh;
