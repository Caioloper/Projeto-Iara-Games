# Comparação entre o protótipo e o site atual

## Contexto

Este documento registra a comparação inicial entre as imagens de referência do protótipo no Figma e a página atual da Iara Games.

- **Referência:** frame desktop de 1280 px.
- **Site atual:** observado em uma janela de 1280 × 900 px.
- **Observação:** as imagens do protótipo foram compartilhadas em uma versão compactada. A composição geral é visível, mas não é possível determinar com precisão todas as medidas em pixels.
- **Escopo combinado:** manter o conteúdo e as imagens atuais dos jogos. A apresentação visual dos cards — como tamanho, espaçamento e grid — poderá ser ajustada para se aproximar do protótipo.
- **Estado deste documento:** levantamento inicial com as decisões da primeira etapa visual registradas abaixo.

## Comparação por seção

| Área | Protótipo | Site atual | Ajustes a considerar |
|---|---|---|---|
| **Cabeçalho** | Barra compacta com navegação e ícones de carrinho e perfil. | Logo ampliado, navegação, suporte, carrinho e ícone de perfil com menu de conta. A barra mede cerca de 80 px em desktop. | Manter a navegação e os controles de ação alinhados nas extremidades, sem campo de busca. |
| **Hero** | Fundo oceânico em duas variações, controle de alternância no canto superior direito e indicação para rolar a página. | Usa um dos fundos do oceano e mede cerca de 820 px de altura nessa janela. O controle de tema fica junto ao título e há um botão “Explorar Jogos”. | Aproximar a composição do protótipo e implementar a alternância entre os fundos. O `index.html` não carrega o `home.js`; portanto, o controle de tema ainda não está conectado à interação. |
| **Explorar por gênero** | Cinco cards horizontais, organizados em duas linhas, com ícone, nome e seta. | Seis cards horizontais, organizados em grid. | Manter a quantidade e os gêneros atuais; alinhar título e texto de apoio à referência. |
| **Catálogo em destaque** | Grade visual de três colunas, com filtros e acesso ao catálogo. | Quatro jogos em quatro colunas; cada card mede cerca de 278 × 496 px. | Aproximar o tamanho e o grid dos cards ao protótipo, mantendo os jogos, textos e imagens atuais. Com quatro cards em três colunas, o quarto fica à esquerda na segunda linha. |
| **Ofertas** | Três cards, com destaque visual para as promoções. | Já apresenta três cards em três colunas, com cerca de 379 × 496 px. | Alinhar título e chamada ao protótipo, mantendo os cards e adequando a apresentação visual. |
| **Sobre o projeto** | Painel composto por ilustração, texto e bloco de destaque lateral. | Imagem, vários parágrafos e botão em uma seção sem esse painel composto. | Alinhar a chamada e o título ao protótipo; o texto explicativo atual permanece. |
| **Newsletter** | Formulário dentro de um painel delimitado e centralizado. | Conteúdo centralizado em uma faixa, sem painel próprio. | Manter o painel e alinhar título, chamada e descrição à referência. |
| **Fundo e atmosfera** | Variações de cor e profundidade, com elementos decorativos ao longo da página. | Predominam fundos de cor sólida. | Avaliar o uso dos tokens de design existentes e dos recursos gráficos disponíveis para construir a atmosfera visual. |

## Medidas observadas no site atual

Valores medidos no navegador em uma janela de 1280 × 900 px; servem como referência do estado atual, não como medidas exatas do protótipo.

| Elemento | Medida/organização atual |
|---|---|
| Barra de navegação | Aproximadamente 80 px de altura |
| Hero | Aproximadamente 820 px de altura |
| Cards de gênero | 6 cards em uma linha; cerca de 176 × 162 px cada |
| Cards em destaque | 4 colunas; cerca de 278 × 496 px cada |
| Cards de oferta | 3 colunas; cerca de 379 × 496 px cada |

## Base técnica levantada antes da implementação

- O projeto já possui tokens de cores, tipografia, espaçamento e outros valores visuais em `assets/estilos/root.css`.
- As regras de layout e os breakpoints responsivos estão em `assets/estilos/style.css`.
- Na análise inicial, o `index.html` importava **Bootstrap Icons**, mas ainda não importava o framework Bootstrap.
- Na análise inicial, o `home.js` continha lógica para atualizar o estado visual dos filtros, mas não era carregado pelo `index.html`. A alternância da hero também não estava implementada.
- Há recursos gráficos que podem ser avaliados para a ambientação, como `fundo-iara.png`, `fundo-tropical.png`, `bolha.png` e `luzes_reflexo.png`.

