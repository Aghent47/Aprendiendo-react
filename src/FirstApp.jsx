
// import React, { Fragment } from 'react' = <> 
import PropTypes from 'prop-types';

const getNameUsers = () =>  {
  const users = {
    name: 'Neider Hernández',
    age: '25',
    city: 'Ciudad de México',
   }
  return users;  
}

// Desestructuando los Props {title, subtitle, age}
export const FirstApp = ({title, subtitle, age}) => { 
 
  return (
    <>
    <h1> {title} </h1>
    <h2> {`${getNameUsers().name} ${age} Años `}</h2>
    <h3> { subtitle } </h3>
    </>
  )
  
}

// PropTypes

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}