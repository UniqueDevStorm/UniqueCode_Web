import React from "react";

interface UserProps {
    Name: string,
    Description: string
}

const User: React.FC<UserProps> = ({
    Name,
    Description
}) => {
    return (
        <div className='flex'>
            <img
                src={`/Users/${Name}.png`}
                style={{ borderRadius: '50px', boxShadow: '10px 10px 30px #74747429' }}
                className='h-32 w-32 sm:h-40 sm:w-40'
            />
            <div className='block font-thin mt-5 ml-5 sm:mt-10 sm:ml-10'>
                <h1 className='text-2xl sm:text-4xl'>{Name}</h1>
                <h2 className='text-xl sm:text-2xl sm:max-w-sm'>{Description}</h2>
            </div>
        </div>
    )
}

export default User;