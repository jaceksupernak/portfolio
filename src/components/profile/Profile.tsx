import React from 'react';
import styled from 'styled-components';

const ProfileStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Profile:React.FC = () => (
  <ProfileStyled>

    <div>Profile picture</div>
    <div>git in twtr</div>

  </ProfileStyled>

);

export default Profile;
