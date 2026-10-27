import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {FPS} from './lib';
import {DURACAO} from './config';
// "Abertura" = os primeiros 8 s, para a prévia que vai à aprovação antes do render completo.
export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Abertura" component={Video} durationInFrames={Math.round(Math.min(8, DURACAO) * FPS)} fps={FPS} width={1080} height={1920} />
    <Composition id="Video" component={Video} durationInFrames={Math.round(DURACAO * FPS)} fps={FPS} width={1080} height={1920} />
  </>
);
