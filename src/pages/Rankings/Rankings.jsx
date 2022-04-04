import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {BiArrowBack} from 'react-icons/bi'
import getRandomInt from 'hooks/getRandomInt';
import SingleRank from 'components/SingleRank/SingleRank';

import './Rankings.css'

export default function Rankings() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Get users data
    const urlFetch = 'https://jsonplaceholder.typicode.com/users'

    const userHelper = []

    axios.get(urlFetch)
      .then(res => {
        //Adding the color to the users
        res.data.map((user) => {
          let data = {
            id: user.id,
            username: user.name,
            color: getRandomInt(1, 60)
          }

          return userHelper.push(data)
        })

        // If we are on the client side and the userInfo is been created
        if (typeof window !== 'undefined' && window.localStorage.getItem("user")) {
          const saved = window.localStorage.getItem("user")
          const parceSaved = JSON.parse(saved)

          //If something is saved on the localstorage we set the states adding the new user info
          let userData = {
            id: 0,
            username: parceSaved.name,
            color: parceSaved.userTime
          }

          userHelper.push(userData)
          setUsers(userHelper)

        }
      })
      .catch(err => console.error(err))
  }, []);

    const navigate = useNavigate()

    const handleClick = () =>{
      navigate("/")

    }
  return (

    <div className='rankings-container'>
      <div className='back' onClick={handleClick}>
      <BiArrowBack/>
      <p>Go back</p>
      </div>
      {users.map((user) => (
          <SingleRank
            key={user.id}
            username={user.username}
            color={user.color}>
          </SingleRank>
      ))}
    </div>
  )
}
