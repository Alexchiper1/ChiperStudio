# Chiper Studio

Marketing website for `Chiper Studio`, built with `Next.js`, `React`, `TypeScript`, and `Tailwind CSS`.

This project is a modern one-page business site with:

- a sticky navigation bar
- hero, services, portfolio, pricing, and contact sections
- a working contact form backed by a Next.js API route
- email delivery using `Resend`
- SEO metadata and Open Graph tags

## Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Resend`
- `lucide-react`

## Project Structure

```text
app/
  api/contact/route.ts   # Contact form API endpoint
  layout.tsx             # Global layout and metadata
  page.tsx               # Home page entry

components/
  contact-form.tsx       # Contact form UI and client-side submission
  landing-page.tsx       # Main one-page site layout
  site-header.tsx        # Sticky navigation/header

lib/
  site-data.ts           # Brand content, services, projects, pricing, links
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
.env.local
```

3. Add the required variables:

```env
RESEND_API_KEY=your_resend_api_key
ENQUIRY_TO_EMAIL=your@email.com
ENQUIRY_FROM_EMAIL=onboarding@resend.dev
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint across the project.

## Environment Variables

The contact form posts to `app/api/contact/route.ts` and sends enquiries by email using `Resend`.

- `RESEND_API_KEY`: Required to enable email sending.
- `ENQUIRY_TO_EMAIL`: Optional. Destination inbox for enquiries.
- `ENQUIRY_FROM_EMAIL`: Optional. Sender address used by Resend.

If `RESEND_API_KEY` is missing, the API returns an error explaining that email sending is not configured yet.

## Customizing Content

Most of the business content is stored in `lib/site-data.ts`, including:

- brand name
- navigation links
- service cards
- portfolio projects
- pricing plans
- footer/social links

To change page copy, project listings, or pricing, start there.

## Contact Form Behavior

The contact form:

- collects name, email, business name, and message
- submits to `/api/contact`
- validates required fields and email format
- can prefill the message when a pricing plan is selected from the page

## SEO

SEO metadata is defined in `app/layout.tsx`, including:

- page title
- meta description
- keywords
- Open Graph metadata
- canonical base URL

## Deployment

This project is well suited to deployment on [Vercel](https://vercel.com/).

Before deploying, make sure production environment variables are added in your hosting provider:

- `RESEND_API_KEY`
- `ENQUIRY_TO_EMAIL`
- `ENQUIRY_FROM_EMAIL`

## Notes

- The current metadata base URL points to `https://www.harbourwebstudio.ie`.
- The on-site branding and content currently reference `Chiper Studio`.