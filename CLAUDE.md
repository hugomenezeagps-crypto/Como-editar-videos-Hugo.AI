# Edição de vídeo com o Claude

Você grava, o Claude edita. O vídeo entra bruto e sai pronto para postar.

## Como abrir

Abra o **PowerShell** dentro desta pasta:

```powershell
claude
```

Só se for usar a troca de roupa pelo Google Flow (edição premium), abra com `claude --chrome`, que liga o controle do Chrome.

## Qual skill usar

| Situação | Skill |
|---|---|
| Vídeo novo chegou | `nova-edicao` (sempre a primeira) |
| Take único, corte + legenda | `edicao-simples` |
| Vários takes para montar | `edicao-organizacao` |
| Motion sob medida, troca de roupa | `edicao-premium` |
| Qualquer decisão visual | `direcao-de-arte` |

## Regras de trabalho

- **Uma etapa por vez.** Nos pontos marcados "aprovação do usuário", parar e esperar.
- O Claude roda os comandos sozinho (FFmpeg, Python, Remotion). O usuário aprova, assiste e decide.
- `bruto\` é o original: nunca editar. Todo trabalho em `trabalho\`.
- **Contradição ou dado faltando vira pergunta curta ao usuário**, nunca suposição.
- Versões numeradas (v1, v2…). Nunca sobrescrever uma versão já entregue.
- Ao fim de cada trabalho, registrar no `README.md` do trabalho: tempo gasto por etapa e o que deu errado. É assim que o método melhora.

## Pasta de cada trabalho

```
videos\<AAAA-MM-DD>-<titulo>\
  FICHA.md      a ficha de entrada (skill nova-edicao)
  README.md     decisões, fontes, tempos, erros
  bruto\        o vídeo gravado (não mexer)
  referencias\  identidade visual e referências deste vídeo (opcional)
  trabalho\     arquivos intermediários
  flow\         trechos do Flow (Premium)
  remotion\     projeto de motion (Premium)
  entrega\      vídeo final + legenda do post
```

## Música

- **Padrão: Pixabay Music.** A licença do Pixabay permite uso gratuito, inclusive comercial, sem precisar dar crédito. Proibido: revender a música sozinha, sem edição criativa. Resumo: pixabay.com/service/license-summary/ (texto que vale juridicamente: pixabay.com/service/terms/).
- O Claude escolhe 2 ou 3 faixas pelo clima do vídeo (ficha: tema, intuito, público), pelos gêneros e pelo andamento. **O Claude não ouve áudio**: quem aprova a música pelo ouvido é o usuário.
- Registrar no `README.md` do trabalho: nome da faixa, autor, link da página e data do download.
- Mixagem: música ~20 dB abaixo da voz, baixando automaticamente quando há fala (sidechain), fade de entrada e saída.
- Se preferir colocar a música pelo próprio Instagram ao postar, entregar sem música.

## Ferramentas no PC

Node + Remotion 4.0.529, FFmpeg, Python + `faster-whisper` (modelo `medium`).

**Primeiro uso:** conferir se estão instalados (`node -v`, `ffmpeg -version`, `python -c "import faster_whisper"`). Instalar o que faltar (no Windows, `winget`; no Python, `pip`), sempre dizendo antes ao usuário o que vai instalar. Baixar o modelo `medium` do faster-whisper e rodar `npm install` dentro de `modelo-remotion`. No fim, mostrar a lista do que foi instalado.
