# Course description:

Aprenda uma base sólida de HTML, CSS e JS criando um site do zero com foco nos elementos de interface e interações.

## Pelos números

### Nível de experiência: Todos os níveis

### Idiomas: Português

### Aulas: 219

### Vídeo: 49,5 horas no total

## AULA 2

1. Cite e descreva cada um dos estágios de um projeto front-end para website.

## Aula 4

1. Como é composta a estrutura de um documento HTML.
   > É composta pela declaração de documento html, o html em si, head e body. Dentro do body é possível usar main, footer e header.
2. Detalhe as peculiaridades e funções de cada um dos elementos da estrutura de um documento HTML.
   > O head é o espaço no qual são realizadas configurações da página como folha de estilo, javascript, titulo, modos de compatibilidade de navegadores e dispositivos;
   > No body estão contidos o verdadeiro conteúdo da página web. Ele se subdivide em header, ou cabeçalho, comumente utilizado para títulos, barras de navegação ou outros elementos característicos de topos de páginas;
   > é possível usar a divisão de main, na qual estará contido o conteúdo de fato da página. Textos, imagens, vídeos, todas as possibilidades;
   > por fim, o footer envolve o rodapé da página comumente utilizado para links úteis, direitos autorais, links de contato, informações extras, trademarks, etc.
3. Colocando os conhecimentos adquiridos em prática, crie e escreva à mão um documento HTML do zero com dois títulos.

`<!DOCTYPE html>`<br>
`<html>`<br>
`<head>`<br>
`<title>Titulo 1</title>`<br>
`<meta charset="UTF-8">`<br>
`<meta name="viewport" content="width=device-width, initial-scale=10">`  
`<link rel="stylesheet" hred="styles.css">`
`</head>`<br>
`<body>`<br>
`<h1>Titulo 2</h1>`<br>
`</body>`<br>
`</html>`

4. Explique o conceito de hierarquia na construção de páginas HTML. Dê exemplos.
   > A hierarquia na construção de páginas HTML se refere às boas práticas de relacionamento por aninhamento entre os elementos da linguagem de marcação garantindo coesão lógica e organização. Um exemplo seria o de organizar os títulos em ordem de importância, sendo h1 o mais externo e os h2-6 mais internos a ele. Outro exemplo seria o de uma lista aninhada na qual teriamos a tag `<ul>` e dentro dela `<li>`.

## AULA 9

1. Para quê servem tags do tipo meta? Cite exemplos
   > Tags do tipo meta são transparentes aos usuários e servem para setar configurações nos documentos html para serem interpretados pelos navegadores e otimizar mecanismos de busca. Alguns exemplos são o meta author, keywords, description, viewport
2. Escreva um título com os seguintes atributos de estilo inline no HTML: cor preta, fonte de 32 pixels e a fonte arial.
   > check
3. Escreva uma tag de estilo com uma classe chamada txt-azul com a fonte Courier-new, courier, monospace, fonte de 18px e cor #3369ff e outra classe box com alinhamento de texto no centro, margin de 30px na disposição de tabela e largura e altura de 400x300 e fundo ff9966 e uma borda de 8px e uma sombra de caixa 4px 4px 12 px preta e atribuir à uma div.
   > check

## AULA 10

1. Qual a boa prática a ser seguida no que tange a escrita de atributos no CSS? Dê um exemplo.
   > A boa prática é seguir uma ordem lógica na sequência dos atributos. Um exemplo seria escrever width e em seguida height, por exemplo.
2. Escreva como é atribuido um arquivo CSS a uma página html para um arquivo local e para um arquivo externo.
   > Essa atribuição é realizada por meio da tag `<link>` no header do documento html, fazendo referência ao nome e ao path do arquivo CSS.
3. Quando se escreve atributos de classe e tag que são atribuídas ao mesmo elemento, qual deles exerce prioridade? A ordem interfere no resultado? E no caso de atributos diferentes para a mesma tag, que resultado será exibido?
   > Como sugere o nome Cascading Style Sheets, a hierarquia é proposta em cascata, as alterações são realizadas de cima para baixo. Sim, a ordem interfere no resultado já que nesse modelo, as alterações são feitas sequencialmente, logo a última é a definitiva. O atributo sucessor.

## AULA 11 - Tipografia na web

