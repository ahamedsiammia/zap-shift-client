import React from "react";

const Team = () => {
  return (
    <div className="bg-white p-15 rounded-2xl my-10">
      <h1 className="font-extrabold text-xl mb-5">Team & Other</h1>
      <p>
        Zap-Shift – Parcel Delivery Service
        <ol>
            <h1 className="font-bold">Service Use</h1>
          <li>
            By using our application, you agree to follow our rules and
            policies.
          </li>
            <h1 className="font-bold">Correct Information</h1>
          <li>Customers must provide accurate pickup and delivery details. We are not responsible for wrong addresses.</li>
          <h1 className="font-bold">Prohibited Items</h1>
          <li>We do not deliver illegal items, explosives, drugs, weapons, or hazardous materials.</li>

          <h1 className="font-bold">Packaging Responsibility</h1>
          <li>Customers must properly pack parcels. We are not responsible for damage caused by poor packaging.</li>

          <h1 className="font-bold">Delivery Time</h1>
          <li>Delivery time is estimated. Delays may happen due to traffic, weather, or other issues.</li>

          <h1 className="font-bold">Payments</h1>
          <li>All delivery charges must be paid before dispatch unless Cash on Delivery is selected.</li>

          <h1 className="font-bold">Cancellation</h1>
          <li>Orders can be cancelled before dispatch. No refund after shipment is sent.</li>

          <h1 className="font-bold">Liability</h1>
          <li>Our responsibility is limited to the delivery charge or declared parcel value.</li>

          <h1 className="font-bold">Privacy</h1>
          <li>Customer information is kept secure and not shared without permission.</li>
        </ol>
        
      </p>
    </div>
  );
};

export default Team;
