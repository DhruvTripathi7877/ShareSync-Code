import React from "react";

import {useLocation} from 'react-router-dom';



const View = ()=> {
  const location = useLocation();

  const valueURL=location.state.url

  return (
    <div className="app-page-download pt-10 flex flex-col">
      <div className="app-top-header pt-10 pb-3 md:text-5xl text-2xl mt-10 md:mt-0 flex justify-center">
        <h1
          className="md:text-5xl text-3xl mt-0 md:mt-0 flex justify-center "
          // onClick={() => history.push("/")}
        >
          <i className="icon-paper-plane mr-2" /> ShareBuddy
        </h1>
      </div>
      <div className="app-card app-card-download justify-center">
        <div className="app-card-content">
          <div className="app-card-content-inner">
            <div className="app-download-icon">
              <i className="icon-download" />
            </div>
            <div className="app-download-message app-text-center">
              <h2>Ready to download</h2>
              <ul>
                {/* <li>{post.length} files</li> */}
                <li>{}</li>
                <li>Expires in 30 days</li>
              </ul>
            </div>
            <div className="app-download-file-list">
              <div className="app-download-file-list-item">
                <input readOnly className="linkUrl" value={`${valueURL.response}`} type="url"></input>
              </div>
            </div>
            <div className="app-download-actions app-form-actions">
              <button
                className="app-button primary"
                // onClick={() => copyToClipBoard(`${post.url}`)}
              >
                Click Here To Copy Url
              </button>
              <button
                // onClick={handleSendAnotherFile}
                className="app-button"
                type="button"
              >
                Send another file
              </button>
              <div className="app-download-message app-text-center">
                <h2>{}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
