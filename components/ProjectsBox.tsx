import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';

const Box = styled.div`
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
}

const ProjectBox: React.FC<ProjectProps> = ({
    img,
    name,
    description
}) => {
    return (
        <div>
            <Box className='flex items-center gap-10' style={{ borderRadius: '31px', width: '669px', height: '213px', boxShadow: '15px 15px 40px #ACACAC29' }}>
                <img src={img} alt={name} style={{ borderRadius: '31px 0 0 31px' }} width={213} height={213} />
                <div className='block font-thin'>
                    <h1 className='sm:text-5xl'>{name}</h1>
                    <h2 className='sm:text-2xl'>{description}</h2>
                </div>
            </Box>
        </div>
    )
}

export default ProjectBox;