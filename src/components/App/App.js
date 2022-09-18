import Discount from "../Discount/Discount";
import AppStyles from "../styled-components/AppStyles";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <AppStyles>
      <Header />
      <Main />
      <Discount />
    </AppStyles>
  );
}

export default App;
