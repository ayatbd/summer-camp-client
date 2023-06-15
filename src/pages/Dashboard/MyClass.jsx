import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
const MyClass = () => {
  const {user} = useAuth();
  const [classes, setClasses] = useState([]);
    const url = `http://localhost:5000/class?email=${user.email}`
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setClasses(data));
    }, []);

      return (
        <div>{classes.length}</div>
      );
};

export default MyClass;