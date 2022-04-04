import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useCounter from 'hooks/useCounter'
import './TheButton.css'
import getRandomInt from 'hooks/getRandomInt'

// this component needs a refactor 
export default function TheButton() {
    const [clicks, setClicks] = useState(9899)
    const [clicked, setClicked] = useState(false)

    // get the timer from the useCounter hook
    const timer = useCounter();
    const userTime = timer.timeLeft


    useEffect(() => {
        // checking if the user is defined and clicked
        const user = window.localStorage.getItem('user')
        if (user !== null && user !== undefined) {
            const userInfo = JSON.parse(user)
            setClicks(userInfo.clicks)
            setClicked(userInfo.clicked)
        }
    }, []);

    useEffect(() => {
        const randomTimer = setInterval(() => {
            // setting a random interval to simulate a click
            timer.setTimeLeft(60)
            const user = window.localStorage.getItem('user')
            if (user !== null && user !== undefined) {
                setClicks(clicks + 1)
                const userInfo = JSON.parse(user)
                userInfo.clicks =JSON.parse(clicks)
                localStorage.setItem('user', JSON.stringify(userInfo));
            }
        }, getRandomInt(1, 7) * 1000)
        return () => clearInterval(randomTimer)
    }, [timer, clicks])


    const buttonClick = () => {
        setClicks(clicks + 1)
        setClicked(true)
        window.localStorage.setItem("user", JSON.stringify({ clicks, userTime, clicked: true }));
        timer.setTimeLeft(60)
    }


    return (
        <div className='thebutton-container'>
            <div className='count-timer'>{timer.timeLeft}</div>
            <div className='the-button-center'>
                {!clicked ? <button className='the-button' onClick={buttonClick} ></button>
                    : <button className='the-button disabled'></button>
                }

                <div className='the-button-clicks'> {clicks} times clicked</div>
            </div>
            <Link to='/rankings' className='rankings nav-btn outlined-btn'> Rankings</Link>
        </div>
    )
}
