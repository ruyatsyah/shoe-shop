'use client';

import AvatarImage from '../../../public/images/placeholder.jpg';

interface AvatarInterface {
  src: string;
}

const Avatar = () => {
  return (     
    <div className='h-8 w-8'>
        <img src={AvatarImage} alt="Placeholder" />
    </div>
  );
}
 
export default Avatar;
