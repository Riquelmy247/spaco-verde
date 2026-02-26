## Spaço Verde – Site Institucional

Site institucional para a chácara / espaço para eventos **Spaço Verde**, construído em **React + Vite**, single page com página extra de galeria de fotos.

Todos os textos, links e dados de contato ficam centralizados em `src/siteData.js` para facilitar a edição.

---

### 🧱 Tecnologias

- **React** (versão mais atual)
- **Vite**
- **React Router DOM**

---

### ▶️ Rodando o projeto em desenvolvimento

No diretório do projeto (`spaco-verde`):

```bash
npm install      # instala as dependências
npm run dev      # inicia o servidor de desenvolvimento
```

Depois abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

### 🛠 Build de produção

```bash
npm run build    # gera os arquivos prontos para produção em dist/
```

Para testar o build localmente:

```bash
npm run preview
```

O conteúdo gerado em `dist/` pode ser publicado em qualquer hospedagem de site estático (Netlify, Vercel, GitHub Pages, servidor nginx/Apache etc.).

---

### ✏️ Como editar textos, contatos e links

Arquivo principal de configuração:

- `src/siteData.js`

Lá você encontra:

- **branding**: nome, tagline, cores de referência.
- **contact**: WhatsApp, Instagrams, endereço e link do Google Maps.
- **about**: textos institucionais e lista de tipos de eventos.
- **services**: textos de serviços sociais e corporativos.
- **gallery**: categorias e imagens da galeria.
- **navigation**: itens do menu (quais seções/rotas aparecem na navbar).

Sempre que quiser alterar um texto, número ou link, procure primeiro nesse arquivo.

---

### 🖼️ Como adicionar fotos à galeria

Resumo rápido (detalhes no arquivo `README-fotos.md`):

1. Coloque suas imagens na pasta `public/images`.
2. No arquivo `src/siteData.js`, dentro de `gallery.images`, cadastre cada foto com:
   - `id`
   - `category` (ex.: `external`, `hall`, `parking`, `leisure`, `decor`, `buffet`)
   - `src` (ex.: `'/images/minha-foto.jpg'`)
   - `alt` (texto alternativo para acessibilidade/SEO)
   - `caption` (legenda opcional)

Veja exemplos prontos e explicação de categorias em `README-fotos.md`.
