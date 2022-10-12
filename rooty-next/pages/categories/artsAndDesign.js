import categories from "../categories"
import '../../styles/category.css' // why tf is this not working (or is it???)
console.log("HERE", categories())

// db function that pulls data from the items/"products" table where the category is equal to "artsAndDesign"
// and returns the data in an object that has img, title, price, and description properties

/* QUESTION: so i have about 5 different categories, and i want to create a 
page for each category, should each category have its own db function that 
pulls data from the items table where the category is equal to the category 
name? or should i have one db function that pulls data from the items table 
where the category is equal to the category name that is passed in as an argument?
*/

async function getItemsFromDatabase() {
  let query = `
  SELECT *
  FROM items
  WHERE category = artsAndDesign`

  const [result] = await pool.query(query, [id])
  const item = result[0]
  return item
}



export default function artsAndDesign() {
  return (
    
    <div>
    <h1 className="header">Arts & Design</h1>
    </div>
  )
}
