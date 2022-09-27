# SSR workshop

## Oppsett

1. Dra ned repoet lokalt ved å skrive `git clone https://github.com/annalytic/bekk-ssr-workshop.git`.
2. Kjør opp appen ved å skrive `npm run install` også `npm run start` i terminalen.

## Oppgave 1

Appen er laget med <b>Create React App</b>. Oppgaven din er å migrere den over til <b>Next.js</b>. Oppskrift for hvordan det gjøres finner du [her](https://nextjs.org/docs/migrating/from-create-react-app).

---
### Bonusoppgaver
Les nextjs sitt dokumentasjon angående [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) og [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)<br/>
Hint : metodene getSErverSideProps og getStaticPRops kan kun brukes i page-komponenter. Altså komponenter som ligger i pages-mappa di.
Fra metoden kan du returnere et props-objekt, som skal matche det props-objektet du tar inn i page-komponenten.

1. Implementer GetServerSideProps, i hvilke situasjoner kan det gi økt ytelse?
2. Implementer GetStaticProps, i hvilke situasjoner kan det gi økt ytelse?
3. Ta i bruk Next’s <Image /> komponent (https://nextjs.org/docs/api-reference/next/image),  hvilke fordeler kan dette gi?

Laget av Kristine Skjellestad, Nicolas Lopez fra (Faggruppe for Javascript 2022) og Simen Pjaaten og Anna Li (Faggruppe for React 2022)
