'use client';

import AvatarImage from '../../../public/images/placeholder.jpg';

interface AvatarInterface {
  src: string;
}

const Avatar = () => {
  return (     
    <div className='rounded-full'>
        <img 
            className='rounded-full h-7 w-7'
            src={AvatarImage} 
            alt="Placeholder" 
        />
    </div>
  );
}
 
export default Avatar;
