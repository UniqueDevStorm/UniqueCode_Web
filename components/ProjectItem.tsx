import React from 'react'
import styled from 'styled-components'
import Button from './Button'

interface ProjectProps {
  img: string
  name: string
  description: string
  links: ProjectLink[]
}

interface ProjectLink {
  text: string
  color?: string
  dark?: boolean
  href: string
}

const Image = styled.img`
  box-shadow: 10px 10px 30px #58585829;
  border-radius: 55px;
  opacity: 1;
`

const ProjectItem: React.FC<ProjectProps> = ({
  img,
  name,
  description,
  links,
}) => {
  return (
    <div className='flex gap-6 md:gap-12 flex-col md:flex-row justify-center md:justify-start'>
      <Image src={img} alt='project image' className='w-48 mx-auto md:mx-0' />
      <div className='flex flex-col'>
        <span className='md:text-6xl text-4xl mx-auto md:mx-0'>{name}</span>
        <div className='text-xl md:text-2xl mx-auto md:mx-0 mt-2 md:mt-0'>
          {description}
        </div>
        <div className='flex-grow' />
        <div className='flex gap-2 mb-4 mx-auto md:mx-0 mt-2 md:mt-0 flex-col md:flex-row'>
          {links.map((x, i) => (
            <Button
              key={i}
              href={x.href}
              target='_blank'
              color={x.color}
              dark={x.dark}
              className='shadow-lg'
            >
              {x.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
