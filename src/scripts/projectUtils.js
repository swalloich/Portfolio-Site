import { useState, useEffect } from 'react'

class Breakpoint {
  constructor(value, name) {
    this.value = value
    this.name = name
  }

  gt(other) {
    if (other instanceof Breakpoint) {
      return this.value > other.value
    } else if (typeof other === 'number' || other instanceof Number) {
      return this.value > other
    } else {
      throw new TypeError('Breakpoint.gt() requires a Breakpoint or Number')
    }
  }

  gte(other) {
    if (other instanceof Breakpoint) {
      return this.value >= other.value
    } else if (typeof other === 'number' || other instanceof Number) {
      return this.value >= other
    } else {
      throw new TypeError('Breakpoint.gte() requires a Breakpoint or Number')
    }
  }

  lt(other) {
    if (other instanceof Breakpoint) {
      return this.value < other.value
    } else if (typeof other === 'number' || other instanceof Number) {
      return this.value < other
    } else {
      throw new TypeError('Breakpoint.lt() requires a Breakpoint or Number')
    }
  }

  lte(other) {
    if (other instanceof Breakpoint) {
      return this.value <= other.value
    } else if (typeof other === 'number' || other instanceof Number) {
      return this.value <= other
    } else {
      throw new TypeError('Breakpoint.lte() requires a Breakpoint or Number')
    }
  }

  eq(other) {
    if (other instanceof Breakpoint) {
      return this.value === other.value
    } else if (typeof other === 'number' || other instanceof Number) {
      return this.value === other
    } else { 
      throw new TypeError('Breakpoint.eq() requires a Breakpoint or Number')
    }
  }
}

const widthBreakpoints = {
  xs: new Breakpoint(0, 'xs'),
  sm: new Breakpoint(576, 'sm'),
  md: new Breakpoint(768, 'md'),
  lg: new Breakpoint(992, 'lg'),
  xl: new Breakpoint(1200, 'xl'),
  xxl: new Breakpoint(1400, 'xxl'),
}

const useViewportWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [breakpoint, setBreakpoint] = useState()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let greatest = widthBreakpoints.xs
    Object.entries(widthBreakpoints).forEach(([key, value]) => {
      if (value.lte(width) && value.gt(greatest)) {
        greatest = value
      }
    })
    setBreakpoint(greatest)
  }, [width])

  return breakpoint;
}

/**
 * A hook to facilitate responsive design
 * @returns - The atWidth function
 */
const useDeviceWidth = () => {
  const currentWidth = useViewportWidth()

  /**
   * Takes any combination of Breakpoint keys and values and returns the value at the current breakpoint
   * @param {object} values - An object with Breakpoint keys and values
   * @param {*} values.default - (Required) The default value
   * @param {*} values.sm - The value at the small breakpoint
   * @param {*} values.md - The value at the medium breakpoint
   * @param {*} values.lg - The value at the large breakpoint
   * @param {*} values.xl - The value at the extra large breakpoint
   * @param {*} values.xxl - The value at the extra extra large breakpoint
   * @returns {*} - The value at the current breakpoint
   */
  const atWidth = (values) => {
    if (currentWidth) {
      const breakpoints = Object.keys(values).filter(key => key !== 'default')
      let selectedBreakpoint = breakpoints.includes('sm') ? 'xs' : 'default'

      for (const breakpoint of breakpoints) {
        if (widthBreakpoints[breakpoint].lte(currentWidth)) {
          if (selectedBreakpoint === 'default' || widthBreakpoints[selectedBreakpoint].lt(widthBreakpoints[breakpoint])) {
            selectedBreakpoint = breakpoint
          }
        }
      }
      return values[selectedBreakpoint]
    } else {
      return values.default
    }
  }

  return { atWidth, currentWidth}
}

export default useDeviceWidth
export { Breakpoint, useViewportWidth }