1. O que são web safe fonts? Cite ao menos 2 delas.
   > Web safe fonts são fontes comuns para texto que estão por padrão prontamente disponíveis nos navegadores e que podem ser carregadas de forma acessível por todos. Arial e Verdana.
2. Quais são e quais as características das categorias de fontes.
   > Sans Serif, Serif, Monospace e Cursive. As sans serif não possuem serifa, que são pequenas saliências nas extremidades dos caracteres, as serif possuem, as monospace possuem o mesmo tamanho e comprimento independentemente do caractere e as cursive imitam a escrita à mão.
3. Como um desenvolvedor deve pensar quanto à escolha da fonte que será utilizada no seu projeto?
   > O devenvolvedor deve escolher tendo em mente critérios como acessibilidade, fontes com serifa podem dificultar a leitura para deficientes visuais com miopia ou baixo grau de cegueira; o contexto, o público alvo, o design da página.
4. Cite os 6 sites de fontes disponíveis para desenvolvedores e as utilidades de cada um.
   > google fonts, dafont, fontsquirrel, adobe fonts, font pair e a falecida typekit que foi absorvida pela adobe.

## AULA 12 - Cores na Web

1. Quais 3 as maneiras de se escrever códigos de cores? Exemplifique.
   > com `#fff` que significa que cada caractere se repete uma vez na posição seguinte `#ffffff` ou `rgb(255,255,255)`.
2. Páginas web possuem a totalidade de cores disponiveis? Qual a recomendação de boa prática na escolha da palheta do projeto?
   > Nem todas. Existem as chamadas webcolors, um conjunto limitado de cores que remontam às cores que poderiam ser exibidas nos monitores de tubo e navegadores mais antigos, em contraste com os milhões de cores disponíveis hoje em dia com os monitores digitais e navegadores mais modernos. É recomendável que se visando o critério de acessibilidade se use webcolors mantendo a observância do alto contraste de no mínimo 7.1 na palheta de cores do site.

## AULA 13 - CCS 1

1. Escreva uma página html com um css atribuído;

   1.1. A cor da página deve ser f2f4f5;

   1.2. Deve haver um banner com largura e altura 1366px x 60px, cor 9013fe.

   1.3. Como fazer para o elemento se tornar dinâmico independentemente do dispositivo de exibição;

   1.4 Deve haver uma caixa que englobará os outros elementos e ela deve ser 1000x800 cor #ffffff (simplifique), borda de 8px, e deve ser centralizada, com sombra nela e no banner do topo.

   > check all

2. O que é o padding, border e a margin e como esses elementos atuam numa página html e como manipulá-los;
   > padding é a distância do conteúdo interno do elemento até as suas bordas, border é o tamanho das bordas do elemento e margin é a distância desse elemento para os elementos adjacentes a ele. Podemos manipular com padding, padding-left, padding-right, =-bottom e =-top, border com border-style, border-radius, width e border-color, margin igal a padding.

## AULA 14

1. Crie uma classe “box” com tamanho 300x200, em uma linha horizontal, com a cor #80e817, com borda de 10px e margens superior e esquerda de 25px.
   > check
2. Explique três formas de fazer com que elementos pai e filho não sobreponham suas margens.
   > A primeira forma é utilizando display table no main, a segunda colocando o atributo position absolute e o terceiro é display inline-block e existe a quarta maneira: utilizando float: left. Infelizmente o inline block causa um desviozinho de posição.
3. Qual a recomendação para a nomeação de componentes reutilizáveis em páginas web?
   > É recomendável você nomear genericamente para elementos que se repetirão em diferentes contextos.
4. Explique o que acontece e qual o nome do fenômeno de quando o navegador sobrepõe as margens na exibição dos componentes.
   > Se chama margin collapse, acontece quando as margens de elementos adjacentes tem as suas margens definidas contra um terceiro elemento ancestral.
5. Descreva quais as condições e quais as 3 formas de resolver o fenômeno de sobreposição de margens dos componentes.
   > Acontece com sub-subelementos. Um é usando position absolute, outra float left, outra display inlineblock e a terceira é display table

## AULA 15

1. Crie mais duas caixas e alinhe elas lado-a-lado de duas formas diferentes respeitando as margens.
   > check
2. Relate qual a diferença entre o uso dos 2 métodos.
   > Há uma diferença de espaçamento.
3. Adicione uma borda, uma cor e estilo em cada caixa.
   > Check
