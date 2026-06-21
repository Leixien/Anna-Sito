# anna-sito

Sito statico di supporto per l'app **Anna** (privacy, supporto, presentazione). Pensato in primo luogo per soddisfare i requisiti della App Review di Apple (Support URL e Privacy Policy URL).

Nessuna dipendenza, nessuna build: solo HTML/CSS/JS semplice.

## Struttura
```
index.html      → home / presentazione
privacy.html    → informativa sulla privacy
support.html    → pagina di supporto + FAQ
css/style.css
js/breathe.js
```

## Pubblicare su GitHub Pages

1. Crea un repo (es. `anna-sito`) e fai push di questi file nella **root** del branch `main`:
   ```bash
   cd anna-sito
   git init
   git add .
   git commit -m "Sito Anna: home, privacy, supporto"
   git branch -M main
   git remote add origin https://github.com/TUOUSER/anna-sito.git
   git push -u origin main
   ```
2. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, cartella `/ (root)`. Salva.
3. Dopo qualche minuto il sito sarà live su:
   `https://TUOUSER.github.io/anna-sito/`

## URL da inserire in App Store Connect

- **Privacy Policy URL**: `https://TUOUSER.github.io/anna-sito/privacy.html`
- **Support URL**: `https://TUOUSER.github.io/anna-sito/support.html`
- **Marketing URL** (opzionale): `https://TUOUSER.github.io/anna-sito/`

## Prima di pubblicare
- Verifica che `g_scappaticci@icloud.com` sia l'indirizzo che vuoi rendere pubblico (compare in chiaro sia su Privacy che su Supporto).
- Se in futuro l'app introduce HealthKit, sincronizzazione cloud o terze parti, **aggiorna `privacy.html`** di conseguenza — è un documento che deve restare vero, non solo presente.
- Apri `index.html` localmente nel browser per un'anteprima veloce prima del push.
