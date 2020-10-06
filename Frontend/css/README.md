## Box Model

Os elementos HTML são enxergados como caixas retangulares que são compostos por 4 partes, que definem um limite para o conteúdo (content).

- **Margin**
- **Border**
- **Padding**
- **Content** (text, image, video)

Margin collapse: as margens top e bottom de diferentes elementos entrão em colapso e são recolhidos em uma única margem, não soma as duas.

## Display

O display determina o comportamento dos elementos. Os valores mais comuns são:

- **Block**: O elemento se comporta como um bloco. Ex: div, form, header...
- **Inline**: O elemento se comporta como um elemento em linha. Ex: a, span
- **Table**: O elemento se comporta como uma tabela.
- **Inline-block**: O elemento se comporta como um bloco em linha.
- **None**: Desativa o display.


## Position

O position possui 4 valores:

- **Static**: É o valor padrão de todoelemento HTML.
- **Relative**: Posiciona o elemento em relação a si mesmo. O ponto base dele nãoé o centro, é o canto superior esquerdo do elemento, e as propriedades disponíveis (top, right, bottom, left) irá calcular o posicionamento em tela a partir desse ponto.
- **Absolute**: O ponto base desse elemento é o canto superior esquerdo do pai dele,que tenha position diferente de static.
- **Fixed**: O elemento se posiciona fixo natela de acordo com as coordenadas definida.

## Unidades de medida

As unidades de medida do CSS é separada em **absolutas**, que são medidas fixas e não mudam de acordo com as especificações e medidas **relativas** que são mais flexíveis e mudam de acordo com as especificações.

### Medida Absoluta

- **Pixel**(px)
- **Point**(pt)

### Medida Relativa

- **Ems**(em)
- **Rems**(rem)
- **Porcentagem**(%): não é considerada uma unidade de medida
- **Viewport width**(vw)
- **Viewport height**(vh)

**OBS**: viewport é área visível do navegador.

## Float

