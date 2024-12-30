import React from 'react';
import HomeBanner from '../components/homeBanner/HomeBanner';
import Catagory from '../components/category/Catagory';
import PopularMenu from '../components/homeBanner/PopularMenu';
import Featured from '../components/homeBanner/Featured';
import Testimonials from '../components/homeBanner/Testimonials';

const Home = () => {
    return (
        <div>
             <HomeBanner></HomeBanner>
             <Catagory></Catagory>
             <PopularMenu></PopularMenu>
             <Featured></Featured>
             <Testimonials></Testimonials>
        </div>
    );
};

export default Home;