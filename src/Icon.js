
import React from 'react'
import Line from './Line'
import createShapes from './create-shapes'

const getDirection = (props) => Object.keys(props).reduce((a, b) => a || (props[b] ? b : null), null)

const getShape = strokeWidth => ({
  name,
  up,
  down,
  left,
  right
}) => {
  const shapes = createShapes(strokeWidth)
  const direction = getDirection({ up, down, left, right }) || 'right'
  if (!shapes[name]) {
    return shapes.x
  }

  return shapes[name][direction] || shapes[name]
}

const Icon = ({
  name = 'x',
  up,
  down,
  left,
  right,
  ...props
}) => {
  const shape = getShape(props.strokeWidth)({ name, up, down, left, right })

  return (
    <Line {...props}
      paths={shape} />
  )
}

export default Icon

