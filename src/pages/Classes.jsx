import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classDatas, setClassData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold mb-4">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classDatas.map((classData) => (
          <ClassCard key={classData._id} classData={classData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
