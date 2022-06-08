import logo from "../../assets/logo.svg";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo Todo" />
    </Container>
  );
}
