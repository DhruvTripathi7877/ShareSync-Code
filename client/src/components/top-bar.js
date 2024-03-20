import React,{Component} from 'react'
import share from "./imgs/share.png"


export default class TopBar extends Component{



	render(){


		return (
      <div className="app-top-bar">
        <div className="app-top-bar-inner">
          <div className="app-top-bar-left justify-content">
						<div className="site-name pt-2 pl-4">
							<img src={share} alt="" />
              {/* <i className="icon-paper-plane" /> */}
            </div>
          </div>
          {/* <div className="flex-grow-0.5 pt-2 pl-2"> */}
            {/* <div className="flex justify-start text-center"> */}
              {/* <h2 className="font-mono">ShareBuddy is in beta stage!</h2> */}
              {/* <h3>You can send only single file for now</h3> */}
            {/* </div> */}
          {/* </div> */}
          <div className="app-top-bar-right">
            <div className="app-top-bar-right-inner">
              <div className="user-profile">
                {/* <div className="user-profile-picture">
                  <img
                    src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y"
                    alt="avatar"
                  />
                </div> */}
              </div>

              {/* <ul className="user-profile-menu">
                <li
                  onClick={() => {
                    if (this.props.onShowLoginForm) {
                      this.props.onShowLoginForm(true);
                    }
                  }}
                  className="user-signin-button"
                >
                  Sign in
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
	}
}