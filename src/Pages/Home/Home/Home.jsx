import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import Service from '../Service/Service';
import Brand from '../Brand/Brand';
import ContactSection from '../ContactSection';
import Reviews from '../Reviews/Reviews';

    const reviewsPromise = fetch("/reviews.json").then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Service></Service>
            <Brand></Brand>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <ContactSection ></ContactSection>
        </div>
    );
};

export default Home;