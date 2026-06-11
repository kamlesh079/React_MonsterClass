// Let's iterate over lists and render them to the DOM.

// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <main>
//       {numbers.map((number) => (
//         <ul key={number}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </main> 
//   );
// };

// Example 2
const App = () => {
  const usersInfo = [
    {
      username: "HuXn",
      email: "test@gmail.com",
      location: "USA",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      username: "Alex",
      email: "alexmersion@gmail.com",
      location: "India",
    },
  ];

  return (
    <section>
      {/* destructure user -> { username, email, location } */}
      {usersInfo.map((user) => (
        <ul key={user.email}> 
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </section>
  );
};
// Using Math.random() as a key is bad as React treats these as completely different elements, causing unnecessary re-renders and potentially losing component state.




// Example 3
// import "./Shopping.css";

// const Shopping = ({ items }) => {
//   return (
//     <section>
//       <ol>
//         {items.map((item) => (
//           <li key={Math.random()* 5}>{item}</li>
//         ))}
//       </ol>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <section>
//       <Shopping
//         items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}
//       />
//     </section>
//   );
// };

export default App;
