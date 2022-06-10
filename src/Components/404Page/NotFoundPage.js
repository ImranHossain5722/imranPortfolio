import React from 'react';
import error from "../../Assets/images/404Error.png";

const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div style={{
      background:`url(${error})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat",
      width:'550px'
    }} 
            className='h-screen w-full flex justify-center items-center'>
                    {/* <h1 className='text-3xl font-bold '> Notthing Found 404 </h1> */}
            </div>
        </div>
    );
};

export default NotFoundPage ;