#  The Goats

Um slider interativo e moderno apresentando os maiores jogadores de futebol de todos os tempos, com backgrounds dinâmicos e efeitos visuais imersivos.

![alt text](<Screenshot 2025-12-03 164001.png>)


##  Sobre o Projeto

**The Goats** é uma landing page interativa que celebra lendas do futebol através de um carrossel elegante com transições suaves, backgrounds personalizados por jogador e uma interface futurista com efeitos visuais em neon.

##  Funcionalidades

- **Slider Automático**: Transição automática entre jogadores a cada 20 segundos
- **Backgrounds Dinâmicos**: Cada jogador possui seu próprio background que transiciona suavemente com efeito de zoom
- **Overlay Escurecido**: Background escurecido para destacar o jogador e o conteúdo
- **Navegação Completa**:
  - Setas laterais para navegar manualmente
  - Indicadores visuais (dots) na parte inferior
  - Header com navegação:
    - **Home**: retorna ao primeiro slide
    - **Players**: sem ação (placeholder)
    - **Contact**: abre o GitHub em nova aba
- **Animações Fluidas**: Transições suaves para imagens, texto e backgrounds
- **Efeitos Visuais**: Círculos decorativos animados e glow effects em neon

##  Características de Design

- **Paleta de Cores**: Tons de azul neon (`#00f7ff`) sobre fundo escuro futurista
- **Tipografia**: 
  - Montserrat para corpo de texto
  - Orbitron para títulos e elementos de destaque
- **Efeitos**:
  - Drop shadow nos elementos
  - Transições de slide com fade e movimento
  - Background com scale-in effect
  - Pulso animado no elemento central

##  Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/TheRazorbill/Campo.git
   cd Campo
   ```

2. **Estrutura de Arquivos**:
   ```
   Campo/
   ├── index.html
   ├── style.css
   ├── script.js
   └── img/
       ├── backgrounds/
       │   ├── cristianoBg.jpg
       │   ├── messiBg.jpg
       │   └── neymarBg.jpg
       ├── cristiano.png
       ├── messi.png
       └── neymar.png
   ```

3. **Abra o projeto**:
   - Basta abrir o arquivo `index.html` em qualquer navegador moderno
   - Ou utilize um servidor local (Live Server, http-server, etc.)

##  Adicionando Novos Jogadores

Para adicionar um novo jogador ao slider:

1. **Adicione as imagens**:
   - Imagem do jogador em `img/`
   - Background em `img/backgrounds/`

2. **Edite o HTML** (`index.html`):
   ```html
   <div class="item" data-bg="novoJogadorBg.jpg">
     <div class="player-img">
       <img src="img/novoJogador.png" alt="" />
     </div>
     <div class="content">
       <p class="player-tag">Apelido</p>
       <p class="player-name">Nome do Jogador</p>
       <p class="player-description">
         Descrição do jogador...
       </p>
       <button class="btn">Read More</button>
     </div>
   </div>
   ```

3. **Adicione um dot indicador**:
   ```html
   <div class="dot"></div>
   ```

##  Tecnologias Utilizadas

- **HTML5**: estrutura semântica
- **CSS3**: animações, gradientes, transitions
- **JavaScript (Vanilla)**: lógica do slider e navegação
- **Google Fonts**: Montserrat & Orbitron

##  Controles

- **Setas Laterais**: navegação manual entre slides
- **Dots Inferiores**: indicadores visuais do slide ativo
- **Header > Home**: volta ao primeiro slide
- **Header > Contact**: acessa o GitHub do desenvolvedor
- **Auto-play**: transição automática a cada 20s

##  Responsividade

O projeto está otimizado para desktops. Para suporte mobile, considere ajustar:
- Tamanhos de fonte (rem/em)
- Layout flex para mobile (stack vertical)
- Tamanho das imagens

##  Autor

**TheRazorbill**
- GitHub: [@TheRazorbill](https://github.com/TheRazorbill)

---

 Desenvolvido com paixão pelo futebol e tecnologia