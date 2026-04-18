# KeepSeeing

KeepSeeing is a SvelteKit + Netlify utility site for literary readings of recurring things.

## Local development

```bash
npm install
npm run dev
```

## Required environment variable

- `ANTHROPIC_API_KEY`

The Netlify function at `/.netlify/functions/keepseeing` accepts:

```json
{
  "system": "...",
  "user": "..."
}
```

and returns:

```json
{
  "pattern": "...",
  "portrait": "..."
}
```
