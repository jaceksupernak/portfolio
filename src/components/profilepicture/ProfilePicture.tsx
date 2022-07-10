import React from 'react';
import styled from 'styled-components';
import myFace from '../../assets/profile_picture.png';

const ProfilePictureStyled = styled.img`

`;

const ProfilePicture:React.FC = () => (
  <ProfilePictureStyled src={myFace} />

);

export default ProfilePicture;
