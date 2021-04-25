import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';

const Box = styled.a`
  ${tw`transition-all ease-in-out`}
  user-select: none;
  &:hover {
    transform: scale(1.05)
  }
  &:active {
    transform: scale(1)
  }
`

interface ProjectProps {
    img: string
    name: string
    description: string
    url: string
}

const ProjectBox: React.FC<ProjectProps> = ({
    img,
    name,
    description,
    url
}) => {
    return (
        <div>
            <Box className='flex items-center gap-4 sm:gap-10 w-80 h-24 sm:w-669 sm:h-213' style={{ borderRadius: '31px', boxShadow: '15px 15px 40px #ACACAC29' }} href={url} target='_blank'>
                <img src={img} alt={name} style={{ borderRadius: '31px 0 0 31px' }} className='w-24 h-24 sm:w-213 sm:h-213' width={213} height={213} />
                <div className='block font-thin'>
                    <h1 className='text-xl sm:text-5xl'>{name}</h1>
                    <h2 className='text-sm sm:text-2xl'>{description}</h2>
                </div>
            </Box>
        </div>
    )
}

export default ProjectBox;