import styled from 'styled-components';

const LinkStyled = styled.a`
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.secondaryLightBrighter};
    }
`;

export default LinkStyled;
