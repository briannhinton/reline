
import React from 'react'
import Line from './Line'
import Icon from './Icon'
import createShapes from './create-shapes'

export { default as Line } from './Line'
export { default as Icon } from './Icon'
export { default as createShapes } from './create-shapes'

export const X = props => <Icon {...props} name='x' />
export const Plus = props => <Icon {...props} name='plus' />
export const Minus = props => <Icon {...props} name='minus' />
export const Chevron = props => <Icon {...props} name='chevron' />
export const Arrow = props => <Icon {...props} name='arrow' />
export const Triangle = props => <Icon {...props} name='triangle' />
export const Square = props => <Icon {...props} name='square' />
export const Diamond = props => <Icon {...props} name='diamond' />
export const Burger = props => <Icon {...props} name='burger' />

export default {
  Line,
  Icon,
  createShapes,
  X,
  Plus,
  Minus,
  Square,
  Diamond,
  Burger,
  Chevron,
  Arrow,
  Triangle
}

