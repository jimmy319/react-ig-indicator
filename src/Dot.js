import React from 'react'

const Dot = ({ size, position, color, scaleRatio, spacing }) => {
  const actualSize = size * scaleRatio

  const styles = {
    boxSizing: 'border-box',
    transition: 'all 0.2s',
    borderRadius: '100%',
    width: `${actualSize}px`,
    height: `${actualSize}px`,
    backgroundColor: color,
    marginLeft: scaleRatio === 0 || position === 0 ? 0 : `${spacing}px`
  }

  return <div style={styles} />
}

export default Dot