4. Refatore as adições de borda, cor e estilo numa única linha.
   > Check com border 4px solid color
5. Corrija o erro gráfico da borda extrapolando o elemento externo fazendo com que a borda fique para dentro.
   > Check com box-sizing:border-box

## AULA 16

1. Crie três botões, um para cada caixa.
   > check
2. Dê as atribuições de estilo segundo as orientações:

- width 300px
- height 45px
- background-color mesma da caixa
- raio de borda 4px
- display bloqueado
- margem do topo 25px
  > check

3. Descreva como funciona o atributo float e quais os possíveis problemas que ele pode provocar.
   > O atributo funciona fazendo os elementos flutuarem e pode dar problema com outros elementos que não flutuam.
4. Descreva como funciona a técnica de clearfix e para que serve.
   > serve pra limpar um espaço, voce cria uma classe clearfix e no css bota o atributo clear: both
5. Aplique a técnica de clearfix para posicionar corretamente os botões logo abaixo das caixas.
   > check
6. Aplique a técnica de flutuação para posicionar corretamente os botões logo abaixo das caixas e por que essa prática é desaconselhada.
   > check e é ruim em um design responsivo porque fica sendo uma coisa independente da outra porque se você precisasse manter o código, seria doloroso fazer todas as readaptações.
7. Refatore o código da página HTML para que ela cumpra os requisitos aconselhados de hierarquia organizando as caixas e bot ões.
   > check
8. Explique a modificação necessária da mudança de display:block para display:table e como isso influencia a estrutura dos objetos filhos.
   > table possui altura de acordo com a altura dos seus componentes internos.

## AULA 17

1. Remova o atributo altura do elemento main e explique a relação da altura com o display:block após a alteração no contêiner e o efeito da substituição de block para table.
   > check
2. Explique qual a função do inspetor de elemento e quais suas peculiaridades.
   > você pode visualizar as margins, paddings e borders, alterar css e visualizar os efeitos em tempo real, visualizar posição e espaçamento dos componentes.
3. Adicione mais seis (06) elementos do tipo caixa e botão perfeitamente alinhados.
   > foi.
4. Analise e faça uma observação sobre o distanciamento entre as caixas e os botões fazendo uso do inspecionador de elementos.
   > O bottom margin e top margin se somam nos elementos do centro.

## AULA 18

1. Explique o que são design patterns destacando sua significância nas diferentes áreas da tecnologia da informação.
   > Design patterns, ou padrões de design em português, são padrões de design elaborados, já testados e sacramentados (?) que servem como padrões para profissionais utilizarem e/ou se basearem.
2. Descreva a design pattern do Atomic Design detalhando cada componente das páginas web representadas por esse paradigma.
   > O atomic design inspira-se no modelo atômico de Bohr, da química para definir de até elementos unitários indivisíveis até uma página como conhecemos. Os agrupamentos desse "átomo" que seria um botão passam pela organização de moléculas juntamente com uma imagem e um texto, por exemplo, unidos em um card se torna um template, templates organizados, relacionados e definidos comportamentos e animações tornam-se organismos e por fim páginas.

## AULA 20

1. Crie uma página html com css ligado, o fundo da pagina da cor #f2f4f5, sem margem, e uma caixa de conteúdo principal com altura dinamica e margem superior de 100 pixels, margem inferior de 0 margem e centralizado.
   > check
2. Crie um contâiner para conter uma foto, um título e opcionalmente um botão verde com letra em branco, ou uma imagem de gato, titulo roxo, texto preto e botão verde em cor branca;
   > check
3. Faça uso de classes e seletores para fazer com que o container tenha essa flexibilidade de possibilidades.
   > check

## AULA 27

1. Cite e descreva os 5 tipos de layouts de páginas web fazendo comparações entre os mesmos.
   > Design estático, fluído, responsivo, orgânico e material. No design estático não é realizada qualquer adaptação da página para o tamanho da tela ou resolução do dispositivo. No design flúido, há uma adaptação por meios de atributos de % para tornar os elementos proporcionais ao tamanho da tela do usuário. No design responsivo, o layout da página toma decisões de componentes e organização diferentes para cada resolução/tamanho de tela de dispositivo visando a melhor e mais satisfatória experiência do usuário. No design orgânico, os elementos da página são espalhados de forma arbitrária pelo espaço da página, sem se limitar a grades. Por fim, o design material preza por um design mais sofisticado, lançando mão de efeitos e ilusões de ótica para tornar a página mais moderna com efeitos como iluminação, brilho, movimento.
