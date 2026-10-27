// Tempos do vídeo (segundos). Preencher com os dados do trabalho/words.json e da base.
export const DURACAO = 10; // duração total do vídeo final
export const ENCOLHE = [5.0, 6.7]; // o cartão começa grande e encolhe para a posição fixa entre estes tempos
export const SAIDA = [DURACAO - 0.6, DURACAO]; // o cartão sai (desfoca e desce) entre estes tempos
// Quadro inicial (a 30fps, na base) de cada troca de roupa feita com scripts/montar.py.
// Vazio = vídeo sem troca de roupa.
export const WIPES: number[] = [];
