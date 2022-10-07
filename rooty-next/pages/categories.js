import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function categories() {
  const categories = [
    { id: 1, name: 'FINANCE & BUSINESS' },
    { id: 2, name: 'BROADCAST & MEDIA' },
    { id: 3, name: 'TUTORING' },
    { id: 4, name: 'ARTS & DESIGN' },
    { id: 5, name: 'MARKETING' },
  ]

  function getCategories() {
    return categories.map((category) => {
      return <li key={category.id}>
        <a href="">{category.name}</a>
        </li>
    })
  }
  console.log(getCategories())

  return (
    <>
      <h1 className='header'>Categories</h1>
      <ul className='categories'>
      {getCategories()}
      </ul>
    </>
  )
}
