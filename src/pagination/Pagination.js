import React from 'react'


const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  } 

  return (
    <div className = "pagination">
    <ol>
    {pageNumbers.map(number => (
      <li key = {number}>
        <a onClick = {() => paginate(number)} href = "!#">{number}</a>
      </li>
    ))}
    </ol>
    </div>
  )
}


export default Pagination;