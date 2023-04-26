import React from "react";
import ButtonGrey from "./ButtonGrey";
import ButtonBlue from "./ButtonBlue";

const CreateInvoice = () => {
  return (
    <div>
      <div className="wrapper  pt-10">
        <div className="box-shadow  px-[40px] border border-solid rounded-lg mb-10 py-[40px]">
          <h1 className="text-3xl font-bold mb-10">Create invoice</h1>
          <div className="sm:flex gap-5">
            <div>
              <label className="primary-label" htmlFor="">
                Invoice ID
              </label>
              <br />
              <input
                className="primary-input sm:mt-0 mb-5"
                placeholder="#2023-00001"
                type="number"
              />
            </div>
            <div>
              <label className="primary-label " htmlFor="">
                Amount ($)
              </label>{" "}
              <br />
              <input
                className="primary-input"
                placeholder="0.00"
                type="number"
              />
            </div>{" "}
            <br />
          </div>
          {/* dexcription start */}
          <label className="primary-label" htmlFor="">
            Description
          </label>
          <br />
          <input
            className="secondary-input"
            placeholder="Landing page design"
            type="text"
          />
          {/*  */}
          {/* Due date start */}
          <label className="primary-label" htmlFor="">
            Due date
          </label>
          <br />
          <input className="secondary-input" placeholder="" type="date" />
          {/*  */}

          <label className="primary-label" htmlFor="">
            File attachment
          </label>
          <br />
          <input type="file" />
          <div className="sm:flex gap-5">
            <ButtonGrey />
            <ButtonBlue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
