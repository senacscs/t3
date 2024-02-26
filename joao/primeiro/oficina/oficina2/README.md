# Grid no CSS

Grid é uma forma de organizar elementos dentro de outro elemento.
Similar a uma tabela, o grid usa colunas e linhas para organizar seu conteúdo.

Para aplicarmos o grid, precisamos separar o `container` (que armazenam os elementos) e os `childrens` (que estão dentro do container).

## Propriedades

**Container**

No `container` configuramos como a tabela será disposta. Quantas linhas e colunas e qual o tamanho das mesmas.

 - `display: grid; `- Sinaliza que o `container` deve ser uma grid
 - `grid-template-rows` - Mostra quantas e qual o tamanho de cada linha da tabela (horizontal).
 - `grid-template-columns` - Quantidade e tamanho de cada coluna (vertical).
 - `grid-template` - Junta a `grid-template-rows` e `grid-template-columns` em uma propriedade para minimizar a quantidade de código.

Poderíamos seguir apenas com essas propriedades que já seria o suficiente, mas temos também algumas outras propriedades que são importantes em determinadas situações:

**Container** 

- `gap` - Determina o espaço entre cada um dos `childrens` dentro do `container`

**Childrens**

- `grid-column-start` e `grid-row-start` - determina onde começa o `children`
- `grid-column-end` e `grid-row-end` - determina onde termina o `children`
