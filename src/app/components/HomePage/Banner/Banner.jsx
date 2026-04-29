
import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div className='mt-10 w-10/12 mx-auto'>
            <div className='custom-shadow'>
                <Image src="/images/banner-hero-2.png" alt='banner' width={600} height={600} className='w-full'></Image>
            </div>
        </div>
    );
};

export default Banner;