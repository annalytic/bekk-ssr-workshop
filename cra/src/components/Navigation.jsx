import styled from "@emotion/styled";

export const Navigation = () => {
  const StyledNavigation = styled.header`
    margin-left: auto;
  `;

  return (
    <StyledNavigation>
      <ul>
        <li>
          <a href="">Hjem</a>
        </li>
        <li>
          <a href="">Om oss</a>
        </li>

        <li>
          <a href="">Kontakt oss</a>
        </li>
      </ul>
    </StyledNavigation>
  );
};
