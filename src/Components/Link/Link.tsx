import React from 'react'
import "./Link.css"

interface LinkProps {
    name: string;
    path: string
  }
  
  const Link: React.FC<LinkProps> = ({name, path}) => {

  return (
    <span className='for-link'>
      <a href={path}>
        {name}
      </a>
      </span>
  )
}

export default Link