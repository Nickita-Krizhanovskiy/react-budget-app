import styled from "styled-components";

interface IProps {
  type: string;
}
const StyledCard = styled.div<IProps>`
  width: 100%;
  border-radius: 10px;
  padding-top: 36px;
  padding-bottom: 40px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color: rgb(124, 198, 254);
`;
export { StyledCard };