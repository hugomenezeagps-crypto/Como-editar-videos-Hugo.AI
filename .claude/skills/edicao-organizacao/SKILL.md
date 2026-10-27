---
name: edicao-organizacao
description: Use quando chegam vários takes e é preciso escolher os melhores e montar a ordem do vídeo antes de editar.
---

# Edição Organização

Igual à `edicao-simples`, com uma etapa a mais **entre a transcrição e o corte**.

1. Etapa 0 da `edicao-simples` em **cada** take.
2. Transcrever todos os takes (etapa 1), um `words-<take>.json` por arquivo.
3. **Montagem:** para cada frase do roteiro (ou do assunto, se não houver roteiro), listar os takes que a contêm e escolher o melhor: fala completa, sem tropeço, melhor energia e volume.
4. Escrever `trabalho\montagem.md`: tabela com ordem, frase, take escolhido, tempo de início e fim, motivo da escolha.
5. **Aprovação do usuário** da montagem.
6. Juntar os trechos (mesma resolução e 30fps; normalizar antes de juntar) e seguir da etapa 2 em diante da `edicao-simples`.

Se dois takes tiverem enquadramento ou luz muito diferentes, avisar o usuário antes de juntar: o corte vai aparecer.
