import { useState, useEffect } from 'react'

import Container from './Container'

const CookiesNotice = () => {
  const [ hideNotice, setHideNotice ] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setHideNotice(true)
      localStorage.setItem('cookiesAccepted', 'true')
    }, 5000)

    // Remove event listener on cleanup
    return () => clearTimeout(timeout)
  }, []);

  if (typeof window !== "undefined") {
    const accepted = localStorage.getItem('cookiesAccepted')

    if (accepted !== 'true') {
      return (
        <div className={'fixed bottom-0 left-0 w-full py-8 bg-white transition-opacity duration-1000' + (hideNotice ? ' opacity-0' : '')}>
          <Container>
            <div className='flex flex-wrap -mx-6'>
              <div className='px-6 flex-grow'>
                <span>This website stores data such as cookies to enable necessary site functionality, including analytics, targeting, and personalization. By remaining on this website you indicate your consent.</span>
              </div>
            </div>
          </Container>
        </div>
      )
    }
  }

  return null
}

export default CookiesNotice
