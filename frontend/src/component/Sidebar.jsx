import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
      <div>
          <div className='mb-2'>
              <Link>
                  Create Form
              </Link>
              <Link >
                  Analytic
              </Link>
              <Link>
                  Individual Response
              </Link>
          </div>
    </div>
  )
}

export default Sidebar