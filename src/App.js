import Layout from "./components/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";

function App() {
  return (
    <div >
      <Layout>
        <Toolbar />
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
  