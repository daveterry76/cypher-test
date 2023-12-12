import React from 'react'
import ExpressBasics from '../components/backend-development/ExpressBasics'
import NodeOverview from '../components/backend-development/NodeOverview'
import RESTfulAPIs from '../components/backend-development/RESTfulAPIs'

const BackendDevelopment = () => {
  return (
    <>
        <NodeOverview />
        <ExpressBasics />
        <RESTfulAPIs />
    </>
  )
}

export default BackendDevelopment