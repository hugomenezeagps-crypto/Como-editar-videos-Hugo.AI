---
name: nova-edicao
description: Use sempre que chegar um vídeo novo para editar. Cria a pasta do trabalho e preenche a ficha de entrada com o usuário, campo por campo, antes de qualquer edição.
---

# Nova edição

Nenhuma edição começa sem a ficha completa. A ficha é o que define o visual e o ritmo do vídeo: sem ela o Claude adivinha o tema, e é aí que a qualidade cai.

## Passos

1. Perguntar o nome do vídeo. Criar a pasta `videos\<AAAA-MM-DD>-<titulo>\` com `bruto\`, `referencias\`, `trabalho\`, `entrega\` (e `flow\`, `remotion\` só se for Premium).
2. Pedir que o usuário coloque o vídeo bruto em `bruto\` e, se quiser, logo, fontes, prints e vídeos de referência em `referencias\`.
3. Preencher a ficha **uma pergunta por vez**. Campo que o usuário não souber fica como `PENDENTE`, nunca preenchido por suposição.
4. Salvar `FICHA.md` e mostrar ao usuário para confirmar.
5. Chamar a skill da frente escolhida.

## Ficha (FICHA.md)

```markdown
# Ficha — <nome do vídeo>

| Campo | Resposta |
|---|---|
| 1. Nome do vídeo | |
| 2. Frente | Simples / Organização / Premium |
| 3. Tema (do que fala) | |
| 4. Intuito (vender, atrair, educar, institucional) e chamada final | |
| 5. Público | |
| 6. Identidade visual (logo, cores, fonte) — arquivos em `referencias\`, ou "propor" | |
| 7. Referências de qualidade (links ou arquivos em `referencias\`) | |
| 8. Formato e destino (Reels 9:16, YouTube 16:9) e duração | |
| 9. Troca de roupa (sim/não, quais roupas, em qual fala) | |
| 10. Números citados na fala e suas fontes | |
| 11. Prazo | |
```

Campo 6: se a resposta for "propor", a skill `direcao-de-arte` sugere paleta e fonte para aprovação.
Campo 10: número sem fonte não entra no vídeo. Se não houver fonte, avisar o usuário.
