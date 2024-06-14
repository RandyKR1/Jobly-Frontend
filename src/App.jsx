import React, {useState, useEffect} from 'react'
import './App.css'
import Routing from './Routing'


const companyDefault = [
  {
    name: 'Apple',
    description: "World lead tech company",
    jobs: [
      {
        title: "Lead Software Engineer",
        salary: "200,000",
        equity: "0.10"
      },
      {
        title: "Jr Software Engineer",
        salary: "80,000",
        equity: "0.03"
      }
    ]
  }
]

function App({comps = companyDefault}) {
 return (
    <>
      <Routing comps={comps}/>
    </>
  )
}

export default App