2. Cite exemplos de efeitos que caracterizam um layout material.
   > Movimento, sombra, brilho, efeitos de tridimensionalidade.

## AULA 28

1. Explique o que é Media Query.

   > Media Query é uma notação de documentos CSS na qual é possível controlar o comportamento do layout da página de acordo com definições de atribuições de condicionais de acordo com o dispositivo.

2. Descreva como é o formato de um Media Query e como se baseia o seu funcionamento.
   > `@media only sceen and (min-width: 554px)`. Assim que um dispositivo se encaixar no alcance abaixo de 555 pixels, as alterações de atributos escritas abaixo dessa definição serão aplicadas.

## AULA 29

1. Crie uma página html e uma folha de estilo com um título "Eu Sou Front End Designer"
   > check
2. Na folha de estilo faça a página sem margens com a cor de fundo f2f5f7, com uma classe mybox com metade do comprimento, altura de 400 pixels, cor de fundo roxa e 60px de margem superior e centralizada com o texto dentro dela e alinhado no centro, com espaçamento do texto interno de 30px.
   > check
3. escreva um media query para telas com 540 pixels de largura mínima com as características anteriores e descreva o que acontece.
   > Quando a resolução da tela chega a 540 pixels a página perde a formatação.
4. escreva um media query para telas com 320 pixels de largura minima trocando a box para cor amarela, largura de 90%, altura de 400px e demais caracteristicas iguais. O título deve ter fonte arial e cor azul.
   > check
5. escreva outra media query para 1400 px com outras alterações.
   > check
6. Realize a análise e refatoração do css avaliando repetição de código, mantendo ele o mais DRY possível.
   > check
7. Como é possível realizar essa verificação pelo navegador?
   > Utilizando a ferramenta de inspeção dos navegadores.
8. Como é possível visualizar a responsívidade do seu design em dispositivos populares como o iphone 6/7?
   > No topo do inspecionador de elementos, com o icone de dispositivos mobile, existem funcionalidades para simular a tela dos mais populares dispositivos.

## AULA 30

1. Qual o nome do site utilizado para verificar a compatibilidade dos navegadores com elementos css, html e javascript?
   > caniuse.com

## AULA 31

1. O que são sistemas de grid e o que eles fazem?
   > Sistemas de grid, ou sistemas de grades são coleções de código pronto de formas para auxiliar o desenvolvedor na organização dos elementos da página.
2. Quais os beneficios do uso de um sistema de grids?
   > Uma maior facilidade e agilidade de desenvolvimento na hora de organizar os componentes e montar o layout da página.
3. Quais os 3 frameworks mais populares?
   > bootstrap, foudation e materialize
4. Explique como funciona a divisão de grid nos frameworks de código css.
   > Funciona dividindo a pagina em 12 colunas mas é possivel dividir em mais ou menos colunas editando os documentos css.
5. Como utilizar o sistema de divisão de grid dos frameworks?
   > Você precisa adicionar os documentos css prontos desses sistemas ou instalá-los automaticamente com algum documento de gerenciamento de pacote.
6. Como funciona e qual o código para o controle de espaçamento e responsividade dos elementos nos sistemas de divisão de grid nos frameworks? Dê um exemplo explicativo.
   > O controle de espaçamento é feito aplicado no código html como se fosse qualquer outro código css: por meio da aplicação de classes. Ex: `<div class="col-12">`. Segue da col-otamanhodaview-numerdecolunas.
7. Qual o prefixo de classes para cada tamanho de tela?
   > Se não colocar nada após o col é extra small <576, se colocar sm, é >=576, se md é >=768, lg >=992, xl >= 1200

## AULA 32

1. Baixe e utilize o bootstrap-grid.css em um novo documento html.
   > check
2. crie uma caixa azul com 100px de altura sem bordas e margens para a caixa ocupar todo topo da tela.
   > check
3. Crie uma classe para div na caixa com cor yellowgreen, height 80px e margin-top 10px.
   > check
4. Crie 3 classes de divs e organize elas com categorias para cada tamanho de tela para que elas se organizem em colunas.
   > check

## AULA 34

1. Crie um documento html com 4 divs com um texto contendo o algarismo de 1 a 4, dentro de um conteiner.
   > check
