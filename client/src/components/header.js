import share from "./imgs/share.png"
import React from "react";

const Header = () => {
  return (
    <div className="app-header flex justify-center pt-10 ">
      <div className={"app-site-info"}>
        <div>
          <h1 className="md:text-5xl text-3xl mt-10 md:mt-0 flex justify-center ">
            <div className="mt-2 mr-2">
              <img src={share} alt="" />
            </div>
            ShareSync
          </h1>
        </div>

        <div className="site-slogan flex justify-center text-sm">
          ShareBuddy is in beta stage now!
        </div>
        <div className="site-slogan flex justify-center text-sm">
          Email Sharing Coming Soon!
        </div>
        <div className="site-slogan flex justify-center text-sm">
          Multi File Sharing Coming Soon!
        </div>

        <div className="site-title text-3xl">
          Share Your Files With ShareBuddy.
        </div>
      </div>
    </div>
  );
};

export default Header;
