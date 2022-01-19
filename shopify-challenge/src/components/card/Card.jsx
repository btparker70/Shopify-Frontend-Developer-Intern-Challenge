import React from 'react';

const Card = ({ data }) => {
  
  return (
    <div>
      <img src={data.url}/>
      <p>{data.copyright}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      <p>{data.hdurl}</p>
      <p>{data.title}</p>
    </div>
  )
}

export default Card;