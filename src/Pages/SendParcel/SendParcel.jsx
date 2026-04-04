import React from "react";
import { set, useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicat = serviceCenters.map((c) => c.region);
  const region = [...new Set(regionsDuplicat)];

  const senderRegion = useWatch({control,name:"senderRegion"});
  const receiverRegion = useWatch({control,name:"receiverRegion"})

  const districtByRegion =(region)=>{
    const regionDistricts = serviceCenters.filter( c => c.region === region);
    const district = regionDistricts.map(d => d.district);
    // console.log(district);
    return district;
  }
  const hanldeSendParcel = (data) => {
      
      console.log(data);
      const isDocument = data.type === "document";
    const isSameDistricts = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.weight)

    let cost = 0;
    if(isDocument){
        cost = isSameDistricts ? 60 : 80 ;
    }
    else{
        if(parcelWeight < 3){
            cost = isSameDistricts ? 110 : 150;
        }
        else{
            const minCharge = isSameDistricts ? 110 : 150 ;
            const extraWeight = parcelWeight - 3 ;
            const extraCharge = isSameDistricts ? extraWeight*40 : extraWeight*40+40;
            cost = minCharge + extraCharge;
        }
    }

        Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree!"
    }).then((result) => {
      if (result.isConfirmed) Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    });

    console.log(cost);
  };

  return (
    <div className=" my-5 p-10 bg-white rounded-xl shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Send A Parcel</h1>
      <p className="text-gray-500 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(hanldeSendParcel)} className="space-y-6">
        {/* parcel type */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("type")}
              className="accent-lime-500"
            />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("type")}
              className="accent-gray-400"
            />
            Not-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Parcel Name</label>
            <input
              {...register("parcelName", { required: true })}
              type="text"
              placeholder="Parcel Name"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Parcel Weight (KG)</label>
            <input
              {...register("weight", { required: true })}
              type="number"
              placeholder="Parcel Weight (KG)"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>
        </div>

        {/* two column */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* sender details */}
          <div className="space-y-3">
            <h2 className="font-semibold">Sender Details</h2>

            <div>
              <label className="text-sm">Sender Name</label>
              <input {...register("senderName")} className="input-style mt-1" />
            </div>

            <div>
              <label className="text-sm">Address</label>
              <input
                {...register("senderAddress")}
                className="input-style mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Phone Number</label>
              <input
                {...register("senderPhone")}
                className="input-style mt-1"
              />
            </div>
            {/* sender region */}
            <div>
              <label className="text-sm">Region</label>
              <select
                {...register("senderRegion")}
                className="input-style mt-1"
              >
                <option value="">Select your Region</option>
                {region.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </div>

            {/* sender district  */}
            <div>
              <label className="text-sm">District</label>
              <select
                {...register("senderDistrict")}
                className="input-style mt-1" 
              >
                <option  value="">Select your District</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </div>



            <div>
              <label className="text-sm">Pickup Instruction</label>
              <textarea
                {...register("pickupInstruction")}
                className="input-style mt-1 h-20"
              />
            </div>
          </div>

          {/* receiver details */}
          <div className="space-y-3">
            <h2 className="font-semibold">Receiver Details</h2>

            <div>
              <label className="text-sm">Receiver Name</label>
              <input
                {...register("receiverName")}
                className="input-style mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Address</label>
              <input
                {...register("receiverAddress")}
                className="input-style mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Phone Number</label>
              <input
                {...register("receiverPhone")}
                className="input-style mt-1"
              />
            </div>
                {/* receiver regions  */}
            <div>
              <label className="text-sm">Regions</label>
              <select
                {...register("receiverRegion")}
                className="input-style mt-1"
              >
                <option value="">Select your district</option>
                {
                    region.map((r,i)=><option key={i} value={r}>{r}</option>)
                }
              </select>
            </div>

            {/* receiver district  */}
            <div>
              <label className="text-sm">District</label>
              <select
                {...register("receiverDistrict")}
                className="input-style mt-1" 
              >
                <option  value="">Select your District</option>
                {districtByRegion(receiverRegion).map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </div>


            <div>
              <label className="text-sm">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction")}
                className="input-style mt-1 h-20"
              />
            </div>
          </div>
        </div>

        {/* note */}
        <p className="text-sm text-gray-500">
          * Pickup Time 4pm-7pm Approx.
          {/* {
            new Date().toLocaleTimeString()
          } */}
        </p>

        {/* button */}
        <button className="bg-lime-400 hover:bg-lime-500 px-6 py-2 rounded-lg font-medium">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
