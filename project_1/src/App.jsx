import Card from "./component/Card";

const App = () => {
  return (
    <>
      <div className="parent">
       
        <Card
          userName="lora"
          age={27}
          Image="https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Anil bk"
          age={24}
          Image="https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default App;
