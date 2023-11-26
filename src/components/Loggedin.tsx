import {useState} from 'react'

const Loggedin = () => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }

    const handleLogOut = () => {
        setIsLoggedIn(false)
    }

  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h2>User is {isLoggedIn ? "logged in" :"logged out"}</h2>
    </div>
  )
}

export default Loggedin