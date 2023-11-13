import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Sayhello from "./components/Sayhello";
import Status from "./components/Status";

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

  return (
    <>
      <Layout>
        <Heading>This is Heading</Heading>
      </Layout>
      <Button handleClick={(e,id) => console.log(e.target,id)}/>
      <Input value="" handleChange={(e) => console.log(e.target.value)}/>
      <Status status="loading" />
      <Sayhello arrData={arrData} objData={objData} isLoggedIn={true} />
    </>
  );
}

export default App;
