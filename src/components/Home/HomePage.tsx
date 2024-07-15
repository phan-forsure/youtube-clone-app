import { useContext } from 'react'
import Navbar from './Navbar'
import Videos from './Videos'
import { queryContext } from '../../App'

export default function HomePage({ nav }) {
  const query = useContext(queryContext)

  return (
    <>
      <Navbar nav={nav} />
      <Videos query={query} />
    </>
  )
}
