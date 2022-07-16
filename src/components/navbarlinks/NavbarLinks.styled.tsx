import styled from 'styled-components';

const NavbarLinksStyled = styled.nav`
  display: none;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: flex;
    }

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    gap: 42px;
  }
`;

export default NavbarLinksStyled;
