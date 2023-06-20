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
   >É composta pela declaração de documento html, o html em si, head e body. Dentro do body é possível usar main, footer e header.
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
   >Nem todas. Existem as chamadas webcolors, um conjunto limitado de cores que remontam às cores que poderiam ser exibidas nos monitores de tubo e navegadores mais antigos, em contraste com os milhões de cores disponíveis hoje em dia com os monitores digitais e navegadores mais modernos. É recomendável que se visando o critério de acessibilidade se use webcolors mantendo a observância do alto contraste de no mínimo 7.1 na palheta de cores do site.

## AULA 13 - CCS 1

1. Escreva uma página html com um css atribuído;

   1.1. A cor da página deve ser f2f4f5;

   1.2. Deve haver um banner com largura e altura 1366px x 60px, cor 9013fe.

   1.3. Como fazer para o elemento se tornar dinâmico independentemente do dispositivo de exibição;

   1.4 Deve haver uma caixa que englobará os outros elementos e ela deve ser 1000x800 cor #ffffff (simplifique), borda de 8px, e deve ser centralizada, com sombra nela e no banner do topo.
      >check all
2. O que é o padding, border e a margin e como esses elementos atuam numa página html e como manipulá-los;
   > padding é a distância do conteúdo interno do elemento até as suas bordas, border é o tamanho das bordas do elemento e margin é a distância desse elemento para os elementos adjacentes a ele. Podemos manipular com padding, padding-left, padding-right, =-bottom e =-top, border com border-style, border-radius, width e border-color, margin igal a padding.
## AULA 14

1. Crie uma classe “box” com tamanho 300x200, em uma linha horizontal, com a cor #80e817, com borda de 10px e margens superior e esquerda de 25px.
   >check
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
   >Check com box-sizing:border-box

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
2. Descreva a design pattern do Atomic Design detalhando cada componente das páginas web representadas por esse paradigma.
