const Tittle = ({ subTitle, title }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
      <div className="flex justify-center w-full border-opacity-50">
        <div className="divider w-96"></div>
      </div>
      <p className="text-primary font-kanit text-red-500 font-bold">
        {subTitle}
      </p>
      <h1 className="text-2xl md:text-3xl font-kanit font-extrabold text-black">
        {title}
      </h1>
      <div className="flex justify-center w-full border-opacity-50">
        <div className="divider w-96"></div>
      </div>
    </div>
  );
};

export default Tittle;
