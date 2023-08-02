import React from "react";
import { FaUserAlt, FaPlus } from "react-icons/fa";

const NoCustomerAdded = () => {
  return (
    <div>
      <div className="bg-[#F9F9F9] border border-solid rounded-lg">
        <div className="py-10 px-[30px] sm:px-[160px]">
          <span className="text-2xl sm:text-3xl userIcon text-[#808087] text-center">
            <FaUserAlt />
          </span>
          <h1 className="text-[#010110] text-[16px] sm:text-[20px] py-2">
            No customers added
          </h1>
          <span className="flex ml-[-1rem] items-center text-[#0652DD]">
            <span className="sm:text-2xl ml-[1rem]">
              <FaPlus />{" "}
            </span>{" "}
            <h1 className=" text-[16px] sm:text-[20px] ml-[1rem]">
              Add customer
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoCustomerAdded;
