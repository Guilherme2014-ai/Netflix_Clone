# CSS
- Overflow X
- Transition no lugar certo
- transforme - Scale
- Background & Transparence
- Z-index

## Overflow - CSS
O overflow se refere á barra de "scroll" do elemento ou página, sendo assim é possível manipular a barra de "scroll" em relação a sua visibilidade por exemplo.

## Transition - CSS
No CSS há uma tag chamada "transition" onde deixa todas as ações feitas ao elemento a partir desse momento com um certo delay.
dado isso percebe-se que quando essa tag é utilizada em situações como "Hover" não será muito bem aplicada pois o "hover" se refere a ação do pointer estar por cima do elemento, dado que quando o pointer saisse de cima do elemento a tag transition também sairia, dando assim um efeito não esperado na animação, a solução para isso é simples, basta colocar a tag transition no estilo do elemento onde o "hover" não esta presente, assim deixando o efeito "transition" permanente.

## Background - CSS
Neste Projeto achei uma propiedade interessante na Tag "background", nesta tag é possivel manipular não somente a cor do backgroundo mas tambem a TRANSPARENCIA e PARCIALIDADE, um exemplo seria: 10% vermelho a esquerda e o resto azul.

## Z-Index
O z-index é uma Tag simplismente indispensavel, onde impõe hierarquia na sobreposição de elementos, assim deixando um em cima e outro em baixo. 

## Components - React
Mais uma vez a visão desacoplada me mostrando detalhes escondidos... Visto que toda vez em que um "State" é atualizado todos os "components" que usam tal "State" são "Redesenhados", percebe-se que idependente da onde esse "State" for atualizado os components sempre se atualizaram, isto dá muito mais flexibilidade em relação á dinâmica.
