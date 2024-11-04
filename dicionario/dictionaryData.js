const dictionaryData = [
  {
    word: "Abscissa",
    definition:
      "A coordenada que representa a posição horizontal de um ponto em um plano cartesiano, indicando a distância em relação ao eixo y.",
    type: "Substantivo Feminino",
  },

  {
    word: "Afiliação",
    definition:
      "Relação entre duas ou mais figuras geométricas, como o que acontece quando um polígono é inscrito em outro.",
    type: "Substantivo Feminino",
  },

  {
    word: "Bico",
    definition:
      "Um ponto de um polígono onde dois lados se encontram, frequentemente utilizado em contextos de triangulação e análise de formas.",
    type: "Substantivo Masculino",
  },

  {
    word: "Cardinalidade",
    definition:
      "O número de elementos em um conjunto, utilizado para medir o tamanho de conjuntos na matemática, sejam eles finitos ou infinitos.",
    type: "Substantivo Feminino",
  },

  {
    word: "Diagrama",
    definition:
      "Representação gráfica de informações matemáticas ou estatísticas, usada para ilustrar conceitos complexos de maneira visual.",
    type: "Substantivo Masculino",
  },

  {
    word: "Equidistante",
    definition:
      "Descreve pontos que estão à mesma distância de um ponto ou linha de referência, formando uma simetria em relação a essa referência.",
    type: "Adjetivo",
  },

  {
    word: "Fração",
    definition:
      "Representação de uma parte de um todo, expressa como um quociente entre dois números inteiros.",
    type: "Substantivo Feminino",
  },

  {
    word: "Geometria",
    definition:
      "Campo da matemática que estuda as propriedades, relações e formas de figuras e espaços, abrangendo tanto dimensões bidimensionais quanto tridimensionais.",
    type: "Substantivo Feminino",
  },

  {
    word: "Hipotenusa",
    definition:
      "O lado oposto ao ângulo reto em um triângulo retângulo, sendo sempre o maior dos três lados e podendo ser calculado pelo Teorema de Pitágoras.",
    type: "Substantivo Feminino",
  },

  {
    word: "Inequação",
    definition:
      "Expressão matemática que envolve uma desigualdade, indicando relações de maior, menor, maior ou igual, ou menor ou igual entre termos.",
    type: "Substantivo Feminino",
  },

  {
    word: "Janelamento",
    definition:
      "Técnica em estatística que consiste em calcular médias ou outras medidas com base em subconjuntos de dados que se movem ao longo do conjunto total.",
    type: "Substantivo Masculino",
  },

  {
    word: "Kleiniano",
    definition:
      "Relativo a superfícies que não possuem bordas e podem ser visualizadas em três dimensões, como a superfície de Klein.",
    type: "Adjetivo",
  },

  {
    word: "Logaritmo",
    definition:
      "A potência à qual um número fixo (base) deve ser elevado para produzir um determinado número, frequentemente usado para simplificar cálculos de multiplicação e divisão.",
    type: "Substantivo Masculino",
  },

  {
    word: "Matriz",
    definition:
      "Arranjo retangular de números, variáveis ou funções dispostos em linhas e colunas, com ampla aplicação em matemática, física e computação.",
    type: "Substantivo Feminino",
  },

  {
    word: "Números Irracionais",
    definition:
      "Números que não podem ser expressos como uma fração de dois inteiros, como π e √2, possuindo uma expansão decimal infinita e não periódica.",
    type: "Substantivo Masculino, Plural",
  },

  {
    word: "Parábola",
    definition:
      "Curva simétrica resultante de uma seção cônica ao cortar um cone com um plano paralelo a seu lado, comumente associada a equações quadráticas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Quadrante",
    definition:
      "Uma das quatro divisões de um plano cartesiano, delimitadas pelos eixos x e y, com sinais específicos para as coordenadas dos pontos em cada região.",
    type: "Substantivo Masculino",
  },

  {
    word: "Relação",
    definition:
      "Conjunto de pares ordenados que estabelece um vínculo entre os elementos de dois conjuntos, expressando uma correspondência ou associação entre eles.",
    type: "Substantivo Feminino",
  },

  {
    word: "Somatório",
    definition:
      "Operação de adicionar uma sequência de números, representada pelo símbolo Σ, usada para expressar a soma de termos consecutivos.",
    type: "Substantivo Masculino",
  },

  {
    word: "Teorema",
    definition:
      "Afirmação matemática que foi provada como verdadeira com base em axiomas e outras proposições previamente estabelecidas.",
    type: "Substantivo Masculino",
  },

  {
    word: "Anéis",
    definition:
      "Estrutura algébrica com dois tipos de operações (adição e multiplicação) que satisfaz certas propriedades, como a distributividade. Exemplos incluem números inteiros e matrizes.",
    type: "Substantivo Masculino, Plural",
  },

  {
    word: "Caráter",
    definition:
      "Função em teoria de grupos que mapeia elementos de um grupo para números complexos, preservando a estrutura do grupo. Usado em representações de grupos.",
    type: "Substantivo Masculino",
  },

  {
    word: "Cociclo",
    definition:
      "Função em topologia algébrica que aparece em sequências exatas de grupos, relacionada ao cálculo de cohomologia.",
    type: "Substantivo Masculino",
  },

  {
    word: "Coálgebra",
    definition:
      "Estrutura algébrica que é dual à álgebra, onde as operações se comportam como 'desagregações' de elementos, ao contrário de combinações.",
    type: "Substantivo Feminino",
  },

  {
    word: "Cofator",
    definition:
      "Termo associado à matriz adjunta, usado na inversa de matrizes e na expansão de determinantes.",
    type: "Substantivo Masculino",
  },

  {
    word: "Corpo",
    definition:
      "Estrutura algébrica com operações de adição e multiplicação onde a divisão é possível (exceto por zero). Exemplos: números racionais e reais.",
    type: "Substantivo Masculino",
  },

  {
    word: "Espaço Cotangente",
    definition:
      "Para cada ponto de uma variedade diferenciável, o espaço cotangente é o dual do espaço tangente, composto por todas as formas lineares que atuam sobre o espaço tangente.",
    type: "Substantivo Masculino",
  },

  {
    word: "Fibrado Tangente",
    definition:
      "Conjunto de todos os espaços tangentes a cada ponto de uma variedade diferenciável, essencial para estudar a geometria local da variedade.",
    type: "Substantivo Masculino",
  },

  {
    word: "Fibrados",
    definition:
      "Estrutura geométrica que localmente se parece com um produto de dois espaços, mas globalmente pode ter uma forma diferente. Exemplo: fibrado tangente.",
    type: "Substantivo Masculino, Plural",
  },

  {
    word: "Função Zeta",
    definition:
      "Função especial da teoria dos números, como a função zeta de Riemann, que está relacionada à distribuição dos números primos.",
    type: "Substantivo Feminino",
  },

  {
    word: "Grupoide",
    definition:
      "Generalização de um grupo onde as operações nem sempre estão definidas para todos os pares de elementos, mas apenas para alguns.",
    type: "Substantivo Masculino",
  },

  {
    word: "Homomorfismo",
    definition:
      "Função entre duas estruturas algébricas (como grupos ou anéis) que preserva suas operações.",
    type: "Substantivo Masculino",
  },

  {
    word: "Homotopia",
    definition:
      "Conceito da topologia que estuda deformações contínuas entre funções ou formas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Hipersuperfície",
    definition:
      "Subespaço de uma dimensão a menos em relação ao espaço ambiente. Exemplo: uma superfície bidimensional no espaço tridimensional.",
    type: "Substantivo Feminino",
  },

  {
    word: "Isogenia",
    definition:
      "Mapa entre duas curvas elípticas que preserva sua estrutura algébrica. Usado em teoria dos números e criptografia de curvas elípticas.",
    type: "Substantivo Feminino",
  },
  {
    word: "Lema",
    definition:
      "Proposição auxiliar utilizada para demonstrar teoremas ou proposições mais complexas.",
    type: "Substantivo Masculino",
  },

  {
    word: "Grupo Abeliano",
    definition:
      "Tipo de grupo algébrico em que a operação entre elementos é comutativa, ou seja, a ordem em que os elementos são combinados não altera o resultado.",
    type: "Substantivo Masculino",
  },

  {
    word: "Transformada de Fourier",
    definition:
      "Técnica matemática que converte uma função no domínio do tempo (ou espaço) para o domínio da frequência.",
    type: "Substantivo Feminino",
  },

  {
    word: "Função Bijetora",
    definition:
      "Função que é simultaneamente injetora (única para cada valor de saída) e sobrejetora (cobre todo o conjunto de chegada).",
    type: "Substantivo Feminino",
  },

  {
    word: "Criptografia Elíptica",
    definition:
      "Método de criptografia que utiliza as propriedades das curvas elípticas para criar sistemas de chave pública seguros e eficientes.",
    type: "Substantivo Feminino",
  },

  {
    word: "Difeomorfismo",
    definition:
      "Transformação suave e invertível entre dois espaços diferenciais que preserva a estrutura diferenciável.",
    type: "Substantivo Masculino",
  },

  {
    word: "Autovalor",
    definition:
      "Número associado a uma transformação linear que indica o quanto um vetor é 'esticado' ou 'comprimido' ao ser transformado.",
    type: "Substantivo Masculino",
  },

  {
    word: "Autovetor",
    definition:
      "Vetor que, ao ser submetido a uma transformação linear, mantém sua direção original, sendo apenas 'esticado' ou 'comprimido'.",
    type: "Substantivo Masculino",
  },

  {
    word: "Quociente",
    definition: "Resultado da divisão entre dois números.",
    type: "Substantivo Masculino",
  },

  {
    word: "Incógnita",
    definition:
      "Símbolo ou letra representando um número desconhecido em uma equação.",
    type: "Substantivo Feminino",
  },

  {
    word: "Homeomorfismo",
    definition:
      "Transformação contínua e invertível entre dois espaços topológicos que preserva suas propriedades essenciais.",
    type: "Substantivo Masculino",
  },

  {
    word: "Matriz Ortogonal",
    definition:
      "Matriz quadrada cujas colunas e linhas são vetores ortonormais, ou seja, vetores de norma 1 e mutuamente perpendiculares.",
    type: "Substantivo Feminino",
  },

  {
    word: "Conjectura",
    definition:
      "Proposição formulada com base em observações ou indícios, mas sem comprovação formal.",
    type: "Substantivo Feminino",
  },

  {
    word: "Fractal",
    definition:
      "Estrutura geométrica que exibe auto-similaridade em diferentes escalas.",
    type: "Substantivo Masculino",
  },

  {
    word: "Tautologia",
    definition:
      "Proposição verdadeira em todas as circunstâncias, independentemente dos valores das variáveis envolvidas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Gradiente",
    definition:
      "Vetor que indica a direção e a intensidade da maior taxa de variação de uma função em um espaço.",
    type: "Substantivo Masculino",
  },

  {
    word: "Topologia",
    definition:
      "Ramo da matemática que estuda as propriedades dos espaços que permanecem inalteradas sob deformações contínuas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Isomorfismo",
    definition:
      "Correspondência estrutural exata entre dois conjuntos ou estruturas, preservando relações e operações.",
    type: "Substantivo Masculino",
  },

  {
    word: "Monóide",
    definition:
      "Estrutura algébrica com uma operação binária associativa e um elemento neutro.",
    type: "Substantivo Masculino",
  },

  {
    word: "Paraboloide",
    definition:
      "Superfície produzida por uma parábola que se move sobre outra não contida no mesmo plano.",
    type: "Substantivo Masculino",
  },

  {
    word: "Secante",
    definition:
      "Linha que intercepta uma curva em dois pontos; também uma função trigonométrica.",
    type: "Adjetivo",
  },

  {
    word: "Tangente",
    definition:
      "Reta que possui intersecção em somente um ponto de uma circunferência.",
    type: "Adjetivo",
  },

  {
    word: "Vértice",
    definition:
      "Ponto de interseção em uma figura geométrica, como o canto de um polígono ou a ponta de um ângulo.",
    type: "Substantivo Masculino",
  },

  {
    word: "Ábaco",
    definition:
      "Instrumento de contagem e cálculo manual, usado para realizar operações matemáticas simples.",
    type: "Substantivo Masculino",
  },
  {
    word: "Alíquota",
    definition:
      "Percentual aplicado sobre o valor de algo, geralmente usado para calcular impostos ou taxas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Apótema",
    definition:
      "Segmento de reta que vai do centro de um polígono regular até o ponto médio de um de seus lados, sendo perpendicular a ele.",
    type: "Substantivo Feminino",
  },

  {
    word: "Interpolação",
    definition:
      "Método para estimar valores entre dois pontos conhecidos em uma sequência de dados.",
    type: "Substantivo Feminino",
  },

  {
    word: "Pentaminó",
    definition:
      "Figura em duas dimensões formada pela combinação de 5 quadrados congruentes adjacentes.",
    type: "Substantivo Masculino",
  },

  {
    word: "Teodolito",
    definition:
      "Instrumento óptico para medir com precisão ângulos horizontais e verticais, muito usado em trabalhos topográficos.",
    type: "Substantivo Masculino",
  },

  {
    word: "Algoritmo",
    definition:
      "Conjunto finito de instruções ou regras bem definidas e ordenadas que conduzem à solução de um problema específico, muito utilizado em matemática e computação.",
    type: "Substantivo Masculino",
  },

  {
    word: "Assíntota",
    definition:
      "Linha que uma curva se aproxima indefinidamente, mas nunca toca.",
    type: "Substantivo Feminino",
  },

  {
    word: "Bissetriz",
    definition:
      "Reta que divide um ângulo em duas partes iguais, aplicável tanto a ângulos internos quanto externos em figuras geométricas.",
    type: "Substantivo Feminino",
  },

  {
    word: "Comutativo",
    definition:
      "Propriedade de uma operação onde a ordem dos fatores não altera o resultado, como na adição ou multiplicação.",
    type: "Adjetivo",
  },

  {
    word: "Conjunto",
    definition:
      "Coleção de elementos distintos e bem definidos, como números ou objetos, base para muitos conceitos matemáticos.",
    type: "Substantivo Masculino",
  },

  {
    word: "Curva",
    definition:
      "Conjunto de pontos que formam uma linha que não é reta, podendo ser descrita por uma função matemática.",
    type: "Substantivo Feminino",
  },

  {
    word: "Círculo",
    definition:
      "Conjunto de pontos em um plano que estão a uma distância fixa de um ponto central, formando uma figura plana.",
    type: "Substantivo Masculino",
  },

  {
    word: "Sinusoidal",
    definition:
      "Relacionado a ondas senoidais, descreve funções que representam padrões de subida e descida como as funções seno e cosseno.",
    type: "Adjetivo",
  },

  {
    word: "Ortogonal",
    definition:
      "Diz-se de linhas ou vetores que se cruzam em ângulo reto, ou 90 graus, formando uma relação perpendicular.",
    type: "Adjetivo",
  },

  {
    word: "Recta",
    definition:
      "Menor linha entre dois pontos, reta e infinita em ambas as direções em um plano geométrico.",
    type: "Substantivo Feminino",
  },

  {
    word: "Romboide",
    definition:
      "Quadrilátero com lados opostos paralelos e de comprimentos iguais, mas sem ângulos retos.",
    type: "Substantivo Masculino",
  },

  {
    word: "Paralelas",
    definition:
      "Duas ou mais linhas que nunca se encontram, não importa o quanto se prolonguem.",
    type: "Substantivo Feminino, Plural",
  },

  {
    word: "Apótema",
    definition:
      "Segmento de reta que vai do centro de um polígono regular até o ponto médio de um de seus lados, perpendicular a este.",
    type: "Substantivo Feminino",
  },

  {
    word: "Braça",
    definition:
      "Antiga unidade de comprimento equivalente a aproximadamente 1,8 metros, usada para medir profundidades.",
    type: "Substantivo Feminino",
  },

  {
    word: "Icosaedro",
    definition:
      "Poliedro com 20 faces triangulares, uma das formas geométricas regulares.",
    type: "Substantivo Masculino",
  },

  {
    word: "Interpolação",
    definition:
      "Método para encontrar valores intermediários entre dois valores conhecidos em uma sequência de dados.",
    type: "Substantivo Feminino",
  },

  {
    word: "Número de Ouro",
    definition:
      "Número irracional cujo valor aproximado é 1,618, considerado símbolo de harmonia e beleza.",
    type: "Substantivo Masculino",
  },

  {
    word: "Número de Mersenne",
    definition: "Número especial da forma 2^p - 1, onde p é um número primo.",
    type: "Substantivo Masculino",
  },

  {
    word: "Gugol",
    definition:
      "Número representado pelo dígito 1 seguido de 100 zeros (10^100).",
    type: "Substantivo Masculino",
  },

  {
    word: "Teodolito",
    definition:
      "Instrumento óptico para medir ângulos horizontais e verticais com precisão, usado em topografia.",
    type: "Substantivo Masculino",
  },
];
