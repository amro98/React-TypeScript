import "./App.css";
import Sayhello from "./components/Sayhello";

function App() {
  const objData = {
    firstName: "Amr",
    lastName: "Hossam",
    age: 25,
  };

  return (
    <>
      <Sayhello objData={objData} isLoggedIn={true} />
    </>
  );
}

export default App;
