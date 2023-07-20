import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { ScaleLoader } from "react-spinners";
import Tittle from "../Components/Tittle";
import PagesBanner from "../Components/PagesBanner";
import img from "../assets/images/img19.png";

const Classes = () => {
  const [classDatas, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <div>
          {loading ? (
            <ScaleLoader size={35} color="#123abc" loading={true} />
          ) : (
            <div>Content to display when not loading...</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <PagesBanner img={img} title="All Classes"></PagesBanner>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classDatas.map((classData) => (
          <ClassCard key={classData._id} classData={classData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
