import { useState } from "react";
import { User } from "../types/app";


const User = () => {
//   const [user, setUser] = useState<null | User>(null);
// or
const [user, setUser] = useState<User>({} as User); // Type Assertion

  return (
    <div>
      <button onClick={() => setUser({name:"amr",email:"amr@gmail.com"})}>Login</button>
      {/* <button onClick={() => setUser(null)}>Logout</button> */}
      
      {/* Type Assertion */}
      <button onClick={() => setUser({} as User)}>Logout</button> 

      <h2>User name is {user?.name}</h2>
      <h2>User email is {user?.email}</h2>

    </div>
  );
};

export default User;
