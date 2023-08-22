import { useEffect } from "react";

const useSelectedClass = () => {
  fetch(
      `https://summer-camp-server-ten-delta.vercel.app/select?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedClasses(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

export default useSelectedClass;
