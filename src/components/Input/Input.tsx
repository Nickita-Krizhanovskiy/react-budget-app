import { StyledInput } from "./style";
interface iInput {
  name: string;
  type: string;
}
const AddInput = ({ name, type }: iInput) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={`enter ${name}...`}
    ></StyledInput>
  );
};
export default AddInput;