import React from "react";
import { FaArrowLeft, FaTimesCircle } from "react-icons/fa";
import NoCustomerAdded from "./NoCustomerAdded";
import ButtonGrey from "./ButtonGrey";
import ButtonBlue from "./ButtonBlue";
const SendToCustomer = () => {
  return (
    <div>
      <div className="wrapper  pt-10">
        <div className="box-shadow  px-[40px] border border-solid rounded-lg mb-10 py-[40px]">
          <div className="flex items-center justify-around mb-5 sm:mb-10">
            <span className="sm:text-3xl">
              <FaArrowLeft />
            </span>
            <h1 className="heading1 mb-0">Send to customer</h1>
            <span className="sm:text-3xl">
              <FaTimesCircle />
            </span>
          </div>
          <label className="primary-label" htmlFor="">
            Customer
          </label>{" "}
          <br />
          <select
            className="secondary-input primary-label sm:text-[20px]"
            name=""
            id=""
          >
            <option className="primary-label" value="">
              Select customer
            </option>
            <option className="primary-label" value="">
              customer 1
            </option>
            <option className="primary-label" value="">
              customer 2
            </option>
          </select>
          <NoCustomerAdded />
          <div className="flex flex-basis mt-20 ml-[-2rem]">
            <ButtonGrey>Back</ButtonGrey>
            <ButtonBlue>Share invoice</ButtonBlue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendToCustomer;
