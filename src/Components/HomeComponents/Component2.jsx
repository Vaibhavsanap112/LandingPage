import React from "react";
function Component2() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-around items-center  bg-white w-[65%] h-[310px] shadow-xl rounded-xl">
        <div>
          <p className="font-bold text-3xl mt-[5px]">
            Introducing <br />
            good solution
          </p>
          <p className="mt-[5px]">
            Join our community and experience <br />
            the benefits today!
          </p>
          <p className="bg-blue-600 w-fit p-[7px] rounded-[6px] px-[13px] text-white mt-[5px]">Try for free</p>
        </div>
        <div className=" w-[500px]  h-[600px] mt-[110px]">
          <img className=" w-full h-auto" src="/Home/Image2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Component2;
