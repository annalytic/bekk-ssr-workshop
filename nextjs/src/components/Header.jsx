import { Heading, Text, TextLink } from "@vygruppen/spor-react";
import styled from "@emotion/styled";

export const Header = () => {
  const StyledHeader = styled.header`
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 40px;
  `;

  return (
    <StyledHeader>
      <Heading textStyle="2xl">Velkommen til SSR workshop</Heading>
      <Text textStyle="md" py={6}>
        Denne appen er laget med <b>Create React App</b>. Oppgaven din er å
        migrere den over til <b>Next.js</b>. Oppskrift for hvordan det gjøres
        finner du{" "}
        <TextLink
          href="https://nextjs.org/docs/migrating/from-create-react-app"
          isExternal
        >
          her
        </TextLink>
        .
      </Text>
      <Text>
        <b>Tips:</b> Anbefaler å kjøre opp /nextjs på port 3001, slik at dere
        kan ha /cra og /nextjs oppe samtidig og sammenlikne dem. For å gjøre det
        gå inn i package.json fila i /nextjs og endre linjen{" "}
        <i>"start": "next start"</i> til <i>"start": "PORT=3001 next start"</i>{" "}
        (mac) / <i>"start": "set PORT=3001 && next start"</i> (windows).
      </Text>
    </StyledHeader>
  );
};
