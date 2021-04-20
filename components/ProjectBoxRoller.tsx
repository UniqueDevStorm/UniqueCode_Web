import React from 'react'

const ProjectBoxRoller: React.FC = ({ children }) => {
  if (!(children instanceof Array)) return

  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(
      () => setCurrent(children.length === current + 1 ? 0 : current + 1),
      4000
    )
    return () => clearTimeout(timer)
  }, [current, setCurrent])

  return <div>{children[current]}</div>
}

export default ProjectBoxRoller
