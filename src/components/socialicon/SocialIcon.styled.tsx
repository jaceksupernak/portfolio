import styled from 'styled-components';

const SocialIconStyled = styled.a`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(2px);
    }

    img {
        height: 36px;
        width: 36px;
    }
`;

export default SocialIconStyled;
