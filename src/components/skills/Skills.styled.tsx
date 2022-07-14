import styled from 'styled-components';

export const SkillsStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 100%;
  background: linear-gradient(91.78deg, #515586 -44.01%, rgba(204, 207, 255, 0) 140.31%);
  border-radius: 5px; 

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    justify-content: center;
  }
`;

export const SkillStyled = styled.span`
  font-size: 0.9rem;
  padding: 10px 12px;
  
  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    padding: 20px 12px;
    font-size: 1rem;
    }
`;
