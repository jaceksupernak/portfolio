import styled from 'styled-components';

const HeroStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
      margin-top: 40px;
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 80px;

      & >:nth-child(1){
        order: 2;
      }
  }
`;

export default HeroStyled;
