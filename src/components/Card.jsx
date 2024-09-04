import React from 'react'

// We are making use of props to pass as children and we can use props for styling too as we change the background color of the element Card. Check HomeCard, second card.
const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card