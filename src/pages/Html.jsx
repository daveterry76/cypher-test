import React from 'react'
import IntroductionToHTML from '../components/html/IntroductionToHTML'
import HTMLForms from '../components/html/HTMLForms'
import HTMLElements from '../components/html/HTMLElements'


const Html = () => {
  return (
    <>
      <div>
        <IntroductionToHTML />
        <HTMLElements />
        <HTMLForms />
      </div>
    </>
  )
}

export default Html