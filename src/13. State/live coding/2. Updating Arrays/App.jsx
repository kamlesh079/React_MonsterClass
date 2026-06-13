import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOne = () => setFriends([...friends, "Kamlesh WebDev"])

  const removeOne = () => setFriends(friends.filter((person) => person !== "John")); 
  const updateOne = () => setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));

  return (
    <div>
      {
        friends.map((friend) =>(
          <li key = 'Math.random()'>{friend}</li>
        ))
      }
      <button onClick={addOne}>Add One</button> 
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
};

export default App;
