import React from 'react'
import { useColor } from 'hooks/useColor'
import './SingleRank.css'

export default function SingleRank({ username, color }) {
    const backColor = useColor(color)

    return (
        <div className='single-rank'>
            <div>  {username ? username : <b>You</b>}</div>
            <div className='color-div' style={{backgroundColor: backColor}} >  </div>
        </div>
    )
}
