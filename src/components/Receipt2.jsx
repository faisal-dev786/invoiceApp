import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaTimesCircle } from "react-icons/fa";

const Receipt2 = () => {
  return (
    <div>
      <div className="wrapper  pt-10">
        <div className="box-shadow  px-[40px] border border-solid rounded-lg mb-10 py-[40px]">
          <span className="sm:text-3xl flex justify-end">
            <FaTimesCircle />
          </span>
          <img
            className="m-auto"
            src="https://i.ibb.co/ZTfntnx/Vector.png"
            alt=""
          />
          <h1 className="heading1 text-center border-b border-solid mt-10 pb-10">
            #2023-00005 sent to Jane Smith
          </h1>
          <h1 className="font-bold mb-3 text-[14px] sm:text-2xl">Details</h1>
          <label className="primary-label" htmlFor="">
            Amount
          </label>{" "}
          <br />
          <h1 className="text-[15px] sm:text-2xl mb-5">€ 1350</h1>
          <label className="primary-label" htmlFor="">
            Description
          </label>{" "}
          <br />
          <h1 className="text-[15px] sm:text-2xl mb-5">Landing Page Design</h1>
          <label className="primary-label" htmlFor="">
            Due date
          </label>{" "}
          <br />
          <h1 className="text-[15px] sm:text-2xl mb-5">31/04/2023</h1>
          <label className="primary-label" htmlFor="">
            Attachment
          </label>
          <h1 className="text-[15px] sm:text-2xl">invoice_2023_00005.pdf</h1>
          <PrimaryButton>Done</PrimaryButton>
          {/* <ButtonBlue icon={"back"} /> */}
          {/* <ButtonBlue iconn={"white"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Receipt2;
