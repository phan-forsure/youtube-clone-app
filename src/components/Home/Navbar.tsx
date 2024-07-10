import React from 'react'
import { Link } from 'react-router-dom'

const linksOne: string[] = ["Home", "Popular", "Coding"]
const linksTwo: string[] = ["Sports", "Games", "News", "Education", "Movies", "Music"]
const linksThree: string[] = ["Settings", "Subscriptions"]

function LinksOne() {
  return (
    linksOne.map((link: string) => <Link key={link} to={'/' + link.toLowerCase()}><li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Home" ? "home" : link === "Popular" ? "star" : link === "Coding" ? "code" : ""}`}></i>{link}</li></Link>)
  ) 
}

function LinksTwo() {
  return (
    linksTwo.map((link: string) => <Link key={link} to={'/' + link.toLowerCase()}><li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Sports" ? "medal" : link === "Games" ? "headset" : link === "News" ? "newspaper" : link === "Education" ? "school" : link === "Movies" ? "film" : link === "Music" ? "music" : ""}`}></i>{link}</li></Link>)
  ) 
}

function LinksThree() {
  return (
    linksThree.map((link: string) => <Link key={link} to={'/' + link.toLowerCase()}><li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Settings" ? "gear" : link === "Subscriptions" ? "sitemap" : ""}`}></i>{link}</li></Link>)
  ) 
}

export default function Navbar({ nav }) {
  return (
    nav ? (
      <nav className='ml-3'>
        <ul className='text-white border-b-1 py-4 border-light'><LinksOne /></ul>
        <ul className='text-white border-b-1 py-4 border-light'><LinksTwo /></ul>
        <ul className='text-white border-b-1 py-4 border-light'><LinksThree /></ul>
      </nav>
   ) : (
   <nav className='w-fit ml-2'>
     <ul className='text-white border-b-1 py-4 border-light'>
      {linksOne.map((link: string) => <Link to={'/' + link.toLowerCase()}><li key={link} className='flex items-center justify-center w-16 flex-wrap cursor-pointer py-3 hover:bg-light rounded-xl text-sm'><i className={`m-2 text-lg fa-solid fa-${link === "Home" ? "home" : link === "Popular" ? "star" : link === "Coding" ? "code" : ""}`}></i>{link}</li></Link>)} 
    </ul>

     <ul className='text-white border-b-1 py-4 border-light'>
      {linksTwo.slice(0, 3).map((link: string) => <Link to={'/' + link.toLowerCase()}><li key={link} className='flex items-center justify-center w-16 flex-wrap cursor-pointer py-3 hover:bg-light rounded-xl text-sm'><i className={`m-2 text-lg fa-solid fa-${link === "Sports" ? "medal" : link === "Games" ? "headset" : link === "News" ? "newspaper" : link === "Education" ? "school" : link === "Movies" ? "film" : link === "Music" ? "music" : ""}`}></i>{link}</li></Link>)}
     </ul>
   </nav>
   )
  )
}
