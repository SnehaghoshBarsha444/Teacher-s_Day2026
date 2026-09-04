# The Teacher Archive — 2026

An editorial Teacher’s Day archive built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Architecture

- `src/data/archive.ts` contains development-only archive content.
- `src/services/archiveService.ts` is the repository boundary to replace with Firebase implementations.
- `firestore.rules` contains server-enforced ownership and public visibility rules. Deploy these rules before connecting real archive content.

## Firebase hand-off

Create Firebase Authentication users outside the client application, then create `users/{uid}` documents with `role`, `teacherId`, and `active`. Never put credentials in source code or Firestore. Firebase client configuration belongs in environment variables (for example `VITE_FIREBASE_API_KEY`) and must be paired with the deployed Firestore rules.
