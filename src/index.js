import './polyfills'
import 'd3-transition'
import { select } from 'd3-selection'

import { GraphManager } from './Graph'
import { colors } from './const'
import { Generator } from './player/'
import { GraphRenderer } from './GraphRenderer'
import { createId } from './utils'

const instances = []

function greuler(options) {
  const el = select(options.target)
  let id = el.attr('greuler-id')
  if (!id) {
    id = createId()
    el.attr('greuler-id', id)
    instances[id] = new GraphRenderer(id, options)
  }
  return instances[id]
}

greuler.Graph = GraphManager
greuler.colors = colors
greuler.Generator = Generator

export default greuler
