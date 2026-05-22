# stefanopenna-frontend

[![Built with Hugo](https://img.shields.io/badge/built%20with-Hugo-ff4088?logo=hugo&logoColor=white)](https://gohugo.io/)
[![Theme base](https://img.shields.io/badge/theme-hugo--resume-111827?logo=hugo&logoColor=white)](https://themes.gohugo.io/themes/hugo-resume/)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/deployed%20on-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

Portfolio personale e sito CV di Stefano Penna, realizzato con [Hugo](https://gohugo.io/) e basato sul tema `hugo-resume`.

Il repository contiene contenuti, dati strutturati, override dei template e asset statici necessari per generare un sito personale leggero, statico e deployabile su Cloudflare Pages.

## Cosa contiene

- Home con profilo, presentazione e link principali
- Percorso di studi, esperienze e competenze
- Progetti personali e contributi di gruppo
- Pagina contatti con output HTML e vCard
- Search index JSON generato da Hugo
- Override locali per layout, navigazione, SEO, footer e stile

## Stack

- Hugo `extended`
- Tema base `hugo-resume`, incluso in `themes/hugo-resume/`
- Template Go di Hugo
- CSS custom in `static/css/`
- Prettier con `prettier-plugin-go-template` per formattare i template
- Cloudflare Pages per il deploy statico

## Avvio locale

Prerequisiti:

- Hugo extended installato localmente
- Node.js e npm, solo per gli strumenti di formattazione

Installare le dipendenze npm:

```bash
npm install
```

Avviare il server di sviluppo:

```bash
hugo server
```

Il sito viene servito di default su `http://localhost:1313/`.

Generare la build statica:

```bash
hugo --cleanDestinationDir
```

L'output viene scritto in `public/`.

## Struttura del progetto

```text
config.toml              configurazione Hugo e parametri globali del sito
content/                 pagine e contenuti Markdown
data/                    dati strutturati per portfolio, CV e competenze
layouts/                 override locali dei template Hugo
static/                  CSS, JavaScript, favicon e asset pubblici
themes/hugo-resume/      tema base incluso nel repository
public/                  output generato dalla build
```

## Dove modificare cosa

| Area | File o cartella |
| --- | --- |
| Dati profilo, contatti, social, sezioni visibili | `config.toml` |
| Testo della home | `content/_index.md` |
| Pagina contatti e vCard | `content/contact.md`, `layouts/partials/vcard.html` |
| Istruzione, esperienze, certificazioni, skill | `data/*.json` |
| Progetti personali | `content/projects/creations/` |
| Progetti di gruppo | `content/projects/contributions/` |
| Layout principale | `layouts/_default/baseof.html` |
| Composizione home | `layouts/index.html` |
| Hero e blocchi profilo | `layouts/partials/about.html` |
| Card progetto e sommari | `layouts/partials/projectsSummary.html`, `layouts/partials/sectionSummary.html` |
| Stile principale | `static/css/resume-override.css` |

## Manutenzione dei contenuti

Le sezioni mostrate in home sono definite in `config.toml` tramite `params.sections`.

I contenuti progetto sono pagine Markdown sotto `content/projects/`. Ogni progetto usa il front matter Hugo per titolo, date, peso di ordinamento, tag e metadati visualizzati nelle card.

I dati più ripetibili del CV sono in `data/`, così istruzione, esperienza, certificazioni e competenze possono essere aggiornate senza toccare i template.

## Formattazione

Il repository include Prettier e il plugin per i template Go.

Formattare i file supportati:

```bash
npx prettier --write .
```

La configurazione è in `.prettierrc`; alcune view del tema originale sono escluse in `.prettierignore`.

## Deploy

La build di produzione genera un sito statico in `public/`:

```bash
hugo --cleanDestinationDir
```

Su Cloudflare Pages il comando di build può essere lo stesso, con directory di output `public`.

## Note operative

- La lingua principale del sito è l'italiano (`it-IT`).
- `relativeURLs` è attivo per rendere il sito più portabile tra ambienti.
- La vCard viene generata tramite l'output format `VCard` configurato in `config.toml`.
- Il tema `hugo-resume` è incluso nel repository, ma le personalizzazioni vivono principalmente in `layouts/` e `static/`.
