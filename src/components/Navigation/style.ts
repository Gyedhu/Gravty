import styled from "styled-components";

export const NavigationContainer = styled.div` 
  background-color: white; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const InnerContainer = styled.div` 
  align-items: center;
  display: flex;
  flex-basis: 1024px;  
  justify-content: space-between;
`;

export const Logo = styled.div` 
  align-items: center;
  display: flex;
  font-family: 'Redressed';
  font-size: 20px;
  gap: 5px;
  
  & > img {
    height: 30px;
  }
`;

interface ProfileImageProps {
  url: string
};

export const ProfileImage = styled.div < ProfileImageProps>`  
  border-radius: 50%;
  background: url(${props => props.url}) center center;
  background-size: cover;
  height: 50px;
  width: 50px;
`;
