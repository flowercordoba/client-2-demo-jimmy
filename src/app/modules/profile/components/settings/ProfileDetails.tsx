import React from 'react';
import { KTIcon } from '../../../../../_metronic/helpers';
import ProfileActions from './ProfileActions';

const ProfileDetails: React.FC = () => {
  return (
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center mb-2">
            <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">
              Max Smith
            </a>
            <a href="#">
              <KTIcon iconName="verify" className="fs-1 text-primary" />
            </a>
            <button className="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3">
              Follow
            </button>
          </div>
          <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
              <KTIcon iconName="profile-circle" className="fs-4 me-1" />
              Developer
            </a>
            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
              <KTIcon iconName="geolocation" className="fs-4 me-1" />
              SF, Bay Area
            </a>
            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
              <KTIcon iconName="sms" className="fs-4 me-1" />
              max@kt.com
            </a>
          </div>
        </div>
        <ProfileActions />
      </div>
      <div className="d-flex flex-wrap flex-stack">
        <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
          <div className="d-flex justify-content-between w-100 mt-auto mb-2">
            <span className="fw-bold fs-6 text-gray-500">
              Profile Completion
            </span>
            <span className="fw-bolder fs-6">50%</span>
          </div>
          <div className="h-5px mx-3 w-100 bg-light mb-3">
            <div
              className="bg-success rounded h-5px"
              role="progressbar"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
