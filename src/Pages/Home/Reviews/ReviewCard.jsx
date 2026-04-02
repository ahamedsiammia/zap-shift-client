import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName,user_email,user_photoURL,review:description}=review;
    return (
            <div className=" my-24 ">
      <div className="card bg-base-100 shadow-xl max-w-md w-full rounded-3xl ">
        <div className="card-body space-y-6">

          {/* Quote Icon */}
          <FaQuoteLeft className="text-4xl text-primary " />

          {/* Description */}
          <p className="">
            {description}
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-base-300"></div>

          {/* User Info */}
          <div className="md:flex items-center gap-4 pt-2">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12">
                <img src={user_photoURL} alt="" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-base-content">
                {userName}
              </h4>
              <p className="text-sm text-base-content/60">
                {user_email}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    );
};

export default ReviewCard;