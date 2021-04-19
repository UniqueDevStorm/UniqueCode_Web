import React from 'react'
import styled from 'styled-components'

interface ProjectProps {
  img: string
  name: string
  description: string
}

const Image = styled.img`
  box-shadow: 10px 10px 30px #58585829;
  border-radius: 55px;
  opacity: 1;
`

const ProjectItem: React.FC<ProjectProps> = ({ img, name, description }) => {
  return (
    <div className='flex gap-12'>
      <Image src={img} alt='project image' className='w-48' />
      <div>
        <span className='text-6xl'>{name}</span>
        <div className='text-2xl'>{description}</div>
      </div>
    </div>
  )
}

export default ProjectItem
