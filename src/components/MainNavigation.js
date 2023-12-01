import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>AllMeetup </Link>
            </li>
            <li>
                <Link to='/new-meetup'>Add new Meetup </Link>
            </li>
            <li>
                <Link to='/favourites'> My favourites</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainNavigation