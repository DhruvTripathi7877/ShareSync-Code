import React, { useState,useEffect } from "react";
import { getSignedUrl,uploadFile } from './services/api';
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';

// import { upload } from "../helpers/upload";
import PropTypes from "prop-types";

const HomeForm = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');
  const [imageName, setImageName] = useState('');
  const navigate = useNavigate()



  useEffect(()=>{
        const getData = async () =>{
          const op = `image-${Date.now()}`

          setImageName(op)

          const data = {
            imageName:op,
          }
          const response = await getSignedUrl(data);

          setUrl(response.url);
        }
        getData()
  },[])

  const dataPassToView = (response)=>{
    navigate("/share",{state:{url:{response}}});
  }

  const getImage = async () => {
    if (file) {
      const data = {
        imageName:imageName,
      }
      // console.log("Fuck File ",file)
      const response = await uploadFile(url, file, data)

      if (response)
      {
        dataPassToView(response)
      }
    }
  }

  return (
    <div className={"app-card"}>
      <form>
        <div className={"app-card-header "}>
          <div className={"app-card-header-inner"}>
            {file ? (
              <div className={"app-files-selected"}>
                  <div className={"app-files-selected-item"}>
                    <div className={"filename"}>{file.name}</div>
                    <div className={"file-action"}>
                      <button
                        // onClick={() => _onFileRemove(index)}
                        type={"button"}
                        className={"app-file-remove"}
                      >
                        X
                      </button>
                    </div>
                  </div>
                
              </div>
            ) : null
            }
            <div
              className={classNames("app-file-select-zone")}
            >
              <label htmlFor={"input-file"}>
                <input
                  onChange={(e)=> setFile(e.target.files[0])}
                  id={"input-file"}
                  type="file"
                  multiple={true}
                />
                {file ? (
                  <span className={"app-upload-description text-uppercase"}>
                    Add more files
                  </span>
                ) : (
                  <span>
                    <span className={"app-upload-icon"}>
                      <i className={"icon-picture-streamline"} />
                    </span>
                    <span className={"app-upload-description"}>
                      <span role="img" aria-label="attach">
                        🔗
                      </span>{" "}
                      Click here to select file!
                    </span>
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>
        <div className={"app-card-content"}>
          <div className={"app-card-content-inner"}>
            <div className={"app-form-actions"}>
              <button type={"button"} className={"app-button primary"} onClick={getImage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

HomeForm.propTypes = {
  onUploadBegin: PropTypes.func,
  onUploadEvent: PropTypes.func,
};

export default HomeForm;