import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../profilepicture/ProfilePicture';
import Socials from '../socials/Socials';

const ProfileStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Profile:React.FC = () => (
  <ProfileStyled>

    <ProfilePicture />
    <Socials />

  </ProfileStyled>

);

export default Profile;
