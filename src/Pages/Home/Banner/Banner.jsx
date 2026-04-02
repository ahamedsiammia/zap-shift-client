import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <div className='my-10'>
             <Carousel
            autoPlay={true}
            infiniteLoop={true}
         >
                <div>
                    <img src="https://i.ibb.co.com/k2MCJrPF/banner1.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/HLMNq6LG/banner2.png" />

                </div>
                <div>
                    <img src="https://i.ibb.co.com/390mNm0b/banner3.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;