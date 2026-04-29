
import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='border'>
                <Image src="/images/banner-1.jpg" alt='banner' width={600} height={600}></Image>
            </div>
        </div>
    );
};

export default Banner;