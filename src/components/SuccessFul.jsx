import { Container } from "postcss";
import React from "react";
import bg from "../assets/images/bg.jpg";
import "../styles.css";
import { Link } from "react-router-dom";
const SuccessFul = () => {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <div className=" flex justify-between items-center  h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content text-center mx-auto lg:text-center  ">
            <div className="py-3 flex flex-col">
              <h1 className="text-white text-5xl text-center  my-3 font-bold">
                Message Send Successfully !!!
              </h1>
              <Link
                to="/"
                className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl my-3"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessFul;
