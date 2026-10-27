import React from 'react';
import {C} from './tema';
import {WIPES} from './config';
// Faixa de luz das trocas de roupa, estendida para a tela inteira.
// Mesma geometria da faixa que scripts/montar.py grava na base (inclinação 0,35; varre em 12 quadros a 30fps).
export const TILT = 0.35;
const S = 880 / 1440; // escala do cartão (base → tela)
const SPAN = 1920 + TILT * 1080 + 400;
export const wipeP = (t: number, k: number) => (t * 30 - WIPES[k] + 1) / 12;
export const wipeT0 = (k: number) => (WIPES[k] - 1) / 30;
// x da linha da faixa na altura y da tela
export const bandX = (p: number, y: number) => {
  const edge = -200 - TILT * 1080 + p * SPAN;
  const A = 100 + S * (edge - 240 - TILT * 1080);
  return A + TILT * (y - 890);
};
// recorte: lado esquerdo da faixa (conteúdo novo)
export const clipLeft = (p: number) => {
  const y0 = -200;
  const y1 = 2120;
  return `polygon(-3000px ${y0}px, ${bandX(p, y0)}px ${y0}px, ${bandX(p, y1)}px ${y1}px, -3000px ${y1}px)`;
};
export const clipRight = (p: number) => {
  const y0 = -200;
  const y1 = 2120;
  return `polygon(${bandX(p, y0)}px ${y0}px, 4000px ${y0}px, 4000px ${y1}px, ${bandX(p, y1)}px ${y1}px)`;
};
// troca de cena com a faixa: antes = old, depois = neu, durante = recorte
export const Swap: React.FC<{t: number; k: number; old: React.ReactNode; neu: React.ReactNode}> = ({t, k, old, neu}) => {
  const p = wipeP(t, k);
  if (p <= 0) return <>{old}</>;
  if (p >= 1.35) return <>{neu}</>;
  return (
    <>
      <div style={{position: 'absolute', inset: 0, clipPath: clipRight(p)}}>{old}</div>
      <div style={{position: 'absolute', inset: 0, clipPath: clipLeft(p)}}>{neu}</div>
    </>
  );
};
// a faixa em si (fica ABAIXO do cartão: o cartão já tem a faixa gravada pela montar.py)
export const Band: React.FC<{t: number}> = ({t}) => (
  <>
    {WIPES.map((_, k) => {
      const p = wipeP(t, k);
      if (p <= 0 || p >= 1.4) return null;
      const y0 = 0;
      const y1 = 1920;
      const x0 = bandX(p, y0);
      const x1 = bandX(p, y1);
      const pts = (w: number) => `${x0 - w},${y0} ${x0 + w},${y0} ${x1 + w},${y1} ${x1 - w},${y1}`;
      return (
        <svg key={k} width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
          <defs>
            <filter id={`bb${k}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="40" />
            </filter>
            <filter id={`bs${k}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>
          <polygon points={pts(120)} fill={C.destaque} opacity={0.28} filter={`url(#bb${k})`} />
          <polygon points={pts(26)} fill="#FFFFFF" opacity={0.85} filter={`url(#bs${k})`} />
          <polygon points={pts(4)} fill="#FFFFFF" opacity={0.95} />
        </svg>
      );
    })}
  </>
);
