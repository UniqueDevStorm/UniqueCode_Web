import React from "react";

interface UserProps {
    img: string
    Name: string
    Description: string
}

const User: React.FC<UserProps> = ({
    img,
    Name,
    Description
}) => {
    return (
        <div className='flex p-5'>
            <img
                src={img}
                style={{ borderRadius: '50px', boxShadow: '10px 10px 30px #74747429' }}
                className='h-24 w-24 sm:h-40 sm:w-40'
                alt={Name}
            />
            <div className='block font-thin mt-5 ml-5 sm:mt-10 sm:ml-10'>
                <h1 className='text-2xl sm:text-4xl'>{Name}</h1>
                <h2 className='text-xl sm:text-2xl sm:max-w-sm'>{Description}</h2>
            </div>
        </div>
    )
}

export default User;