import { Heading, Text } from "@vygruppen/spor-react";

const Header = () => (
  <header className="app-header">
    <Heading textStyle="2xl">Velkommen til SSR workshop</Heading>
    <Text textStyle="md" pt={6} pb={8}>
      Denne appen er laget med <b>Create React App</b>. Oppgaven din er å
      migrere den over til <b>Next.js</b>. Oppskrift for hvordan det gjøres
      finner du.
      <a href="https://nextjs.org/docs/migrating/from-create-react-app">her</a>.
    </Text>
  </header>
);

export default Header;
