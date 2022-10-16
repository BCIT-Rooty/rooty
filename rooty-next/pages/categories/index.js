import { categoryList } from "../../server/database"


export default function categories() {


  function getCategories(categories) {
    return categories.map(category => (
    <li key={category.id}>
      <a href={`categories/${category.id}`}>
        {category.name}
      </a>
    </li>
))};
  
    
  return (
    <>
      <h1 className='header'>Categories</h1>
      <div className='categories'>
      <ul className='categories'>
      {getCategories(categoryList)}
      </ul>
      </div>
    </>
  )
}



