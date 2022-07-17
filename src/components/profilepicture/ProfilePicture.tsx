import React from 'react';
import ProfilePictureStyled from './ProfilePicture.styled';
import myFace from '../../assets/profile_picture.png';

const ProfilePicture:React.FC = () => (
  <ProfilePictureStyled src={myFace} alt="Picture of my face" />

);

export default ProfilePicture;
