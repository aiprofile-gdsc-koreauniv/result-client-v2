import { CustomButton } from "../../components";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth, signInGoogle } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfo } from "../../recoil";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  GdscText,
  GoogleLogin,
  HorangStudioLogoAndTitle,
  HorangStudioTextWrapper,
  HorangStudioTitle,
  HorangeStudioDesc,
  StyledMainPageWrapper,
  TextButtonWrapper,
  CustomSlider,
  SlideWrapper,
  Slide,
  WhiteOverlay,
  Bg,
  OverlayContainer,
  Continue,
  ContinueBtn,
  GoToResultBtn,
  Logout,
  BtnIcon,
  ResultBtnText,
  DetailText,
  GoogleBtn,
  GoogleBtnText,
} from "./style";

import { CustomFooter } from "../../components/CustomFooter";
import { Checkbox } from "antd";
export type userInfoProps = {
  name: any;
  email: any;
};
const PagingImagesList = [
  "/img/Paging1.png",
  "/img/Paging2.png",
  "/img/Paging3.png",
  "/img/Paging4.png",
];
export const MainPage = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const [loginClicked, setLoginClicked] = useState(false);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    setLoginClicked(true);
    if (!firebase.auth()?.currentUser?.email) signInGoogle();
  };
  useEffect(() => {
    if (user && loginClicked) {
      navigate("/mypage");
    }
  }, [user, loginClicked]);
  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebase.auth()?.currentUser?.getIdToken();

        if (token) {
          setUser({
            name: firebase.auth()?.currentUser?.displayName ?? "",
            email: firebase.auth()?.currentUser?.email ?? "",
            imgUrl:
              firebase.auth()?.currentUser?.photoURL ??
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            token: token ?? "",
          });
        }
      } else {
        setUser({ name: "", email: "", token: "", imgUrl: "" });
      }
    });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <Bg>
      <StyledMainPageWrapper>
        <OverlayContainer>
          <WhiteOverlay />
          <CustomSlider {...settings}>
            {PagingImagesList.map((image, idx) => (
              <SlideWrapper key={idx + "img"}>
                <Slide src={`${image}`} />
              </SlideWrapper>
            ))}
          </CustomSlider>

          <HorangStudioLogoAndTitle>
            <img src="/logo/Tiger.svg" height={70} />
            <HorangStudioTextWrapper>
              <HorangStudioTitle>호랑이 사진관</HorangStudioTitle>
              <HorangeStudioDesc>
                석탑대동제 기념 AI 프로필 제작 서비스
              </HorangeStudioDesc>
              <GdscText>@GDSC Korea University</GdscText>
            </HorangStudioTextWrapper>
          </HorangStudioLogoAndTitle>
        </OverlayContainer>
        <div style={{ background: "white" }}>
          {firebase.auth()?.currentUser?.email ? (
            <Continue>
              <ContinueBtn
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                프로필 사진 새로 만들기
              </ContinueBtn>
              <GoToResultBtn>
                <BtnIcon src={"/logo/Tiger.svg"} />
                <ResultBtnText
                  onClick={() => window.open("https://horangstudio.com/")}
                >
                  생성 페이지로 돌아가기
                </ResultBtnText>
              </GoToResultBtn>
              <Logout>
                <DetailText
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  로그아웃 하기
                </DetailText>
              </Logout>
            </Continue>
          ) : (
            <>
              <Continue>
                <GoogleBtn onClick={handleBtnClick}>
                  <BtnIcon src={"/logo/Google.svg"} />
                  <GoogleBtnText>로그인하고 결과 확인하기</GoogleBtnText>
                </GoogleBtn>
                <GoToResultBtn>
                  <BtnIcon src={"/logo/Tiger.svg"} />
                  <ResultBtnText
                    onClick={() => window.open("https://horangstudio.com/")}
                  >
                    생성 페이지로 돌아가기
                  </ResultBtnText>
                </GoToResultBtn>
              </Continue>
            </>
          )}
        </div>

        <CustomFooter />
      </StyledMainPageWrapper>
    </Bg>
  );
};
