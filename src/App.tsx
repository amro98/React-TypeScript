import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Sayhello from "./components/Sayhello";
import Status from "./components/Status";
import Container from "./components/Container";
import Products from "./components/Products";
import Loggedin from "./components/Loggedin";
import User from "./components/User";
import Counter from "./components/Counter";


function App() {
  const objData = {
    firstName: "Amr",
    lastName: "Hossam",
    age: 25,
  };

  const arrData = [
    {
      id: 1,
      firstName: "Amr",
      lastName: "Hossam",
    },
    {
      id: 2,
      firstName: "Mohamed",
      lastName: "Samir",
    },
    {
      id: 3,
      firstName: "Adel",
      lastName: "Ashrf",
    },
  ];

  const productsData = [
    {
      id: 1,
      name: "Product1",
      price: 21,
      desc: "this is product1"
    },
    {
      id: 2,
      name: "Product2",
      price: 55,
      desc: "this is product2"
    },
    {
      id: 3,
      name: "Product3",
      price: 88,
      desc: "this is product3"
    },
  ];

  return (
    <>
      <Layout>
        <Heading>This is Heading</Heading>
      </Layout>
      <hr style={{margin:"1rem"}}/>
      <Button handleClick={(e,id) => console.log(e.target,id)}/>
      <hr style={{margin:"1rem"}}/>
      <Input value="" handleChange={(e) => console.log(e.target.value)}/>
      <hr style={{margin:"1rem"}}/>
      <Status status="loading" />
      <hr style={{margin:"1rem"}}/>
      <Sayhello arrData={arrData} objData={objData} isLoggedIn={true} />
      <hr style={{margin:"1rem"}}/>
      <Container styles={{border:"1px solid black", padding:"1rem"}} />
      <hr style={{margin:"1rem"}}/>
      <Products productsData={productsData} />
      <hr style={{margin:"1rem"}}/>
      <Loggedin/>
      <hr style={{margin:"1rem"}}/>
      <User/>
      <hr style={{margin:"1rem"}}/>
      <Counter/>
    </>
  );
}

export default App;
