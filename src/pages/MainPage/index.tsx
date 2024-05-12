import { CustomButton } from "../../components";
import { useEffect } from "react";
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
} from "./style";

import { CustomFooter } from "../../components/CustomFooter";
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
  const navigate = useNavigate();
  const handleBtnClick = () => {
    if (!firebase.auth()?.currentUser?.email) signInGoogle();
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebase.auth()?.currentUser?.getIdToken();
        console.log(firebase.auth()?.currentUser);
        if (token) {
          setUser({
            name: firebase.auth()?.currentUser?.displayName ?? "",
            email: firebase.auth()?.currentUser?.email ?? "",
            imgUrl:
              firebase.auth()?.currentUser?.photoURL ??
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            token: token ?? "",
          });
          navigate("/mypage");
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
            </HorangStudioTextWrapper>
          </HorangStudioLogoAndTitle>
        </OverlayContainer>
        <TextButtonWrapper>
          <GdscText>@GDSC Korea University</GdscText>
          <CustomButton
            textColor={"white"}
            bgColor={"black"}
            style={{
              opacity: "90%",
              width: "360px",
              margin: "0 auto",
              height: "45px",
              padding: "4px 0px",
            }}
            onClick={handleBtnClick}
          >
            <img src="/logo/Google.svg" alt="Google Logo" />
            <GoogleLogin>Google 로 결과 확인하기</GoogleLogin>
          </CustomButton>
        </TextButtonWrapper>

        <CustomFooter style={{ marginTop: 150 }} />
      </StyledMainPageWrapper>
    </Bg>
  );
};
