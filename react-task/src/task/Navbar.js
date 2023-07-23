import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='links'>
            <Link to="/" style={{marginLeft:"0px"}}>Task1</Link>
            <Link to="/task2">Task2</Link>
            <Link to="/task3">Task3</Link>
            <Link to="/task4">Task4</Link>
        </ul>
    </div>
  )
}

export default Navbar