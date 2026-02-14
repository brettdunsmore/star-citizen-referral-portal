# Citizen Referral App

[![Deploy to Cloudflare][cloudflarebutton]]

A modern, full-stack web application for managing citizen referrals, built with React, TypeScript, and Cloudflare Workers. This app provides a responsive UI for referral tracking, user management, and analytics, powered by a serverless backend.

## Features

- **Responsive Design**: Mobile-first UI with Tailwind CSS and shadcn/ui components.
- **Full-Stack Architecture**: React frontend with Hono-based API routes on Cloudflare Workers.
- **State Management**: TanStack Query for data fetching and caching.
- **Theming**: Dark/light mode support with localStorage persistence.
- **Error Handling**: Client and server-side error reporting and boundaries.
- **Type-Safe**: End-to-end TypeScript with proper bindings.
- **Performance**: Optimized with Vite bundling and Cloudflare Assets for SPA hosting.
- **UI Components**: Pre-built shadcn/ui library (accordion, dialog, table, charts, etc.).
- **Animations**: Tailwind animations and Framer Motion for smooth interactions.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons, Sonner (toasts), TanStack Query, React Router, Zustand
- **Backend**: Cloudflare Workers, Hono (routing), Cloudflare KV/Durable Objects ready
- **Styling**: Tailwind CSS, Tailwind Animate, CSS Variables (shadcn)
- **Dev Tools**: Bun, ESLint, TypeScript ESLint, Wrangler
- **Deployment**: Cloudflare Workers & Pages (SPA + API)

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (recommended package manager)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) (`bun add -g wrangler`)
- Cloudflare account and API token for deployment

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd citizen-referral-min-3w2--oi68r2l3gxd5lvwv
   ```

2. Install dependencies:
   ```
   bun install
   ```

3. Generate Worker types (if needed):
   ```
   bun run cf-typegen
   ```

## Development

### Local Development

Start the development server (frontend + Worker proxy):
```
bun dev
```

- App runs at `http://localhost:3000` (or `$PORT`)
- Hot Module Replacement (HMR) enabled
- API routes available at `/api/*`

### Preview Build

Build and preview production bundle:
```
bun run preview
```

### Linting

```
bun lint
```

### Environment Variables

Configure via `wrangler.jsonc` or `.dev.vars`:
```
ASSETS=your-pages-project.workers.dev
```

## Usage

- **Frontend**: Edit `src/pages/HomePage.tsx` and components in `src/components/`.
- **API Routes**: Add endpoints in `worker/userRoutes.ts`. Example:
  ```ts
  app.post('/api/referrals', async (c) => {
    // Handle referral creation
    return c.json({ success: true });
  });
  ```
- **Data Fetching**: Use TanStack Query in React components.
- **Sidebar Layout**: Wrap pages with `AppLayout` from `src/components/layout/AppLayout.tsx`.

Update `src/main.tsx` router for additional pages.

## Deployment

Deploy to Cloudflare Workers (includes SPA assets):

1. **Login to Wrangler**:
   ```
   wrangler login
   ```

2. **Deploy**:
   ```
   bun run deploy
   ```
   Or directly:
   ```
   bun run build && wrangler deploy
   ```

3. **Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

For **Pages integration** (recommended for assets):
- Bind ASSETS in Wrangler dashboard to your Pages project.
- Deploy Pages project separately for static assets.

[Deploy to Cloudflare][cloudflarebutton]

## Project Structure

```
├── src/              # React app (pages, components, hooks)
├── worker/           # Cloudflare Worker (API routes)
├── tailwind.config.js # Theme & animations
├── vite.config.ts    # Vite bundler
├── wrangler.jsonc    # Worker config
└── package.json      # Bun scripts & deps
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Build & deploy to Workers |
| `bun run cf-typegen` | Generate Worker types |

## Contributing

1. Fork the repo
2. Create a feature branch (`bun dev`)
3. Commit changes (`git commit -m 'feat: ...'`)
4. Push and open PR

Follow TypeScript, ESLint, and Tailwind best practices.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- File issues for bugs or features

Built with ❤️ for Cloudflare Workers.