import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Person name = "Kamlesh" age = {22} />
      <Product name="Iphone" price={120000} />
    </>
  );
}

export default App;
