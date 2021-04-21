import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group';

const TIMEOUT = 500

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transition: `all ${TIMEOUT}ms ease-in-out`,
  },
  entered: {
    transition: `all ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
}

const ProjectBoxRoller: React.FC = ({ children }) => {
  if (!(children instanceof Array)) return

  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(
      () => setCurrent(children.length === current + 1 ? 0 : current + 1),
      2000
    )
    return () => clearTimeout(timer)
  }, [current, setCurrent])

  return (
    <div>
      <TransitionGroup
        style={{
          position: 'relative',
        }}
      >
        <Transition
          key={current}
          timeout={{
            exit: TIMEOUT,
            enter: TIMEOUT,
          }}
        >
          {(status) => (
            <div style={{ ...getTransitionStyles[status] }}>
              {children[current]}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </div>
  )
}

export default ProjectBoxRoller
