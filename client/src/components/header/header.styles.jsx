import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StickyContainer = styled.div`
position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    font-size:80%;
  }
  @media screen and (max-width: 400px) {
    font-size:70%;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    margin:0;
  }
  @media screen and (max-width: 600px) {
    width: 40px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 85%;
    margin-right:25px;
    padding-left:0;
  }
  @media screen and (max-width: 600px) {
    margin-right:25px;
  }
  @media screen and (max-width: 400px) {
    margin-right:15px;
   
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding: 5px 10px;
  }
  @media screen and (max-width: 400px) {
    padding: 2px 5px;
  }
`;

OptionLink.displayName = 'OptionLink';
