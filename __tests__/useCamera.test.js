import { renderHook } from '@testing-library/react-hooks'
import useCamera from '../src/useCamera'

describe('test useCamera hook', () => {
  test('should be initialized properly', () => {
    // arrangement
    const { result } = renderHook(() => useCamera(0))

    // action
    const dotScaleRatio1 = result.current.getDotScaleRatio(0)
    const dotScaleRatio2 = result.current.getDotScaleRatio(1)
    const dotScaleRatio3 = result.current.getDotScaleRatio(2)
    const dotScaleRatio4 = result.current.getDotScaleRatio(3)
    const dotScaleRatio5 = result.current.getDotScaleRatio(4)
    const dotScaleRatio6 = result.current.getDotScaleRatio(5)

    // assertion
    expect(dotScaleRatio1).toBe(1)
    expect(dotScaleRatio2).toBe(1)
    expect(dotScaleRatio3).toBe(1)
    expect(dotScaleRatio4).toBe(0.7)
    expect(dotScaleRatio5).toBe(0.4)
    expect(dotScaleRatio6).toBe(0)
  })

  test('should throw error when the given targetPosition is invalid', () => {
    // arrangement
    let targetPosition = null

    // action
    const { result } = renderHook(() => useCamera(targetPosition))

    // assertion
    expect(result.error).toEqual(Error('The first parameter - targetPos you passed in should be a number'))
  })

  test('forward movement', () => {
    // arrangement
    let targetPosition = 0
    const { result, rerender } = renderHook(() => useCamera(targetPosition))

    targetPosition = 5
    rerender()

    // action
    const dotScaleRatio1 = result.current.getDotScaleRatio(0)
    const dotScaleRatio2 = result.current.getDotScaleRatio(1)
    const dotScaleRatio3 = result.current.getDotScaleRatio(2)
    const dotScaleRatio4 = result.current.getDotScaleRatio(3)
    const dotScaleRatio5 = result.current.getDotScaleRatio(4)
    const dotScaleRatio6 = result.current.getDotScaleRatio(5)
    const dotScaleRatio7 = result.current.getDotScaleRatio(6)
    const dotScaleRatio8 = result.current.getDotScaleRatio(7)
    const dotScaleRatio9 = result.current.getDotScaleRatio(8)

    // assertion
    expect(dotScaleRatio1).toBe(0)
    expect(dotScaleRatio2).toBe(0.4)
    expect(dotScaleRatio3).toBe(0.7)
    expect(dotScaleRatio4).toBe(1)
    expect(dotScaleRatio5).toBe(1)
    expect(dotScaleRatio6).toBe(1)
    expect(dotScaleRatio7).toBe(0.7)
    expect(dotScaleRatio8).toBe(0.4)
    expect(dotScaleRatio9).toBe(0)
  })

  test('backward movement', () => {
    // arrangement
    let targetPosition = 6
    const { result, rerender } = renderHook(() => useCamera(targetPosition))

    targetPosition = 3
    rerender()

    // action
    const dotScaleRatio1 = result.current.getDotScaleRatio(0)
    const dotScaleRatio2 = result.current.getDotScaleRatio(1)
    const dotScaleRatio3 = result.current.getDotScaleRatio(2)
    const dotScaleRatio4 = result.current.getDotScaleRatio(3)
    const dotScaleRatio5 = result.current.getDotScaleRatio(4)
    const dotScaleRatio6 = result.current.getDotScaleRatio(5)
    const dotScaleRatio7 = result.current.getDotScaleRatio(6)
    const dotScaleRatio8 = result.current.getDotScaleRatio(7)
    const dotScaleRatio9 = result.current.getDotScaleRatio(8)

    // assertion
    expect(dotScaleRatio1).toBe(0)
    expect(dotScaleRatio2).toBe(0.4)
    expect(dotScaleRatio3).toBe(0.7)
    expect(dotScaleRatio4).toBe(1)
    expect(dotScaleRatio5).toBe(1)
    expect(dotScaleRatio6).toBe(1)
    expect(dotScaleRatio7).toBe(0.7)
    expect(dotScaleRatio8).toBe(0.4)
    expect(dotScaleRatio9).toBe(0)
  })

  test('should throw error if getDotScaleRate is being called with an invalid dot position', () => {
    // arrangement
    let targetPosition = 0

    // action
    const { result } = renderHook(() => useCamera(targetPosition))

    // assertion
    expect(() => {
      result.current.getDotScaleRatio(null)
    }).toThrow(Error('getDotScaleRatio() only takes a number as its first parameter'))
  })
})