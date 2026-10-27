// Identidade visual do vídeo. Preencher com o que a ficha (campo 6) e a direção de arte definirem.
import {loadFont} from '@remotion/google-fonts/Archivo';

// Fonte: qualquer família do Google Fonts. Para trocar, mude o import acima.
// Contraste só por peso: um peso para texto normal, outro para destaque.
export const {fontFamily: FONTE} = loadFont('normal', {weights: ['500', '800'], subsets: ['latin']});
export const PESO_NORMAL = 500;
export const PESO_FORTE = 800;

export const C = {
  fundo: '#050505', // fundo da tela
  texto: '#FFFFFF', // legenda e textos
  destaque: '#FFB600', // palavra-chave da legenda e brilho da faixa de luz
  apoio: '#8A8A8A', // textos secundários, fontes de números
};
