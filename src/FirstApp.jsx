
// import React, { Fragment } from 'react' = <> 

const getNameUsers = () =>  {
  const users = {
    name: 'Neider Hernández',
    age: '25',
    city: 'Ciudad de México',
   }
  return users;  
}


export const FirstApp = () => {
 
  return (
    <>
    <h1> {`${getNameUsers().name} ${getNameUsers().age} Años `}</h1>
    <h3>Developer Software</h3>
    </>
  )
}
