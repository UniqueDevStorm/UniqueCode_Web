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
                height={170}
                width={170}
            />
            <div className='block font-thin mt-10 ml-10'>
                <h1 className='text-4xl'>{Name}</h1>
                <h2 className='text-2xl sm:max-w-sm'>{Description}</h2>
            </div>
        </div>
    )
}

export default User;