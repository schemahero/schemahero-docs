# SchemaHero Documentation

Modern documentation site for [SchemaHero](https://github.com/schemahero/schemahero), built with [Nextra](https://nextra.site/).

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site exports to static HTML and can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run build
# Output is in the `out/` directory
```

## Structure

- `pages/` - MDX documentation pages (file-based routing)
- `public/` - Static assets (images, favicon, etc.)
- `theme.config.tsx` - Nextra theme configuration
- `next.config.mjs` - Next.js configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.
