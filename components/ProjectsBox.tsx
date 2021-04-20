import React from "react";

interface ProjectProps {
    img: string
    name: string
    description: string
}

const ProjectBox: React.FC<ProjectProps> = ({
    img,
    name,
    description
}) => {
    return (
        <div>
            <div className='flex items-center gap-10' style={{ borderRadius: '31px', width: '669px', height: '213px', boxShadow: '15px 15px 40px #ACACAC29' }}>
                <img src={img} alt={name} style={{ borderRadius: '31px 0 0 31px' }} width={213} height={213} />
                <div className='block font-thin'>
                    <h1 className='sm:text-5xl'>{name}</h1>
                    <h2 className='sm:text-2xl'>{description}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;