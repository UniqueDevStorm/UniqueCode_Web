import React from 'react'
import styled from 'styled-components'

interface ProjectProps {
  img: string
}

const Image = styled.img`
  box-shadow: 10px 10px 30px #58585829;
  border-radius: 55px;
  opacity: 1;
`

const ProjectItem: React.FC<ProjectProps> = ({ img }) => {
  return (
    <div>
      <Image src={img} alt='project image' />
    </div>
  )
}

export default ProjectItem
