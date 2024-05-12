import { StyledButtonWrapper } from "./style";
import { CustomButtonProps } from "./type";

export const CustomButton = ({
  bgColor = "white",
  borderColor = "transparent",
  textColor,
  style,
  onClick,
  children,
}: CustomButtonProps) => {
  return (
    <StyledButtonWrapper
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </StyledButtonWrapper>
  );
};
