import React from "react";
import container1 from "./assets/container1.png";
import container2 from "./assets/container2.png";
import lastcontainer from "./assets/lastcontainer.png";
import people from "./assets/people.png"

function Container() {
  return (
    <>
      <div className=" relative justify-center flex flex-col items-center">
        <div
          className="  w-5/6 h-fit  flex flex-col-reverse md:flex-row md:px-14 my-4 justify-center"
          id="containers1"
        >
          <div className=" w-full md:w-1/2" id="leftcont1">
            <img src={container1} alt="" />
          </div>
          <div
            className=" flex flex-col w-full md:w-1/2 p-4 py-0"
            id="rightcont1"
          >
            <h3
              className=" text-1xl md:text-2xl"
              style={{ color: "#FF5555" }}
              id="feature"
            >
              FEATURES
            </h3>
            <h1 className=" text-3xl md:text-5xl">Uifry Premium</h1>
            <h3 className=" flex flex-row py-4 gap-2 font-semibold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Budgeting Intervals
            </h3>
            <p className="text-sm md:text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <h3 className=" flex flex-row py-4 gap-2 font-semibold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.50002V12M12 12L20.5 7.27773M12 12L3.5 7.27773M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1954 12.2015 12.1645C12.0685 12.1371 11.9315 12.1371 11.7986 12.1645C11.6484 12.1954 11.5066 12.2741 11.223 12.4317L3.5 16.7222M21 16.0586V7.94147C21 7.59883 21 7.4275 20.9495 7.27471C20.9049 7.13953 20.8318 7.01545 20.7354 6.91076C20.6263 6.79242 20.4766 6.70922 20.177 6.54282L12.777 2.43171C12.4934 2.27415 12.3516 2.19537 12.2015 2.16448C12.0685 2.13715 11.9315 2.13715 11.7986 2.16448C11.6484 2.19537 11.5066 2.27415 11.223 2.43171L3.82297 6.54282C3.52345 6.70922 3.37369 6.79242 3.26463 6.91076C3.16816 7.01545 3.09515 7.13953 3.05048 7.27471C3 7.42751 3 7.59883 3 7.94147V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8356C11.9315 21.8629 12.0685 21.8629 12.2015 21.8356C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Budgeting Intervals
            </h3>
            <p className="text-sm md:text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <h3 className=" flex flex-row py-4 gap-2 font-semibold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Budgeting Intervals
            </h3>
            <p className="text-sm md:text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        {/* here container1 ends */}

        <div
          className="  w-5/6 h-fit items-center  flex flex-col-reverse md:flex-row-reverse md:px-14 my-20 justify-center"
          id="containers1"
        >
          <div className=" w-full md:w-1/2" id="leftcont1">
            <img src={container2} alt="" />
          </div>
          <div
            className=" flex flex-col w-full md:w-1/2 p-4 py-0"
            id="rightcont1"
          >
            <h3
              className=" text-1xl md:text-2xl"
              style={{ color: "#FF5555" }}
              id="feature"
            >
              ADVANTAGES
            </h3>
            <h1 className=" text-3xl md:text-5xl">Why Choose Uifry</h1>
            <h3 className=" flex flex-row py-4 gap-2 font-semibold items-center md:text-2xl " >
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.488" r="24" fill="#FF5555" />
                <path
                  d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Clever Notifications
            </h3>
            <p className="text-sm md:text-lg">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.{" "}
            </p>
          </div>
        </div>
        {/* here container2 ends */}

        

        <div
          className="  w-5/6 h-fit  flex flex-col-reverse md:flex-row md:px-14 my-20 justify-center items-center"
          id="containers1"
        >
          <div className=" w-full md:w-1/2" id="leftcont1">
            <img src={container1} alt="" />
          </div>
          <div
            className=" flex flex-col w-full md:w-1/2 p-4 py-0  "
            id="rightcont1"
          >
            <h3 className=" flex flex-row py-4 gap-2 font-semibold md:text-2xl items-center">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.9761" r="24" fill="#FF5555" />
                <path
                  d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Fully Customizable
            </h3>
            <p className="text-sm md:text-lg">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        {/* here container3 ends */}



        <div className=" flex flex-col items-center">
            <p  style={{ fontFamily : "ClashDisplay-Medium"}} className=" text-black" >TESTIMONIAL</p>
            <h1 className=" text-4xl text-center w-2/3" id="aboutus" >What's Our Users Say About Us</h1>
        </div>





        <div
          className="  w-5/6 h-fit  flex flex-col-reverse md:flex-row md:px-14 my-4 justify-center items-center"
          id="containers1"
        >
          <div className=" w-full md:w-1/2" id="leftcont1">
            <img src={lastcontainer} alt="" />
          </div>
          <div
            className=" flex flex-col w-full md:w-1/2 p-4 py-0  "
            id="rightcont1"
          >
            <h3 className=" flex md:text-2xl flex-row py-4 gap-2 font-semibold items-center">
            The Best Financial Accounting <br /> App Ever!
            </h3>
            <p className="text-sm md:text-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam."
            </p>

         <img className=" w-40 my-8" src={people} alt="" />
         
         <h1>Nick Jonas</h1>

          </div>
        </div>


      </div>
    </>
  );
}

export default Container;
