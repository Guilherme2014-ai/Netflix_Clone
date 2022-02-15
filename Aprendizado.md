# CSS
- Overflow X
- Transition no lugar certo
- transforme - Scale
- Background & Transparence
- Z-index

## Overflow - CSS
O overflow se refere á barra de "scroll" do elemento ou página, assim é possível manipular a barra de "scroll" em relação a sua visibilidade, por exemplo.

## Transition - CSS
No CSS há uma tag chamada "transition" onde deixa todas as ações feitas ao elemento a partir desse momento com um certo delay. dado isso percebe-se que quando essa Tag é utilizada em situações como "Hover" não será muito bem aplicada, pois o "hover" se refere a ação do pointer estar por cima do elemento, dado que quando o pointer saísse de cima do elemento a tag " transition" também sairia, dando assim um efeito não esperado na animação, a solução para isso é simples, basta colocar a Tag " transition " no estilo do elemento onde o "hover" não esta presente, assim deixando o efeito "transition" permanente.

## Background - CSS
Neste Projeto achei uma propriedade interessante na Tag "background", nesta Tag é possível manipular não somente a cor do backgroundo mas também a TRANSPARÊNCIA e PARCIALIDADE, um exemplo seria: 10% vermelho a esquerda e o resto azul.

## Z-Index
O z-index é uma Tag simplesmente indispensável, onde impõe hierarquia na sobreposição de elementos, assim deixando um em cima e outro em baixo.

## Components - React
Mais uma vez a visão desacoplada me mostrando detalhes escondidos... Visto que toda vez em que um "State" é atualizado todos os "components" que usam tal "State" são "Redesenhados", percebe-se que independente da onde esse "State" for atualizado os components sempre se atualizaram, isto dá muito mais flexibilidade em relação á dinâmica.


## Git Actions
O Github Actions pode ser interpretado como um hook do github, no qual pode fazer determinadas ações quando certos eventos são chamados, por exemplo, eu posso pedir para que quando o repositório receba um push na branch main ele sempre execute o comando:  `npm run build`

## Git RM
Quando se tem um arquivo já "comitado" porem necessitasse de colocá-lo na pasta ".gitignore", o comando "git rm --cached "file" -r" servirá para retirá-lo do commit, assim podendo ser adicionado no gitignore
