const PagesBanner = ({ img, title }) => {
  return (
    <div className="h-[45vh] w-full overflow-hidden bg-gray-300 pt-14 md:pt-40">
      <div className="relative w-full h-full">
        <img
          className="absolute bottom-0 -right-14 md:-right-10"
          src={img}
          alt=""
        />
        <div className="pl-5 md:pl-10">
          <h1 className="text-3xl font-kanit font-extrabold text-black">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PagesBanner;
