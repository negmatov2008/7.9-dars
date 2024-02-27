import React from "react";
import { styled } from "styled-components";
//Home page css berildi
const HomeStyle = styled.div`
  max-width: 375px;
  margin: 206px auto;

  padding: 0 25px;
  @media screen and (min-width: 760px) {
    max-width: 760px;
    padding: 0 88px;
    margin-top: 203px;
  }
`;
//menyuga css berildi
const MenyuStyle = styled.div`
  transition: all 300ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 324px;
  height: 481px;
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px -8px 0px 4px #140e66 inset, 0px 6px 0px 8px #2463ff inset;
  position: relative;
  padding-top: 138px;
  @media screen and (min-width: 760px) {
    margin: 0 auto;
    width: 592px;
    height: 500px;
  }
`;
//img logo css berildi
const ImgStyle = styled.img`
  position: absolute;
  width: 250px;
  height: 115px;
  top: -60px;
  transition: all 300;
  @media screen and (min-width: 760px) {
    top: -90px;
    width: 373px;
    height: 180px;
  }
`;
//play button css berildi
const ImgPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);

  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  border: none;
  margin-bottom: 57px;
  transition: all 300ms;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }
  @media screen and (min-width: 760px) {
    width: 200px;
    height: 200px;
  }
`;

const StartStyle = styled.button`
  padding: 12px 64px;
  font-size: 32px;
  color: white;
  border-radius: 40px;
  background: var(--Blue, #2463ff);
  box-shadow: 0px -2px 0px 3px #140e66 inset, 0px 1px 0px 6px #3c74ff inset;
  border: none;
  transition: all 300ms;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      #2463ff;
  }
`;
function Home() {
  return (
    <>
      <HomeStyle>
        <MenyuStyle>
          <ImgStyle src="logo.svg" alt="" />
          <ImgPlay>
            <img src="play.svg" alt="" />
          </ImgPlay>
          <StartStyle>HOW TO PLAY</StartStyle>
        </MenyuStyle>
      </HomeStyle>
    </>
  );
}

export default Home;
