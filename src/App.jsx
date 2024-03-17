import { useState } from "react";
import Registration from "./components/registration";
import Login from "./components/login";
import "./index.css";

function App() {
  const [showRegistration, setShowRegistration] = useState(true);

  const handleClick = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <>
      {showRegistration ? (
        <Registration handleClick={handleClick} />
      ) : (
        <Login handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
