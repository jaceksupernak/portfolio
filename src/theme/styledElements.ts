import styled from 'styled-components';

// space for reusable components mostly related to text elements across the whole app

export const SiteWrapper = styled.div`
    width: 100%;
    max-width: 800px; 
    position: relative;
    padding: 10px;
`;

interface SpanStyledProps {
    fontWeight?: string;
    fontSize?: string;
    fontColor?: string;
    margin?: string;
}

export const SpanStyled = styled.span<SpanStyledProps>`
    font-weight: ${({ fontWeight }) => (fontWeight || '400')};
    font-size: ${({ fontSize }) => (fontSize || '1rem')};
    margin: ${({ margin }) => (margin || 0)};
`;

export const SecondaryLight = styled.span`
  color: ${({ theme }) => theme.secondaryLight};
`;

export const Heading1Styled = styled.h1`
    font-size: 4rem;
    line-height: 80%;
    margin: 20px 0;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 3rem;
    }
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        margin-top: 4px;
        margin-bottom: 25px;
        font-size: 6rem;
        position: relative;
        left: -5px;
        text-align: left;
    }
`;

export const Heading2Styled = styled.h2`
    font-size: 3rem;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 4rem;
    }
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        font-size: 5rem;
    }
`;

export const Heading3Styled = styled.h4`
    font-size: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 3rem;
    }
`;

export const Heading4Styled = styled.h4`
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        font-size: 1.6rem;
    }
`;

export const SectionHeadingStyled = styled.h5`
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.secondaryFontFamily};
    font-weight: 400;
    letter-spacing: 0.13rem; 
`;

export const ParagraphStyled = styled.p`
    max-width: 300px;
    text-align: justify;
    font-family: ${({ theme }) => theme.secondaryFontFamily};

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        max-width: 465px;
        font-size: 1.2rem;
    }
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        max-width: 406px;  
    }
`;
