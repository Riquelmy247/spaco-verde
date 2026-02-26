## Spaço Verde – Como adicionar fotos na galeria

Este projeto já está preparado para uma **galeria com filtros por categoria** na rota `/galeria`.  
Você só precisa colocar as imagens no lugar certo e cadastrar os dados no arquivo `src/siteData.js`.

---

### 1. Onde colocar os arquivos de imagem

1. Dentro da pasta do projeto, crie (se ainda não existir) a pasta:

   ```bash
   public/images
   ```

2. Copie suas fotos para dentro dessa pasta, por exemplo:

   - `public/images/local-externo-1.jpg`
   - `public/images/salao-1.jpg`
   - `public/images/estacionamento-1.jpg`
   - `public/images/area-lazer-1.jpg`
   - `public/images/decoracao-1.jpg`
   - `public/images/buffet-1.jpg`

Esses arquivos ficarão disponíveis no site através de caminhos como:

- `/images/local-externo-1.jpg`

---

### 2. Entendendo as categorias da galeria

No arquivo `src/siteData.js`, dentro de `gallery.categories`, já existem as categorias:

- `all` – Todas
- `external` – Local externo
- `hall` – Salão
- `parking` – Estacionamento
- `leisure` – Área de lazer
- `decor` – Decorações
- `buffet` – Buffet

O campo **`category`** de cada imagem deve usar **um desses IDs** (exceto `all`, que é só para o filtro geral).

---

### 3. Cadastrando as fotos em `siteData.js`

Abra o arquivo:

- `src/siteData.js`

Dentro de `gallery`, procure pelo array `images` e preencha assim (exemplo completo – ajuste os nomes e textos para suas fotos reais):

```js
gallery: {
  // ...
  images: [
    {
      id: 'ext-1',
      category: 'external', // Local Externo
      src: '/images/local-externo-1.jpg',
      alt: 'Vista externa da chácara Spaço Verde ao pôr do sol',
      caption: 'Área externa perfeita para cerimônias ao ar livre.',
    },
    {
      id: 'hall-1',
      category: 'hall', // Salão
      src: '/images/salao-1.jpg',
      alt: 'Salão principal decorado para casamento',
      caption: 'Salão climatizado com decoração personalizada.',
    },
    {
      id: 'parking-1',
      category: 'parking', // Estacionamento
      src: '/images/estacionamento-1.jpg',
      alt: 'Estacionamento amplo para convidados',
      caption: 'Estacionamento amplo e seguro para seus convidados.',
    },
    {
      id: 'leisure-1',
      category: 'leisure', // Área de lazer
      src: '/images/area-lazer-1.jpg',
      alt: 'Área de lazer com espaço para convivência',
      caption: 'Ambiente descontraído para momentos de descanso.',
    },
    {
      id: 'decor-1',
      category: 'decor', // Decorações
      src: '/images/decoracao-1.jpg',
      alt: 'Mesa de doces decorada para festa de aniversário',
      caption: 'Decorações que transformam o ambiente.',
    },
    {
      id: 'buffet-1',
      category: 'buffet', // Buffet
      src: '/images/buffet-1.jpg',
      alt: 'Mesa de buffet com pratos variados',
      caption: 'Buffet completo com cardápio personalizado.',
    },
  ],
},
```

**Campos:**

- **`id`**: identificador único da imagem (pode ser qualquer string, desde que não repita).
- **`category`**: uma das categorias definidas em `gallery.categories` (`external`, `hall`, `parking`, `leisure`, `decor`, `buffet`).
- **`src`**: caminho da imagem a partir da pasta `public` (começando com `/images/...`).
- **`alt`**: texto alternativo (importante para acessibilidade e SEO).
- **`caption`**: legenda que aparece embaixo da foto (opcional, mas recomendado).

Você pode adicionar quantas fotos quiser, inclusive várias fotos na mesma categoria.

---

### 4. Visualizando a galeria

1. Rode o projeto em modo desenvolvimento:

   ```bash
   npm run dev
   ```

2. Abra o navegador no endereço informado (ex.: `http://localhost:5173`).
3. Acesse o menu **“Galeria de Fotos”** ou vá direto para `/galeria`.
4. Use os filtros (chips) para alternar entre:

   - Todas
   - Local externo
   - Salão
   - Estacionamento
   - Área de lazer
   - Decorações
   - Buffet

Se as imagens não aparecerem:

- Confira se o caminho `src` está correto (ex.: `/images/nome-do-arquivo.jpg`).
- Verifique se o `category` bate com algum `id` em `gallery.categories`.

