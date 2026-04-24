import { GraduationCap } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div>
             <nav className=''>
            <div className='flex'>
                <div className=''>
                <GraduationCap className='w-8 h-8 bg-primary text-white rounded' />
            </div>
                <h1>CodeCraft Academy</h1>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;