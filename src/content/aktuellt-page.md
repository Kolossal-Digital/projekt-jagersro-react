# Exempel: Aktuellt

Sidans eget redaktionella innehåll. Navigation och Footer hämtas från de gemensamma
sidinställningarna så att de inte behöver dupliceras här.

## Sidinställningar
```yaml
key: aktuellt-page
type: page
navbarTheme: light
navbarBackground: background-accent-01
footerTheme: dark
footerBackground: background
```

## Sidinnehåll
```yaml
theme: light
hero:
  id: aktuellt-intro
  variant: split
  background: background-accent-01
  headingColor: text-primary
  balanceHeading: true
  paddingTop: large
  paddingBottom: large
  content:
    heading: Aktuellt
    body: Händelser, berättelser och nedslag från Jägersro – i takt med att området förändras.
articleListing:
  id: alla-artiklar
  source: all-articles
  background: background-accent-01
  cardBackground: background
  headingColor: text-primary
  balanceHeading: true
  paddingTop: small
  paddingBottom: large
  initialCount: 7
  batchSize: 6
  loadMoreLabel: Ladda fler artiklar
  paginationPath: /aktuellt/
  ariaLabel: Alla artiklar
```
