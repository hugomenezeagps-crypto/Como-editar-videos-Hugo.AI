// Legenda: gerada a partir do trabalho/words.json do vídeo (tempos em segundos, na linha do tempo da base).
// Cada g(...) é um grupo de 1 a 3 palavras que aparece junto. true = palavra-chave na cor de destaque.
export type Cap = {w: string; t: number; gold?: boolean};
export type Group = Cap[];
type In = [string, number, boolean?];
const g = (...ws: In[]): Group => ws.map(([w, t, gold]) => ({w, t, gold}));

export const GROUPS: Group[] = [
  // exemplo — substituir pelas palavras do vídeo:
  g(['Exemplo', 0.2], ['de', 0.6], ['legenda', 0.8, true]),
];
// fim da última fala (s)
export const CAP_END = 2.0;
