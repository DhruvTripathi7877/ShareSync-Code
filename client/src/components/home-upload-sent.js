import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const HomeUploadSent = ({ data, onSendAnotherFile }) => {
  const to = _.get(data, "to");
  const postId = _.get(data, "_id");

  const handleViewFile = () => {
    window.location.href = `/share/${postId}`;
  };

  const handleSendAnotherFile = () => {
    if (onSendAnotherFile) {
      onSendAnotherFile(true);
    }
  };

  return (
    <div className="app-card app-card-upload-sent">
      <div className="app-card-content">
        <div className="app-card-content-inner">
          <div className="app-home-uploading">
            <div className="app-home-upload-sent-icon">
              <i className="icon-paperplane" />
            </div>
            <div className="app-upload-sent-message app-text-center">
              <h2>Files sent!</h2>
              <p>
                We have sent an email to {to} with a download link. The link will
                expire in 30 days.
              </p>
            </div>
            <div className="app-upload-sent-actions app-form-actions">
              <button
                onClick={handleViewFile}
                className="app-button primary"
                type="button"
              >
                Click here to view file and copy url
              </button>
              <button
                onClick={handleSendAnotherFile}
                className="app-button"
                type="button"
              >
                Send another file
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeUploadSent.propTypes = {
  data: PropTypes.object,
  onSendAnotherFile: PropTypes.func,
};

export default HomeUploadSent;
