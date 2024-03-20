import React,{Component} from 'react'
import Home from '../pages/home'
import View from '../pages/view'
// import {Router,Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from '../components/top-bar'

class Layout extends Component{


    constructor(props){
        super(props);

        this.state = {

            showLoginForm: false

        }
    }

    render(){
        return (
          <div className={"app-layout"}>
            <TopBar
              onShowLoginForm={() => {
                this.setState({
                  showLoginForm: true,
                });
              }}
            />

            <Router>
                <Routes>
                    <Route exact path={"/"} element={<Home/>} />
                    <Route exact path={"/share"} element={<View/>} />
                </Routes>
            </Router>

            {/* <Home/>
            <View/> */}

            <div className="site-slogan flex text-center text-sm mt-5 pl-5 pr-5">
              Note: First File Sharing Time Will Be Little Longer Because
              Backend Is Deployed On Free Version Of Render.Com Which Takes Time
              To Response To Very First Post Request
            </div>
          </div>
        );
    }
}

export default Layout;