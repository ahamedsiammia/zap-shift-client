
const HowItWork = () => {
   const data =[
  {
    "title": "Booking Pick & Drop",
    "description": "From personal packages to business shipments — we deliver on time, every time.",
    "image": "https://i.ibb.co.com/SwYcF6nF/booking-Icon.png"
  },
  {
    "title": "Cash On Delivery",
    "description": "From personal packages to business shipments — we deliver on time, every time.",
    "image": "https://i.ibb.co.com/SwYcF6nF/booking-Icon.png"
  },
  {
    "title": "Delivery Hub",
    "description": "From personal packages to business shipments — we deliver on time, every time.",
    "image": "https://i.ibb.co.com/SwYcF6nF/booking-Icon.png"
  },
  {
    "title": "Booking SME & Corporate",
    "description": "From personal packages to business shipments — we deliver on time, every time.",
    "image": "https://i.ibb.co.com/SwYcF6nF/booking-Icon.png"
  }
]
    return (
       <div className='max-w-6xl mx-auto my-20'>
        <h1 className='font-bold text-3xl'>How it Work</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
          { data.map(singleData =>
         
            <div className=' p-5 rounded-2xl bg-white '>
                <img src={singleData.image} alt="" />
            <p className='font-bold mt-3 mb-3'>{singleData.title}</p>
            <p>{singleData.description}</p>
            </div>
           ) }
        </div>
       </div>
    );
};

export default HowItWork;