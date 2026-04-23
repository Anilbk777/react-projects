import Component1 from "./Component"
import Card from "./Card";

function App() {
  let users = [
    { userName: "Ram", profession: "job1" },
    { userName: "shaym", profession: "job2" },
    { userName: "hari", profession: "job3" },
    { userName: "alex", profession: "job44" },
  ];
  
  

  return (
    <>
      {users.map((user, index) => (
        <Card key={index} {...user} />
      ))}
    </>
  );
}

export default App
