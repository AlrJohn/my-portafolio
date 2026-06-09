# Jonathan Reyes Portfolio

Frontend for Jonathan Reyes' personal portfolio. The site is a React single-page application deployed to Vercel. Its Q&A modal calls a separately operated Raspberry Pi API backed by a local LLM.

## Stack

- React 19 and React Router
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Vitest and React Testing Library

This repository intentionally contains no chatbot backend, model, RAG data, or Raspberry Pi provisioning code.

## Local Development

Requirements:

- Node.js 22
- npm 10 or newer

```bash
npm install
cp .env.example .env.local
npm run dev
```

On PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

The site remains usable without environment variables. Chat requests will show an unavailable state, and the contact page will provide a direct email link.

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `VITE_CHAT_API_URL` | Public HTTPS base URL for the Raspberry Pi API, without a trailing slash |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS browser public key |

Set the same values in the Vercel project's environment settings.

## Chat API Contract

The frontend sends:

```http
POST {VITE_CHAT_API_URL}/ask
Content-Type: application/json

{"question":"What projects has Jonathan built?"}
```

The API must return:

```json
{"response":"Answer text"}
```

The Pi service must allow the production Vercel origin through CORS. The frontend applies a 30-second timeout and displays safe errors without exposing backend details.

## Content Updates

- General identity, contact details, navigation, and About copy: `src/data/site.js`
- Projects: `src/data/projects.js`
- Experience: `src/data/experience.js`
- Coursework: `src/data/coursework.js`
- Profile image: `src/assets/profile.jpg`
- SEO and canonical URL: `index.html`

Review the dated-content checklist in `src/data/site.js` before publishing a content refresh.

## Quality Checks

```bash
npm run lint
npm run test:run
npm run build
npm run check
```

GitHub Actions runs the combined check on pushes and pull requests. `vercel.json` routes direct page requests back to the React application.
