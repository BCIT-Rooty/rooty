import Head from 'next/head'
import Image from 'next/image'


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
      if(category.name === 'FINANCE & BUSINESS') {
        return <li key={category.id}><a href='categories/financeAndBusiness'>{category.name}</a></li>
      } else if(category.name === 'BROADCAST & MEDIA') {
        return <li key={category.id}><a href='categories/broadcastAndMedia'>{category.name}</a></li>
      } else if(category.name === 'TUTORING') {
        return <li key={category.id}><a href='categories/tutoring'>{category.name}</a></li>
      } else if(category.name === 'ARTS & DESIGN') {
        return <li key={category.id}><a href='categories/artsAndDesign'>{category.name}</a></li>
      } else if(category.name === 'MARKETING') {
        return <li key={category.id}><a href='categories/marketing'>{category.name}</a></li>
      }
    })
  }


  return (
    <>
      <h1 className='header'>Categories</h1>
      <div className='categories'>
      <ul className='categories'>
      {getCategories()}
      </ul>
      </div>
    </>
  )
}
