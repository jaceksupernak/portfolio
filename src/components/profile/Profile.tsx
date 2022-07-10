import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../profilepicture/ProfilePicture';

const ProfileStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Profile:React.FC = () => (
  <ProfileStyled>

    <ProfilePicture />
    <div>git in twtr</div>

  </ProfileStyled>

);

export default Profile;
