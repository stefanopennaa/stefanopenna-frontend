# stefanopenna-frontend

[![Built with Hugo](https://img.shields.io/badge/built%20with-Hugo-ff4088?logo=hugo&logoColor=white)](https://themes.gohugo.io/themes/hugo-resume/)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/deployed%20on-Cloudflare%20Pages-2563EB?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Source](https://img.shields.io/badge/source-GitHub-111827?logo=github&logoColor=white)](https://github.com/stefanopennaa/stefanopenna-frontend)

Portfolio personale e sito CV di Stefano Penna, costruito con Hugo a partire da `hugo-resume` e personalizzato con template, contenuti e stile propri.

## Contenuto del sito

- home/profilo
- istruzione
- esperienza
- progetti personali
- progetti di gruppo
- pagina contatti con QR code e vCard

## Stack

- [Hugo](https://gohugo.io/)
- tema base [hugo-resume](https://themes.gohugo.io/themes/hugo-resume/)
- deploy su [Cloudflare Pages](https://pages.cloudflare.com/)

## Sviluppo locale

Avviare il server di sviluppo:

```bash
hugo server
```

Generare il sito statico:

```bash
hugo --cleanDestinationDir
```

L'output viene scritto in `public/`.

## Struttura principale

```text
content/                contenuti del sito
data/                   dati per istruzione, esperienza, certificazioni e board
layouts/                override locali dei template
static/                 immagini, favicon e CSS custom
themes/hugo-resume/     tema base incluso nella repo
```

## File personalizzati più rilevanti

- `layouts/_default/baseof.html`: metadati SEO, struttura pagina e footer
- `layouts/index.html`: composizione della home
- `layouts/_default/section.html`: rendering delle sezioni progetto
- `layouts/partials/about.html`: hero, profilo, certificazioni e board
- `layouts/partials/projectsSummary.html`: card progetto
- `layouts/partials/sectionSummary.html`: sommario delle sottosezioni
- `static/css/resume-override.css`: direzione grafica e override principali

## Note

- la lingua principale del sito è l'italiano
- i contenuti progetto sono in `content/projects/`
- i dati strutturati del profilo sono in `data/`
- la pagina contatti espone anche `contact.vcf`
