# Planejamento de Marketing e Vendas de Conteúdo (Versão EN)

Este documento descreve a estratégia de readequação da versão em inglês (`/en`) do site de Jorge Dias. O objetivo principal desta versão é atuar como uma plataforma de publicação e venda de textos e ensaios aprofundados sobre psicanálise, teoria crítica e pensamento indígena, em vez de focar na captação de pacientes para psicoterapia (que é o foco da versão PT).

## 1. Posicionamento e Proposta de Valor

Na versão em inglês, o posicionamento muda de "Psicoterapeuta Clínico" para **"Independent Researcher & Writer"**. 

A proposta de valor é oferecer análises profundas, não convencionais e bem fundamentadas que cruzam saberes ocidentais (psicanálise, Foucault, Jung) com cosmologias indígenas, desafiando a visão moderna do "indivíduo".

O público-alvo são:
- Estudantes e acadêmicos de psicologia, filosofia e ciências sociais.
- Leitores de plataformas como Substack e Medium que buscam ensaios longos e reflexivos.
- Pessoas interessadas em crítica cultural e autoconhecimento fora da lógica de "autoajuda comercial".

## 2. Estrutura do Funil de Vendas de Conteúdo

O site `/en` deve operar como um funil clássico de criadores de conteúdo (Creator Economy):

### Topo de Funil (Atração e Descoberta)
- **Ensaios Gratuitos (Cluster Articles):** Textos de 8 a 10 minutos de leitura que abordam tópicos específicos (ex: "A Ilusão do Indivíduo", "A Sombra Coletiva").
- **SEO e Tráfego Orgânico:** Otimização dos ensaios gratuitos para palavras-chave de cauda longa (ex: "Foucaultian critique of the self", "Jungian collective shadow perfectionism").

### Meio de Funil (Engajamento e Retenção)
- **Pillar Essay (Ensaio Principal):** Um texto mais longo (~15 min) que sintetiza a tese central do autor ("How Society Sickened the 'Self'"). Este texto serve como a principal âncora de autoridade.
- **Captura de Leads (Newsletter):** Substituir os botões genéricos de "Support this research" por formulários de inscrição na newsletter (Substack) para construir uma base de leitores fiéis.

### Fundo de Funil (Monetização)
- **Venda de Ensaios Completos/Guias:** Textos premium, e-books ou compilações (PDFs) vendidos via Gumroad.
- **Assinatura Paga:** Inscrições pagas no Substack para acesso a ensaios exclusivos ou comunidade.
- **Doações (Tip Jar):** Manter a opção de doação (Buy Me a Coffee / Ko-fi) para leitores que desejam apoiar o trabalho independente.

## 3. Readequações Necessárias no Site (`/en`)

Para implementar este funil, as seguintes mudanças de Copy e UX/UI serão aplicadas:

### 3.1. Home Page (`Home.tsx`)
- **Hero Section:** Refinar o copy para deixar claro que o site é uma biblioteca de ensaios. Adicionar um botão principal para "Subscribe to Newsletter" (captura de lead) ao lado do "Read the Pillar Essay".
- **Social Proof:** Adicionar uma pequena seção (mesmo que placeholder) indicando "Join X+ readers exploring the intersections of...".

### 3.2. Pillar Essay & Cluster Articles
- **In-Content CTAs:** Integrar caixas de captura de e-mail no meio ou final dos textos gratuitos.
- **Paywall / Premium Upsell:** O bloco atual de "Paid reading offer" está bom, mas o copy pode ser mais persuasivo, focando na transformação que a leitura completa trará.

### 3.3. Botão Flutuante (Floating CTA)
- Atualmente é um botão de doação ("Support this research"). Pode ser mais estratégico alterá-lo para "Subscribe to Newsletter" ou "Get the Full Guide", pois a conversão de doações diretas de tráfego frio costuma ser muito baixa.

## 4. Próximos Passos de Implementação

1. **Atualizar `Home.tsx`:** Refinar o copy e adicionar CTAs focados em assinatura/venda.
2. **Atualizar `PillarArticle.tsx`:** Melhorar o copy da seção de upsell (Substack/Gumroad).
3. **Atualizar `FloatingActionButtonEn.tsx`:** Mudar o foco de doação para captura de lead ou venda de produto digital.

---
*Este planejamento será implementado na próxima fase do projeto.*
