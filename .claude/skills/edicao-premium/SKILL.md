---
name: edicao-premium
description: Use para a edição premium — motion sob medida que nasce da fala, troca de roupa pelo Google Flow, render em Remotion. Exige a ficha completa e passa pela skill direcao-de-arte.
---

# Edição Premium

Pré-requisito: etapas 0 a 3 da `edicao-simples` feitas (ou da `edicao-organizacao`, se vieram vários takes).

## Etapa P1 — Troca de roupa no Flow (se a ficha pedir)

**Cortar os trechos**
- No máximo **10 segundos** cada (limite do Flow), começando e terminando **entre palavras** (`words.json`).
- Recomprimir para **menos de 10 MB** (limite de envio pelo Chrome): `libx264 -crf 20`, 1920x1080. Nome: `flow\blocoNN-<tema>.mp4`.

**No Flow, pelo Chrome**
1. Abrir o Google Flow na conta do usuário. Se pedir login ou captcha: **parar e chamar o usuário**. O Claude nunca digita senha.
2. Subir o trecho, modelo **Gemini Omni Flash**, selecionar o trecho inteiro.
3. Prompt-modelo (trocar só a descrição da roupa; descrever peça, cor, tecido, gola, mangas):

```
Replace only his <roupa atual> with <roupa nova em detalhe>. Natural fabric folds that follow his body and arm movements.

Keep everything else exactly as in the original: his face, glasses, hair, skin tone, lip movements, hand gestures and their timing, the chair, the wall and background, the lighting and the camera framing. Do not add any objects, text or logos.
```

4. Baixar em **1080p**. Salvar como `flow\blocoNN-<tema>-flow.mp4`.

**Conferir (obrigatório)**
- Quadro a quadro contra o original: rosto, boca acompanhando a voz, fundo, luz.
- **O Flow pode reinventar gestos** (já aconteceu em ~1s de um trecho). Avisar o usuário se aparecer.
- O Flow devolve **24fps**: converter para 30fps ajustando a duração para bater exatamente com o trecho original.
- **Áudio: sempre o original**, nunca o que voltou do Flow.

**Montar a base**
- Encaixar os trechos nos tempos exatos. Transição: **faixa de luz diagonal** (inclinação 0,35, 12 quadros a 30fps, conteúdo novo pela esquerda). Script: `scripts\montar.py` — **ainda não incluído neste repositório**: se a ficha pedir troca de roupa, avisar o usuário antes de começar.
- Salvar `trabalho\base-v1.mp4` → **aprovação do usuário**.

## Etapa P2 — Roteiro de motion

- Chamar a skill `direcao-de-arte` para definir a ideia visual central → **aprovação do usuário**.
- `ROTEIRO-CRIACAO.md`: tabela com bloco, tempo, fala, roupa e o que acontece na tela. Cada elemento amarrado à palavra exata do `words.json`.
- → **Aprovação do usuário**.

## Etapa P3 — Construir no Remotion

- Remotion **4.0.529**, 1080x1920, **60fps**, copiando `modelo-remotion\` para a pasta `remotion\` do vídeo.
- Cartão do vídeo: corte 4:3 do centro, **sempre reduzido, nunca ampliado**. Motion na metade de cima, legenda embaixo sobre o preto.
- Trocas de roupa: a faixa de luz **atravessa a tela inteira** e troca a cena do motion junto (`Wipe.tsx`).
- Conferir com `npx remotion still` em vários quadros antes de qualquer render.

## Etapa P4 — Prévia e render

1. Renderizar **só a abertura** (5 a 8 s) → **aprovação do usuário** (ritmo, tamanho, intensidade).
2. Vídeo inteiro:

```powershell
npx remotion render src/index.ts <Composicao> ..\entrega\<nome>-v1.mp4 --crf=18
```

3. Etapa 5 da `edicao-simples` (conferência e entrega).
