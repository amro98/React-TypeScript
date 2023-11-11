type Props = {
  objData: {
    firstName: string;
    lastName: string;
    age: number;
  };
  isLoggedIn: boolean;
};

const Sayhello = ({ objData, isLoggedIn }: Props) => {
  return (
    <div>
      <h1>Hello {isLoggedIn ? `${objData.firstName}  ${objData.lastName}`  : "Guest"}</h1>
      <p>Your Age Is {objData.age} </p>
    </div>
  );
};

export default Sayhello;
