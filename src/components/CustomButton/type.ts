export interface CustomButtonProps {
  bgColor?: string;
  borderColor?: string;
  textColor: string;
  style?: any;
  onClick?: () => void;
  children: React.ReactNode;
}
