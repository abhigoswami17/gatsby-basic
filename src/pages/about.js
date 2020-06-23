import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'

const About = () => {
  return (
    <div style={{ color: `teal` }}>
      <Link to='/'>Home</Link>
      <Header headerText='About Gatsby'/>
      <p>Such wow. Very React.</p>
    </div>
  )
}

export default About
