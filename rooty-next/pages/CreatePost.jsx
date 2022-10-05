import { useState, useEffect } from "react"

export default function CreatePost(props) {
    const [file, setFile] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isBarter, setIsBarter] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()
        props.onSubmitForm(title, description, isBarter)
    }

    function handlePreventDefault(e) {
        e.preventDefault()
    }



    return (
        <>
            <main>
                <form>
                    <div>
                        <h1>Create your post</h1>
                        <button onClick={(e) => handleSubmit(e)} type="submit">Done</button>
                    </div>

                    <input type="file"></input>
                    <button onClick={(e) => handleSubmit(e)} >+</button>

                    <button onClick={(e) => handleSubmit(e)} >Choose a category</button>
                    <h3>Choose keyword</h3>
                    <button onClick={(e) => handleSubmit(e)} >Audio Mix</button>
                    <button onClick={(e) => handleSubmit(e)} >Web Design</button>
                    <button onClick={(e) => handleSubmit(e)} >Logo Design</button>
                    <label> Write your title
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                    </label>

                    <label> Describe your service
                        <input value={description} onChange={(e) => setDescription(e.target.value)}  type="text" />
                    </label>

                    <input name="BarterOrCash" id="Barter" type="radio" value={"barter"} onClick={() => setIsBarter(true)} />
                    <label htmlFor="Barter"> Barter
                    </label>
                        <input name="BarterOrCash" id="Cash" type="radio" value={"cash"} onClick={() => setIsBarter(false)}/>
                    <label htmlFor="Cash"> Cash
                    </label>


                </form>
            </main>
        </>
    )
}