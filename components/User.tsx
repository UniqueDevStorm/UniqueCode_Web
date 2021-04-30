import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UserProps {
    name: string
    description: string
    img: string,
    github: string
}

const User: React.FC<UserProps> = ({
    name,
    description,
    img,
    github
}) => {
    return (
        <div className='flex p-5'>
            <img
                src={img}
                style={{ borderRadius: '50px', boxShadow: '10px 10px 30px #74747429' }}
                className='h-24 w-24 sm:h-40 sm:w-40'
                alt={name}
            />
            <div className='block font-thin mt-1 ml-5 sm:mt-10 sm:ml-10'>
                <h1 className='text-2xl sm:text-4xl'>{name}</h1>
                <h2 className='text-xl sm:text-2xl sm:max-w-sm'>{description}</h2>
                <a href={`https://github.com/${github}/`} target='_blank'>
                    <FontAwesomeIcon
                        icon={['fab', 'github']}
                        className='text-2xl'
                    />
                </a>
            </div>
        </div>
    )
}

export default User;