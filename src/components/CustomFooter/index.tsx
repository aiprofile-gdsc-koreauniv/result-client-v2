import {
  Footer,
  FooterContact,
  FooterContactRow,
  FooterContactText,
  FooterContactTitle,
  FooterContactType,
  FooterLink,
  FooterText,
  FooterUniversityText,
} from "./style";
import { CustomFooterProps } from "./type";

export const CustomFooter = ({ style }: CustomFooterProps) => {
  return (
    <Footer style={style}>
      <FooterContact>
        <FooterContactTitle>
          <img src="/logo/logo.svg" style={{ width: 20, marginRight: 10 }} />
          Google Developer Student Clubs
        </FooterContactTitle>
        <FooterUniversityText> Korea University</FooterUniversityText>
        <FooterText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FooterLink
              href="https://www.instagram.com/gdsc.koreauniv/"
              target="_blank"
            >
              GDSC KU
            </FooterLink>
            <span style={{ margin: "0 10px" }}>|</span>
            <FooterLink
              href="https://www.instagram.com/gdscku.project?igsh=MTM3djdkc2s5ZDBubw=="
              target="_blank"
            >
              GDSC KU Projects
            </FooterLink>
            <span style={{ margin: "0 10px" }}>|</span>

            <FooterLink
              href="/pdf/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </FooterLink>
          </div>
        </FooterText>
        <FooterContactRow>
          <FooterContactType>Contact </FooterContactType>
          <FooterContactText>gdsc.koreauniv@gmail.com</FooterContactText>
        </FooterContactRow>
      </FooterContact>
    </Footer>
  );
};
