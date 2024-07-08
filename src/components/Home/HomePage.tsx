import React from 'react'
import Navbar from './Navbar'
import Videos from './Videos'

export default function HomePage({ nav }) {
  return (
    <>
        <Navbar nav={nav} />
        <Videos />
    </>
  )
}
