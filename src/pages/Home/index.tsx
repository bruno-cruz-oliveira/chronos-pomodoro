import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainTemplate from "../../templates/MainTemplate";
import MainForm from "../../components/MainForm";

function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

export default Home;
