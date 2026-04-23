import React from "react";

const Service = () => {
  const data = [
    {
      title: "Express  & Standard Delivery",
      description:"We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    },
    {
      title: "Nationwide Delivery",
      description:"We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    },
    {
      title: "Fulfillment Solution",
      description:"We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    },
    {
      title: "Cash on Home Delivery",
      description:"100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:"Customized corporate services which includes warehouse and inventory management support.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    },
    {
      title: "Parcel Return",
      description:"Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      image: "https://i.ibb.co.com/JWNfVHM3/service.png",
    }
  ];

  return (
    <div className="bg-secondary rounded-2xl md:p-20 p-10">
      <div className="text-white text-center ">
        <h1 className="text-2xl font-bold">Our Service</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5 ">
        {data.map((singleData,index) =>
            <div key={index} className="bg-white rounded-2xl text-center hover:bg-primary p-5 ">
               <div className="flex justify-center  hover-3d">
                 <img className="h-40px w-40px bg-gray-300 rounded-full p-5 mt-5" src={singleData.image} alt="" />
               </div>
                <p className="font-bold my-5">{singleData.title}</p>
                <p className="my-5">{singleData.description}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Service;
