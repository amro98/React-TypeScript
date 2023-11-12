type Props = {
  arrData: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
  objData: {
    firstName?: string | undefined;
    lastName?: string | undefined;
    age?: number | undefined;
  };
  isLoggedIn: boolean;
};

const Sayhello = ({ arrData, objData, isLoggedIn }: Props) => {
  return (
    <div>
      <h1>
        Hello{" "}
        {isLoggedIn ? `${objData.firstName}  ${objData.lastName}` : "Guest"}
      </h1>
      <p>Your Age Is {objData.age} </p>
      <br></br>
      <div>
        <ul>
          {arrData.map((item) => (
            <li key={item.id}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sayhello;
