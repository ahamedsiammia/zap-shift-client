import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Rider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const {user}=useAuth()

  const serviceCenters = useLoaderData();
  const regionsDuplicat = serviceCenters.map((c) => c.region);
  const region = [...new Set(regionsDuplicat)];

  const senderRegion = useWatch({ control, name: "region" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const district = regionDistricts.map((d) => d.district);
    // console.log(district);
    return district;
  };

  const onSubmit = (data) => {
    console.log("Rider Data:", data);
    axiosSecure.post("/riders", data)
    .then((res) => {
        console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your Application has been submitted.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="p-6 md:p-12 bg-white text-[#1a3a3a] my-5 rounded-xl">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Be a Rider</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Tell us about yourself
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Row: Name & License */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none transition"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Driving License Number
                </label>
                <input
                  {...register("license", { required: "License is required" })}
                  placeholder="Driving License Number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input value={user.email} 
                readOnly
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none transition"
              />
            </div>

            {/* Region & District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Region</label>
                <select {...register("region")} className="input-style mt-1">
                  <option value="">Select your Region</option>
                  {region.map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm">District</label>
                <select {...register("district")} className="input-style mt-1">
                  <option value="">Select your District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* NID & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">NID No</label>
                <input
                  {...register("nid")}
                  placeholder="NID"
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
            </div>

            {/* Bike Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bike Brand Model and Year
                </label>
                <input
                  {...register("bikeModel")}
                  placeholder="Bike Brand Model and Year"
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bike Registration Number
                </label>
                <input
                  {...register("bikeReg")}
                  placeholder="Bike Registration Number"
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
            </div>

            {/* About Yourself */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Tell Us About Yourself
              </label>
              <textarea
                {...register("about")}
                rows="3"
                placeholder="Tell Us About Yourself"
                className="w-full p-3 border border-gray-200 rounded-lg outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#cdec6d] hover:bg-[#b8d956] text-[#1a3a3a] font-bold rounded-lg transition duration-300 shadow-sm"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Illustration Section */}
        <section className="hidden lg:flex justify-center items-center pt-20">
          <img
            src="https://i.ibb.co.com/Kp5VJj95/rider.jpg" // Replace with your actual image path
            alt="Rider Illustration"
            className="w-full object-contain"
          />
        </section>
      </div>
    </div>
  );
};

export default Rider;
