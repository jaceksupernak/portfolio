import React from 'react';
import ProfilePicture from '../profilepicture/ProfilePicture';
import Socials from '../socials/Socials';
import ProfileStyled from './Profile.styled';

const Profile:React.FC = () => (
  <ProfileStyled>

    <ProfilePicture />
    <Socials />

  </ProfileStyled>

);

export default Profile;
