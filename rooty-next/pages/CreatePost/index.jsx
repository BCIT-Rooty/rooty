import { useState } from 'react'
import { useEffect } from 'react'
import CreatePost from './CreatePost'
import {useRouter} from 'next/router';


export default function Home() {
  // const router = useRouter();
  const [count, setCount] = useState(0)
  const [showPost, setShowPost] = useState(true)
  const [posts, setPosts] = useState([{
    id: 1,
    name: "I will mix your audio"
  }])

  function handleCreateFromSubmit(titleInput, descriptionInput, barterInput) {
    console.log(titleInput, descriptionInput, barterInput)
  }


  return (
    <div className="App">
      {showPost ? <CreatePost onSubmitForm={handleCreateFromSubmit} /> : posts.map(m => <p>{m.name}</p>)}
    </div>
  )
}
