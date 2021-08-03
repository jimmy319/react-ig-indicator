import React from 'react'
import { render } from '@testing-library/react'

import Indicator from '../src/Indicator'
import useCamera from '../src/useCamera'

jest.mock('../src/useCamera.js')
useCamera.mockImplementation(() => ({
  getDotScaleRatio: jest.fn().mockReturnValue(1)
}))

describe('test Indicator component', () => {
  test('should properly render component', () => {
    // arrangement
    const props = {
      totalAmount: 10,
      activeIndex: 2,
      dotSize: 7,
      dotColor: 'rgb(1, 1, 1)',
      activeDotColor: 'rgb(34, 34, 34)',
      dotSpacing: 10,
      wrapperStyleClass: 'custom-indicator'
    }

    // action
    const { container } = render(<Indicator {...props} />)

    // assertion
    const wrapperElement = container.querySelector('.custom-indicator')
    const dotElements = container.querySelectorAll('.custom-indicator > div')
    expect(wrapperElement).not.toEqual(null)
    expect(dotElements.length).toEqual(props.totalAmount)

    for (let i = 0; i < props.totalAmount;i++) {
      // prop - dotSpacing
      if (i === 0) {
        expect(dotElements[i].style['margin-left']).toEqual('0px')
      } else {
        expect(dotElements[i].style['margin-left']).toEqual('10px')
      }

      // prop - dotColor and activeDotColor
      if (i === props.activeIndex) {
        expect(dotElements[i].style['background-color']).toEqual(props.activeDotColor)
      } else {
        expect(dotElements[i].style['background-color']).toEqual(props.dotColor)
      }

      // prop - dotSize
      expect(dotElements[i].style['width']).toEqual(`${props.dotSize}px`)
      expect(dotElements[i].style['height']).toEqual(`${props.dotSize}px`)
    }
  })

  test('should render nothing when the required parameter - totalAmount passed in is invalid', () => {
    // arrangement
    const invalidProps1 = {
      totalAmount: null,
      wrapperStyleClass: 'custom-indicator'
    }
    const invalidProps2 = {
      totalAmount: -99,
      wrapperStyleClass: 'custom-indicator'
    }

    // action
    const { container: container1 } = render(<Indicator {...invalidProps1} />)
    const { container: container2 } = render(<Indicator {...invalidProps2} />)

    // assertion
    const wrapperElement1 = container1.querySelector('.custom-indicator')
    const wrapperElement2 = container2.querySelector('.custom-indicator')
    expect(wrapperElement1).toEqual(null)
    expect(wrapperElement2).toEqual(null)
  })
})
