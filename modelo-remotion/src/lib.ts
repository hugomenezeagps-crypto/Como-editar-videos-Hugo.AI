import {Easing} from 'remotion';
export const FPS = 60;
export const W = 1080;
export const H = 1920;
export const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);
export const easeIn = Easing.bezier(0.5, 0, 0.75, 0);
export const back = Easing.bezier(0.34, 1.45, 0.64, 1);
// progresso 0→1 entre t0 e t1 (segundos), com curva
export const prog = (t: number, t0: number, t1: number, ease: (x: number) => number = easeInOut) => ease(clamp((t - t0) / (t1 - t0)));
export const mix = (a: number, b: number, p: number) => a + (b - a) * p;
// pseudo-aleatório determinístico (mesmo valor em todo render)
export const rnd = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};
