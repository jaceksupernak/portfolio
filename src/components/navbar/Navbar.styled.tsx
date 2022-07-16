import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    font-size: 1.3rem;
    }
`;

export default NavbarStyled;
