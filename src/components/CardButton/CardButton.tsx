import { StyledButton } from "./style";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
}

const CardButton: React.FC<IButton> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default CardButton;