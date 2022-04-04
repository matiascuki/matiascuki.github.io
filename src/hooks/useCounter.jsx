import { useEffect, useState } from 'react'
import getRandomInt from './getRandomInt'

export default function useCounter() {
    const [timeLeft, setTimeLeft] = useState(getRandomInt(49,60))

    useEffect(() => {
        if (!timeLeft) return
        const timerId = setInterval(() => {
            //happens every 1000ms
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [timeLeft])
    return {
        timeLeft, setTimeLeft
    }
}