import styled from 'styled-components';

const ProfilePictureStyled = styled.img`
  border-radius: 40px;
  height: 200px;
  width: 200px;

  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    height: 240px;
    width: 240px;
  }

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    height: 260px;
    width: 260px;
  }
`;

export default ProfilePictureStyled;
