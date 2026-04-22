import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-10 py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          Nationwide Coverage
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          We are available in all 64 districts across Bangladesh
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-xl mx-auto mb-8">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 transition"
        >
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input
            name="location"
            type="search"
            required
            placeholder="Search district..."
            className="flex-1 outline-none text-sm md:text-base text-gray-700 placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Map Container */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-[500px] md:h-[700px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker
              position={[center.latitude, center.longitude]}
              key={index}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">
                    {center.district}
                  </p>
                  <p className="text-gray-500 mt-1">
                    Service area: {center.covered_area.join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-gray-400 mt-6">
        Use the search bar to quickly navigate to your district
      </p>
    </div>
  );
};

export default Coverage;
