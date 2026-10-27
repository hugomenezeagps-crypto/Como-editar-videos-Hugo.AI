import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {FPS} from './lib';
import {C} from './tema';
import {Card} from './Card';
import {Captions} from './Captions';
import {Band} from './Wipe';

// Camadas, de baixo para cima: fundo → cenas do motion → faixa de luz → cartão → legenda.
// As cenas de cada vídeo nascem do ROTEIRO-CRIACAO.md (skill direcao-de-arte) e entram no lugar marcado.
// Para trocar de cena junto com a troca de roupa, use <Swap t={t} k={0} old={<CenaA t={t} />} neu={<CenaB t={t} />} /> (Wipe.tsx).
export const Video: React.FC = () => {
  const t = useCurrentFrame() / FPS;
  return (
    <AbsoluteFill style={{background: C.fundo}}>
      {/* cenas do motion aqui (metade de cima da tela) */}
      <Band t={t} />
      <Card t={t} />
      <Captions t={t} />
    </AbsoluteFill>
  );
};
