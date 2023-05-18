/* eslint-disable no-unused-vars */
import * as React from 'react'

// import classes from './index.module.scss'

interface PaginationProps {
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
}

// eslint-disable-next-line no-unused-vars
const Pagination: React.FC<PaginationProps> = ({ currentPage, pageSize, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination
