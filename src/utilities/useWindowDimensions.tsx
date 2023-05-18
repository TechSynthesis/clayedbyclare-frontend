import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowDimensions
}

// runs every time window changes. Breaks on iPhone
// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, []) // Empty array ensures that effect is only run on mount

//   return windowDimensions
// }
