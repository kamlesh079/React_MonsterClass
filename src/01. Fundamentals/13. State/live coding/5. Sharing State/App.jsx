import { useState } from "react";
import ComponentTwo from "./components/ComponentTwo";
import ComponentOne from "./components/ComponentOne";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <section>
      <ComponentOne
        count={count1}
        onClickHandler={() => setCount1(count1 + 1)}
      />
      <ComponentTwo
        count={count2}
        onClickHandler={() => setCount2(count2 - 1)}
      />
    </section>
  );
};

export default App;
