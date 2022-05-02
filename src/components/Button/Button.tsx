import { ReactNode } from "react";
import { StyledButton } from "./style";

interface IButton {
  children: ReactNode;
}

const AddButton: React.FC<IButton> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default AddButton;