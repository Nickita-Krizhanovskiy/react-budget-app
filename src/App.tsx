import styled from "styled-components";
import { StyledTitle } from "./components/Title/style";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import Card from "./components/Card/Card";
import CardButton from "./components/CardButton/CardButton";
import SearchInput from "./components/SearchInput/SearchInput";
import AddButton from "./components/Button/Button";
import AddInput from "./components/Input/Input";

const App = () => {
  return (
    <StyledApp>
      <Container>
        <Header>
          <StyledTitle>Budget App </StyledTitle>
          <CustomSelect />
        </Header>
        <CardContainer>
          <Card type="budget">
            123 <CardButton>Edit</CardButton>
          </Card>
          <Card type="remaining">123</Card>
          <Card type="spent">123</Card>
        </CardContainer>
      </Container>
      <Container>
        <StyledTitle>Expenses</StyledTitle>
        <SearchInput></SearchInput>
      </Container>
      <Container>
        <StyledTitle>Add Expenses</StyledTitle>
        <ContainerInput>
          <AddInput name="name" type="text" />
          <AddInput name="cost" type="number" />
        </ContainerInput>
        <AddButton>Done</AddButton>
      </Container>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  display: grid;
  gap: 30px;
  background-color: rgb(255, 255, 255);
`;

const Container = styled.div`
  max-width: 335px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  gap: 30px;
`;

const Header = styled.div`
  max-width: 456px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const ContainerInput = styled.div`
  display: grid;
  gap: 20px;
`;