## Decisões adotadas para a primeira etapa

1. Manter a quantidade e os conteúdos atuais dos jogos, incluindo imagens e textos. Os quatro cards em destaque são preservados; o quarto fica à esquerda na segunda linha do grid de três colunas.
2. Preservar os conteúdos dos cards de jogos. Os títulos, chamadas e marcadores de profundidade das seções devem seguir os textos do protótipo; a quantidade de cards de gênero e jogos permanece a do site.
3. Usar o grid responsivo do Bootstrap nos cards de gênero, destaque e ofertas, com uma coluna em telas pequenas, duas em telas médias e três em telas grandes.
4. Usar CSS customizado para os tokens, a identidade visual, a composição da hero, os cards e os painéis; o Bootstrap fornece a estrutura responsiva, sem substituir os estilos existentes.
5. Manter o acesso à conta no cabeçalho, sem o campo de busca. O ícone de perfil abre um dropdown Bootstrap com o cadastro disponível; as demais ações de conta aguardam autenticação e páginas próprias.

## Direção sugerida

Usar esta comparação para orientar a implementação por etapas: primeiro cabeçalho e hero; depois gêneros e catálogo; por fim, sobre o projeto, ofertas, newsletter e rodapé. A decisão sobre o uso do Bootstrap deve ser feita por componente, preservando os tokens e os estilos próprios necessários para reproduzir a identidade visual do protótipo.

## Implementado na primeira etapa visual

- Bootstrap 5.3.3 foi adicionado para disponibilizar o grid responsivo; o Bootstrap Icons continua separado.
- O logo e o cabeçalho foram ampliados; o acesso à conta agora usa um dropdown Bootstrap com a ação de cadastro disponível.
- O campo de busca foi removido dos cabeçalhos da loja e de suporte; navegação e ações continuam alinhadas nas extremidades, com alturas responsivas ajustadas.
- A hero alterna entre `fundo_amanhecer.jpeg` e `fundo_anoitecer.jpeg`, com estado acessível no botão e indicação para rolar até os gêneros.
- A alternância entre amanhecer e anoitecer usa uma transição gradual de 1,6 s; a preferência por movimento reduzido continua respeitada.
- Os gêneros agora aparecem em cards horizontais; os quatro jogos em destaque usam três colunas no desktop, com o último alinhado à esquerda na segunda linha.
- A partir de 1440 px, as seções de catálogo e ofertas ampliam os cards para se aproximarem da referência, mantendo a quantidade e os conteúdos atuais.
- Os cards de gênero cresceram, e o espaçamento vertical entre as seções principais foi ampliado.
- O painel Sobre o Projeto e o formulário da newsletter receberam superfícies delimitadas e fundos alinhados à atmosfera do protótipo.
- O `index.html` carrega `assets/home.js`, preservando o comportamento visual dos filtros e habilitando a alternância da hero.
- Em telas a partir de 1440 px, a largura do conteúdo aumenta para 1280 px e a tipografia da hero e as imagens dos cards crescem moderadamente.
- O indicador "Role para mergulhar" ganhou estados de hover e foco com borda, fundo e brilho sutis.
- A hero ocupa o espaço restante da primeira tela depois do cabeçalho, com altura mínima para preservar a leitura em telas menores.
- Um gradiente geral acompanha as seções abaixo da hero até o rodapé, usando os stops e as cores indicados na referência do Figma.
- O gradiente começa no mesmo tom oceânico da hero; `luzes_reflexo.png` acrescenta uma camada sutil de luz na seção de gêneros.
- `assets/imagens/linha-agua.svg` guarda o detalhe ondulado, escalável para diferentes larguras.

## Textos e marcadores de profundidade

Os títulos e chamadas das seções foram alinhados à referência, mantendo os conteúdos dos cards existentes:

- Hero: profundidade `0 M`.
- Gêneros: `12 M · Zona iluminada`, chamada “Primeira imersão” e título “Por onde você quer explorar?”.
- Destaques: `29 M · Recife de descobertas`, chamada “Zona de descobertas” e título “Tesouros que vieram à superfície”.
- Sobre o projeto: chamada “Nossa correnteza” e título “Há um oceano de histórias brasileiras esperando para ser descoberto”.
- Ofertas: `52 M · Águas profundas`, chamada “Achados das profundezas” e título “Ofertas bioluminescentes”.
- Newsletter: chamada “Sinal das profundezas” e título “Novas descobertas chegam até você”.
