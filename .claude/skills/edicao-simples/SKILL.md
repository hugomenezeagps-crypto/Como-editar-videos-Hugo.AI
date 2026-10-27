---
name: edicao-simples
description: Use para editar um vídeo de take único com corte de pausas, áudio tratado e legenda palavra por palavra. Também é a base técnica que as frentes Organização e Premium reaproveitam.
---

# Edição Simples (e base das outras frentes)

## Etapa 0 — Conferir o bruto

1. `ffprobe`: resolução, fps, duração, áudio.
2. **fps variável → 30fps fixo** antes de qualquer coisa (webcam e celular gravam variável).
3. Espelhado? (texto ao contrário, mão trocada) → `hflip`.
4. Medir o volume (`ebur128`) e anotar no README.
5. Avisar o usuário do que a edição **não** resolve: luz, foco, reflexo nos óculos, mão saindo do quadro.

## Etapa 1 — Transcrever com tempo de cada palavra

- `faster-whisper`, modelo `medium`, `language="pt"`, `word_timestamps=True`.
- `initial_prompt` com os nomes próprios do vídeo (marca, termos técnicos).
- Salvar `trabalho\words.json`. Corrigir a **grafia** pelo roteiro, se houver, mas manter os **tempos** e o que a pessoa **realmente falou**.

## Etapa 2 — Cortar

- Silêncio do começo e do fim (`silencedetect`, −45 dB).
- Pausas internas: cortar só as **maiores que 0,5s**, deixando 0,15s de respiro. Pausa curta é natural; cortar gera pulo de imagem.
- Frase repetida ou errada: achar pelo `words.json` e manter a última versão.

## Etapa 3 — Áudio

```
highpass=f=80, afftdn=nr=10:nf=-45, loudnorm=I=-14:TP=-1.5:LRA=7   (duas passadas)
```

Padrão das redes: **−14 LUFS**, pico abaixo de −1 dB. Efeitos sonoros: volume base × 0,4 (−8 dB); whoosh, mais 60% abaixo disso.

## Etapa 4 — Legenda e render

- Legenda palavra por palavra, 1 a 3 palavras por vez, saindo de desfoque **no instante exato da palavra**, palavra-chave na cor de destaque. Visual definido pela skill `direcao-de-arte`.
- A legenda nunca fica sobre a roupa ou um fundo claro sem contraste.
- Base da legenda: `modelo-remotion\src\Captions.tsx`.
- Prévia dos primeiros 5 a 8 segundos → **aprovação do usuário** → render completo.

## Etapa 5 — Conferência e entrega

- `ffprobe`: resolução, fps, duração. Volume final ~−14 LUFS.
- Assistir começo, meio e fim.
- Legenda do post (com fontes dos números citados; se aparecer marca de terceiros: "Marcas citadas pertencem aos seus respectivos donos").
- Salvar em `entrega\<nome>-v1.mp4`. Registrar no README o tempo gasto.
