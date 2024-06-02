import React from "react";
import image from "./assets/bottomimage.png";
import backimage from "./assets/backimage.png";

function Faq() {
  return (
    <>
      <div className=" relative justify-center flex flex-col items-center">
        <svg
          className=" absolute top-20 rotate-45 left-1/2 -scale-50 md:scale-100"
          width="62"
          height="59"
          viewBox="0 0 62 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 0.70874L32.5047 30.6377L61.4338 22.8202L33.4347 33.4998L49.8091 58.5973L31 35.2687L12.1909 58.5973L28.5653 33.4998L0.566191 22.8202L29.4953 30.6377L31 0.70874Z"
            fill="black"
          />
        </svg>

        <div className="  w-5/6 h-fit  flex flex-col md:px-14 my-4 " id="faq">
          <h3 style={{ color: "#FF5555" }}>FAQ</h3>
          <h1 className=" text-xl md:text-3xl ">
            Frequently Asked <br /> Questions
          </h1>
          <div
            className=" w-full my-6 flex flex-col md:flex-row"
            id="questions"
          >
            <div className="  md:w-1/2">
              <div
                className="w-full  p-8 my-4 rounded-lg"
                style={{ background: "#FF5555" }}
                id="lques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ color: "white", fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm " style={{ color: "white" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              
              <div
                className="w-full  p-8 my-4 rounded-lg"
                style={{ background: "#FFF" }}
                id="lques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm ">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div
                className=" w-full p-8 my-4 rounded-lg"
                style={{ background: "#FF5555" }}
                id="lques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ color: "white", fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm " style={{ color: "white" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>

            <div className=" md:w-1/2">
              <div
                className="w-full  p-8 my-4 rounded-lg"
                style={{ background: "#FFF" }}
                id="lques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm ">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>

              <div
                className="  p-8 my-4 rounded-lg"
                style={{ background: "#FF5555" }}
                id="rques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ color: "white", fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm " style={{ color: "white" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>

              <div
                className="w-full  p-8 my-4 rounded-lg"
                style={{ background: "#FFF" }}
                id="lques"
              >
                <h1
                  className=" text-xl md:text-2xl"
                  style={{ fontFamily: "ClashDisplay-Medium" }}
                >
                  The Best Financial Accounting <br /> App Ever!
                </h1>
                <p className=" text-xs md:text-sm ">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-fit relative items-center flex justify-center md:my-28 mb-10 " >
            <img className=" absolute -top-28 md:-top-40 -left-40 -z-20 " src={backimage} alt="" />
            <img src={image} alt="" />
        </div>


      </div>
    </>
  );
}

export default Faq;
