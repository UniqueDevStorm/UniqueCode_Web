import React from 'react'

const ProjectBoxRoller: React.FC = ({ children }) => {
  if (!(children instanceof Array)) return
  return (
    <div>
      {children.map((x, y) => (
        <div key={y}>
          {y}
          {x}
        </div>
      ))}
    </div>
  )
}

export default ProjectBoxRoller
