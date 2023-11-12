import "./App.css";
import Heading from "./components/Heading";
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
      <Status status="loading" />
      <Sayhello arrData={arrData} objData={objData} isLoggedIn={true} />
    </>
  );
}

export default App;
