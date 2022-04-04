import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import './Layout.css'

function Wrapper(props) {
    return (
        <div className='wrapper'>
            {props.children}
        </div>
    )
}

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <Wrapper>
                <main>{props.children} </main>
            </Wrapper>
        </>
    )
}
