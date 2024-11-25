import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="w-full overflow-hidden">
      <img src={banner} className="w-full" alt="banner" />
    </div>
  );
};

export default Banner;
