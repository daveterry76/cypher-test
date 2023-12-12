import React from 'react'
import IntroductionToDatabases from '../components/database-management/IntroductionToDatabases'
import MongoDBBasics from '../components/database-management/MongoDBBasics'
import SQLRelationalDatabases from '../components/database-management/SQLRelationalDatabases'


const DatabaseManagement = () => {
  return (
    <>
        <IntroductionToDatabases />
        <MongoDBBasics />
        <SQLRelationalDatabases />
    </>
  )
}

export default DatabaseManagement