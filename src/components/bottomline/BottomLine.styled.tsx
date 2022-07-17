import styled from 'styled-components';

const BottomLineStyled = styled.div`
    height: 10px;
    width: 100%;
    background: ${({ theme }) => `linear-gradient(98.09deg, ${theme.primaryDarkBrighter} -20%, ${theme.secondaryLightBrighter} 120%)`};
`;

export default BottomLineStyled;