2. Atribua a todas elas o display flex.
   > check
3. Quais são os 4 atributos de direção do flex-box?
   > Os 4 atributos de flex-direction de flex-box são: row, row-reverse, column e column-reverse.

## AULA 35

1. Crie mais duas divisões e rearranje as divisorias deixando espaços vagos nos 4 quadrantes.
   > usando e permutando row/colum e row-reverse/column-reverse com flex-wrap wrap e flex-wrap wrap-reverse

## AULA 36

1. Refaça a atividade anterior fazendo uso de flex-flow.
   > flex-flow: wrap/wrap-reverse row/row-reverse
2. Aplique a flexibilidade flex-start.
   > justify-content: flex-start
3. aplique a flexibilidade flex-end
   > justify-content: flex-end
4. centralize os elementos utilizando flex
   > justify-content: center
5. aplique o espaçamento igual enconstando nos cantos
   > justify-content: space-around
6. aplique o espaçamento igual incluindo as bordas.
   > justify-content: space-evenly
7. Agora altere os sentidos dos justify-contents para linhas e depois colunas.
   > check basta usar a uniao de justify-content com flex-direction: row/column

## AULA 37

1. Utilizando os elementos da AULA 35, faça com que os textos se alinhem no topo;
   > check
2. Faça com que os elementos se alinhem na base;
   > align-items: flex-end
3. Faça com que os elementos se alinhem no centro;
   > align-items: center
4. faça com que os elementos se estiquem para cobrir tudo.
   > align-items: stretch
5. faça com que se alinhem com base no texto
   > align-items: baseline, é mais eficiente quando se tem componentes de alturas diferentes.

## AULA 38

1. Crie mais elementos para haver quebra de linha e faça com que eles se alinhem no topo e no fim, de forma que haja espaço entre eles.
   > align content é melhor de ser usado quando existem muitos itens e quebras de linha.
2. Agora os organize com espaço sem encostar nas bordas superiores e inferiores.
   > align-content: space-around;
3. Esticando para preencher o maximo possivel
   > align-content: stretch
4. centralizado
   > align-content: center
   > 5, no fim e no topo do conteiner.
   > align-content: space-between

## AULA 39

1. Reordene os itens da flexbox em uma ordem aleatória.
   > feito, se cria uma classe com o atributo order:1; e atribui ela aos componentes.

## AULA 40

1. Aplique o crescimento nos conteineres utilizando flexbox.
   > grow é feito como o order só que com flex-grow para deifnir a proporção de crescimento do componente.

## AULA 42

1. Faça experimentos com flex shorthand.
   > 1 valor grow | shrink e basis

## AULA 43

1. Faça com que apenas um dos itens tenha alinhamento diferente, pra cima, pra baixo, pro centro.
   > align-self: center, flex-start, flex-ent, auto, baseline

## AULA 44

1. Quais são os estágios para animar um elemento com css? Descreva cada um deles.
2. Crie um main com 80% de comprimento, 800px de altura, fundo branco gelo f2f4f5, com altura que cresce correspondentemente e centralizado. Depois um bloco quadrado com 200x200 e cor azul.
3. Escreva um keyframe de exemplo para mudar a cor de azul para vermelho e se metamorfosear para 400 x 100.
4. Aplique a transição no quadrado com toda mudança de característica mutável de 3 segundos e com um começo lento.
5. Cite todos os atributos possíveis para a transição.

## AULA 45

1. Cite todos os atributos possíveis de animação css.
2. Aplique uma animação no quadrado azul que execute uma única vez.

## AULA 46

1. Aplique uma animação infinita no quadrado anterior.

## AULA 47

1. Faça com que o quadrado se movimente 300 x 300 com 30% do tempo e retorne até o ponto 0.
2. Agora faça com que em 70% do tempo o objeto se mova para o ponto 0, se torne uma esfera de raio 100, rotacione 0 graus e no final se tornara um quadrado de 200x200 em 800x600 rotacionará 360 graus.
3. Cite exemplos do uso prático de animações.

## AULA 48

