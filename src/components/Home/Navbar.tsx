import React from 'react'

const linksOne: string[] = ["Home", "Popular", "Coding"]
const linksTwo: string[] = ["Sports", "Gaming", "Trending", "News", "Education", "Films", "Music"]
const linksThree: string[] = ["Settings", "Subscriptions"]

function LinksOne() {
  return (
    linksOne.map((link: string) => <li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Home" ? "home" : link === "Popular" ? "star" : link === "Coding" ? "code" : ""}`}></i>{link}</li>)
  ) 
}

function LinksTwo() {
  return (
    linksTwo.map((link: string) => <li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Sports" ? "medal" : link === "Gaming" ? "headset" : link === "Trending" ? "fire-flame-curved" : link === "News" ? "newspaper" : link === "Education" ? "school" : link === "Films" ? "film" : link === "Music" ? "music" : ""}`}></i>{link}</li>)
  ) 
}

function LinksThree() {
  return (
    linksThree.map((link: string) => <li key={link} className='flex items-center cursor-pointer py-4 hover:bg-light rounded-xl'><i className={`mx-4 fa-solid fa-${link === "Settings" ? "gear" : link === "Subscriptions" ? "sitemap" : ""}`}></i>{link}</li>)
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
      {linksOne.map((link: string) => <li key={link} className='flex items-center justify-center w-16 flex-wrap cursor-pointer py-3 hover:bg-light rounded-xl text-sm'><i className={`m-2 text-lg fa-solid fa-${link === "Home" ? "home" : link === "Popular" ? "star" : link === "Coding" ? "code" : ""}`}></i>{link}</li>)} 
    </ul>

     <ul className='text-white border-b-1 py-4 border-light'>
      {linksTwo.slice(0, 3).map((link: string) => <li key={link} className='flex items-center justify-center w-16 flex-wrap cursor-pointer py-3 hover:bg-light rounded-xl text-sm'><i className={`m-2 text-lg fa-solid fa-${link === "Sports" ? "medal" : link === "Gaming" ? "headset" : link === "Trending" ? "fire-flame-curved" : link === "News" ? "newspaper" : link === "Education" ? "school" : link === "Films" ? "film" : link === "Music" ? "music" : ""}`}></i>{link}</li>)}
     </ul>
   </nav>
   )
  )
}
