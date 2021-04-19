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
    <div className='flex gap-12'>
      <Image src={img} alt='project image' className='w-48' />
      <div className='flex flex-col'>
        <span className='text-6xl'>{name}</span>
        <div className='text-2xl'>{description}</div>
        <div className='flex-grow' />
        <div className='flex gap-2'>
          {links.map((x, i) => (
            <Button
              key={i}
              href={x.href}
              target='_blank'
              color={x.color}
              dark={x.dark}
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
