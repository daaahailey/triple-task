import { useEffect, useState } from 'react'

export const useCountUp = (num: number) => {
  const [count, setCount] = useState<number>(0)

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3)
  }

  useEffect(() => {
    let startTime: null | number = null
    const startAnimation = (timestamp: DOMHighResTimeStamp) => {
      const duration = 2000
      if (!startTime) {
        startTime = timestamp
      }
      const currentTime: number = timestamp - startTime
      const progress = (timestamp - startTime) / duration
      const countId = requestAnimationFrame(startAnimation)
      const value = easeOutCubic(progress)
      setCount(() => Math.round(count + (num - count) * value))
      if (currentTime >= duration) {
        cancelAnimationFrame(countId)
      }
    }
    const countId = requestAnimationFrame(startAnimation)
    return () => cancelAnimationFrame(countId)
  }, [num])

  return count
}
