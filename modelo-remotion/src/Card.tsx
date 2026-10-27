import React from 'react';
import {OffthreadVideo, staticFile} from 'remotion';
import {mix, prog, easeInOut} from './lib';
import {ENCOLHE, SAIDA} from './config';
// Cartão com o vídeo da pessoa (public/base.mp4, 4:3). Sempre reduzido, nunca ampliado.
// Começa grande e encolhe para a posição fixa embaixo; a metade de cima fica para o motion.
export const cardBox = (t: number) => {
  const p = prog(t, ENCOLHE[0], ENCOLHE[1], easeInOut);
  const w = mix(1000, 880, p);
  const h = (w * 3) / 4;
  const x = (1080 - w) / 2;
  const y = mix(700, 890, p);
  return {x, y, w, h, p};
};
export const Card: React.FC<{t: number}> = ({t}) => {
  const {x, y, w, h} = cardBox(t);
  const out = prog(t, SAIDA[0], SAIDA[1], easeInOut);
  if (out >= 1) return null;
  return (
    <div style={{position: 'absolute', left: x, top: y + out * 160, width: w, height: h, borderRadius: 40, overflow: 'hidden', background: '#111', opacity: 1 - out, filter: `blur(${out * 10}px)`}}>
      <OffthreadVideo src={staticFile('base.mp4')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      <div style={{position: 'absolute', inset: 0, borderRadius: 40, boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.12)'}} />
    </div>
  );
};
