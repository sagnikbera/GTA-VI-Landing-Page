import React, { useState } from "react";
import gsap from "gsap"; // for GSAP
import { useGSAP } from "@gsap/react"; // for GSAP
import "remixicon/fonts/remixicon.css"; //icons

const App = () => {
  let [showContent, setShowContent] = useState(false);

  // GSAP animation - loading screen
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  //GSAP animation - girl movement
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.9,
      x: "-50%",
      bottom: "-55%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    console.log(document.querySelector(".main"));
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  //Core part
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* top-navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* //images - sky - building - girl */}
            <div className="imagesDiv relative w-full h-screen overflow-hidden">
              //sky
              <img
                className="sky absolute top-0 left-0 w-full h-full object-cover origin-top scale-[1.5] rotate-[-20deg]"
                src="./sky.png"
                alt="layer1"
              />
              {/* //house and tree */}
              <img
                className="bg absolute top-0 left-0 w-full h-full object-cover origin-top scale-[1.8] rotate-[-25deg]"
                src="./bg.png"
                alt="layer0"
              />
              {/* texts */}
              <div className="text absolute top-20 left-1/2 -translate-x-1/2 flex flex-col gap-4">
              
                <h1 className="text-9xl text-white -ml-30 drop-shadow-[0_0_10px_black]">
                  grand
                </h1>
                <h1 className="text-9xl text-white ml-30 drop-shadow-[0_0_10px_black]">
                  theft
                </h1>
                <h1 className="text-9xl text-white -ml-30 drop-shadow-[0_0_10px_black]">
                  auto
                </h1>
              </div>
              {/* //girl */}
              <img
                className="character absolute -bottom-[75%] left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-10deg]"
                src="./girlbg.png"
                alt="girl"
              />
            </div>
            {/* bottom-navbar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-circle-fill"></i>
                <h3 className="text-2xl">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="page2 w-full h-screen flex px-10 bg-black items-center justify-center">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg w-1/2 h-full relative">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>

              <div className="rimg w-[40%]">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <div className="mt-10 font-mono text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  minima earum a doloribus doloremque! Numquam dolore
                  dignissimos, nostrum ea consequatur suscipit ut ipsa quasi
                  reiciendis maiores, adipisci tempora rerum porro.
                </div>
                <div className="mt-10 font-mono text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  corrupti tempora quae.
                </div>

                <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>

          <div className="page3 w-full bg-black h-[8vh]"></div>
        </div>
      )}
    </>
  );
};

export default App;
