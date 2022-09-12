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
    </StyledHeader>
  );
};
