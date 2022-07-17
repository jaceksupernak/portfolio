import styled from 'styled-components';

interface MenuStyledProps {
    isOpen: boolean;
}

const MenuStyled = styled.div<MenuStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: center;
  text-transform: uppercase;
  position: fixed;
  font-weight: bold;
  top: 0;
  right: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  
  a {
    font-size: 2rem;
    padding: 1.5rem 0;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: ${({ theme }) => theme.screen.mobile}) {
    max-width: 320px;;
  }
    
`;

export default MenuStyled;
