# Design System - Psicoterapia Clínica

## Design Philosophy Chosen: **Minimalist Clinical Elegance**

O site transmite a sobriedade de um consultório de alto padrão, combinado com o rigor de uma biblioteca filosófica. A estética é intencional, respeitosa e imersiva — sem apelos visuais agressivos.

### Core Principles
1. **Legibilidade Imersiva**: Tipografia elegante com espaçamento generoso (18px, 112% line-height) para conforto máximo na leitura longa
2. **Hierarquia Sutil**: Cores neutras com destaque estratégico apenas em elementos de ação (CTAs, links)
3. **Espaço Negativo Deliberado**: Uso generoso de whitespace para transmitir calma e profissionalismo
4. **Semântica Visual Clara**: Cada elemento tem propósito, nada é decorativo

### Color Philosophy
- **Background Principal**: #FAFAFA (Off-white muito suave, reduz cansaço visual)
- **Background Secundário**: #1C1F26 (Chumbo profundo/Quase preto para rodapé e seções de destaque)
- **Texto Principal**: #333333 (Cinza escuro, nunca preto absoluto para melhorar leitura)
- **Cor de Destaque**: #2C4A52 (Azul/Verde Petróleo escuro e sóbrio) para links, CTAs
- **Cor Secundária**: #6B4C3A (Marrom terroso e humano) para elementos de suporte

### Typography System
- **Títulos (H1, H2, H3)**: Playfair Display (Serifada elegante) - transmite autoridade e filosofia
- **Corpo do Texto**: Inter (Sans-serif limpa) - transmite clareza clínica
- **Tamanho Base**: 18px com 112% line-height
- **Largura Máxima de Coluna**: 700-800px para conforto de leitura

### Layout Paradigm
- **Estrutura Assimétrica**: Não usar grids centralizados uniformes
- **Coluna Única para Leitura**: Textos longos em coluna única com margens generosas
- **Seções com Respiração**: Cada seção tem espaçamento vertical significativo
- **Menu Sticky**: Fixo ao topo para navegação constante

### Signature Elements
1. **Divider Elegante**: Linha sutil (#E0E0E0) separando seções
2. **Card Minimalista**: Fundo branco com sombra suave, sem bordas
3. **Link Estilizado**: Cor petróleo com underline ao hover, sem decoração padrão

### Interaction Philosophy
- **Hover Suave**: Transições de 200ms em cores e opacidade
- **Focus Rings**: Visíveis para acessibilidade, mas sutis
- **Botões CTA**: Fundo petróleo com texto branco, hover com opacidade reduzida
- **Breadcrumbs**: Navegação estrutural discreta no topo

### Animation
- **Entrance**: Fade-in suave (300ms) ao carregar páginas
- **Scroll**: Nenhuma animação paralax ou distração; foco no conteúdo
- **Hover**: Transições suaves em links e botões (200ms)
- **Loading**: Indicador minimalista, nunca intrusivo

### Design Tokens
```css
/* Colors */
--bg-primary: #FAFAFA
--bg-secondary: #1C1F26
--text-primary: #333333
--text-secondary: #666666
--accent-primary: #2C4A52
--accent-secondary: #6B4C3A
--border-color: #E0E0E0
--shadow: 0 2px 8px rgba(0,0,0,0.08)

/* Typography */
--font-display: 'Playfair Display', serif
--font-body: 'Inter', sans-serif
--font-size-base: 18px
--line-height-base: 1.12
--letter-spacing: 0.5px

/* Spacing */
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-2xl: 4rem

/* Borders & Radius */
--radius: 8px
--border-width: 1px
```

---

## Estrutura de Páginas

### Páginas Institucionais (4)
1. Home - Landing page com apresentação
2. Sobre - Biografia e abordagem clínica
3. Como Funciona - Processo de atendimento
4. Contato - Formulário e informações

### Clusters de Serviços (12)

**Cluster 1: Terapia para Adultos (4 páginas)**
- Crise Existencial e Falta de Propósito
- Autossabotagem e Padrões de Repetição
- Regulação Emocional: Ansiedade, Exagero e Distanciamento
- Autonomia e Identidade (página de aprofundamento)

**Cluster 2: Terapia para Casais (3 páginas)**
- Padrões Familiares e Lealdades Invisíveis
- Conflitos de Casal e Choque de Valores
- Resolução de Conflitos (página de aprofundamento)

**Cluster 3: Terapia para Jovens (3 páginas)**
- [Conteúdo a ser extraído do arquivo]
- [Conteúdo a ser extraído do arquivo]
- [Conteúdo a ser extraído do arquivo]

**Cluster 4: Autoridade/Aprofundamento (2 páginas)**
- Psicoterapia e Espiritualidade de Forma Integrativa
- Filosofia e Pensamento Integrativo

### Blog (10 artigos)
1. Ansiedade ou Intuição?
2. A Sombra nos Relacionamentos
3. Fobia Social e Necessidade de Aprovação
4. O Narcisismo na Era Digital
5. Burnout Digital e Vício em Celular
6. Guerra dos Sexos e Polarização
7. Despertar Espiritual Sem Religião
8. Síndrome do Impostor
9. [Artigo adicional]
10. [Artigo adicional]

---

## Roteamento Proposto

```
/                                    → Home
/sobre                               → Sobre
/como-funciona                        → Como Funciona
/contato                              → Contato

/terapia/adultos/crise-existencial    → Cluster 1.1
/terapia/adultos/autossabotagem       → Cluster 1.2
/terapia/adultos/regulacao-emocional  → Cluster 1.3
/terapia/adultos/autonomia            → Cluster 1.4

/terapia/casais/padroes-familiares    → Cluster 2.1
/terapia/casais/conflitos             → Cluster 2.2
/terapia/casais/resolucao             → Cluster 2.3

/terapia/jovens/*                     → Cluster 3

/autoridade/psicoterapia-espiritualidade → Cluster 4.1
/autoridade/filosofia-integrativa     → Cluster 4.2

/blog                                 → Lista de artigos
/blog/ansiedade-ou-intuicao           → Artigo 1
/blog/sombra-relacionamentos          → Artigo 2
/blog/fobia-social                    → Artigo 3
/blog/narcisismo-era-digital          → Artigo 4
/blog/burnout-digital                 → Artigo 5
/blog/guerra-sexos                    → Artigo 6
/blog/despertar-espiritual            → Artigo 7
/blog/sindrome-impostor               → Artigo 8
/blog/*                               → Artigos 9-10
```

---

## Componentes Base a Implementar

1. **Header/Navigation** - Menu sticky com logo e CTA
2. **Hero Section** - Introdução com tipografia elegante
3. **Content Section** - Coluna de leitura com max-width 750px
4. **Breadcrumbs** - Navegação estrutural
5. **Table of Contents** - Índice clicável para artigos longos
6. **Reading Time** - Tempo estimado de leitura
7. **Related Articles** - "Continue sua investigação"
8. **CTA Button** - Botão de agendamento
9. **Footer** - Informações de contato
10. **Link Interno** - Links com estilo consistente

---

## Próximos Passos

1. ✅ Design System definido
2. ⏳ Configurar Tailwind com cores e tipografia
3. ⏳ Criar componentes base
4. ⏳ Implementar páginas institucionais
5. ⏳ Implementar clusters de serviços
6. ⏳ Implementar blog com linkagem interna
7. ⏳ Otimizar SEO e performance
