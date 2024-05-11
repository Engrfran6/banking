'use client'
import { useCountUp } from 'use-count-up'

const AnimatedCounter = ({amount}:{amount:number}) => {
  const { value } = useCountUp({
    isCounting: true,
    end: amount,
    duration: 3.2,
    decimalPlaces:2
  })



  return value
}
export default AnimatedCounter