1. O que são e quais são os vendor-prefixes? Cite exemplos.
2. Crie um novo documento html + css e escreva uma animação para botão com 0% 50% e 100% de progressão. O botão deverá possuir as proporções 200x64 em bloco, bordas arredondadas, com borda azul, centralizado e com margem de 100 pixels, o texto deverá ser arial, alinhado no centro, com altura de 64 pixels, sem decoração e na cor #ff0099.
3. O estado inicial da animação manterá as proporções padrões, no intermediário o comprimento diminuira 20 pixels, ele se arredondará mais 4 pixels. No estado final ele deverá voltar pro tamanho inicial e se tornar azul. O botão só deve tornar-se azul no fim da animação. No final a cor do texto do botão deverá se tornar branco.
4. A animação deve acontecer quando o usuário colocar o mouse em cima do botão.

## AULA 49

1. Ao colocar o mouse em cima do botão ele deve exibir uma sombra simulando uma tridimensionalidade.

## AULA 51

1. Baixe e utilize o Animate.css no documento anterior.
2. Aplique pelo menos 10 animações diferentes em um texto.

## AULA 52

1. Quais são as etapas de criar, exportar e animar um SVG.

## AULA 53

1. Crie e exiba o svg padrão num documento html.

## AULA 54

1. Como funciona a lógica da geração de documentos svg a partir dos aplicativos de ilustração?
2. O que a opção de exportação 'responsivo' é capaz de alterar no documento caso seja marcada?
3. Exemplifique o significado de alguns dos campos do documento gerado.

## AULA 55

1. Explique a primeira forma de se inserir um svg no html e quais as implicações referentes a transformações e animações.
2. Realize a primeira forma.

## AULA 56

1. Explique a segunda forma de inserir svg no html e quais as implicações.
2. Explique qual o bom principio em lidar com muitos documentos svg em um projeto.
3. Realize a segunda adição de arquivo svg no html com um documento css diferente.
4. Explique a terceira forma e por que ela não é uma boa prática de programação.

## AULA 57

1. faça as questões da aula 57 (tava doente e sem energia)

## AULA 58

1. Faça uma animação para o simbolo da adidas parecer estar sendo desenhado aos poucos.
2. Agora faça as formas sendo preenchidas com uma cor da sua preferência.

## AULA 59

1. Explique o que é javascript e qual propósito a linguagem foi criada para suprir.

## AULA 60

1. Cite quais são as etapas de exibição de uma página web no client side.
2. Por que o javascript é o último a ser executado?
3. Explique qual é o processo para visualizar o carregamento dos documentos de uma pagina web.
4. Explique como é possível o javascript ser carregado antes da última etapa.
5. Por que é relevante analisar o carregamento da sua página web? Por que um elemento não está sendo carregado?

## AULA 61

1. Explique qual a importãncia do console e qual a sua utilidade.

## AULA 62

1. O que é API e como se apresenta a API do javascript?

## AULA 63

1. Explique o que é o objeto window e como visualizá-lo.


## AULA 64

1. O que são primitivas no javascript?
2. Quais são os tipos primitivos do javascript?
3. Explique a diferença entre uma variável null e undefined

## AULA 65

1. Explique quais são e quais as diferenças entre as 3 formas de declarar variáveis no javascript.
2. Explique qual a forma de escrever javascript dentro de um documento html.
3. Crie três variáveis em um documento html e as exiba no console do navegador.
4. Explique qual a habilidade especial das duas formas de declaração de variáveis.

## AULA 66

1. Explique as diferenças de sintaxe em comparar dados e comparar tipos e dados.

## AULA 67

1. Quais são as duas formas de selecionar um elemento individualmente? Cite exemplos.
2. Qual a utilidade de seletores em javascript?
3. Quais são as duas formas de selecionar grupos de elementos? Cite exemplos.
4. escreva uma página com botões centralizados espaçados igualmente em coluna com os nomes azul 1 azul 2 azul 3 vermelho 1 vermelho 2 e vermelho 3. Selecione um único item azul e exiba-o no console do navegador
5. Selecione todos os itens vermelhos e exiba-os no console do navegador.

## AULA 68

1. Crie 2 botões dentro de 300x50 centralizado e com 15 pixels de distancia dos itens acima dele, os botões devem ter metade do comprimento do conteiner e 40 pixels de altura. O botão da esquerda terá o nome azul e o da direita vermelho.
2. Faça com que todos os itens azul ficarem azuis quando o botão Azul for pressionado.
3. Faça o fundo ficar azul ou vermelho assim como os botões.
4. Agora faça os itens adjacentes sumirem após o azul ou vermelho ser aplicado.