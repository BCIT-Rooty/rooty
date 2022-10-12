import { useState, useEffect } from "react";

export default function CreatePost(props) {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBarter, setIsBarter] = useState(true);
  const [postKeywords, setPostKeywords] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmitForm(title, description, isBarter);
  }

  function handlePreventDefault(e) {
    e.preventDefault();
  }

  function handleAddTagsToThePost(e, inputValue) {
    e.preventDefault();
    // console.log(inputValue)
    if (!postKeywords.includes(inputValue)) {
      setPostKeywords([...postKeywords, inputValue]);
    } else {
      setPostKeywords(postKeywords.filter((m) => m !== inputValue));
    }
  }

  return (
    <>
      <main>
        <form>
          <div>
            <h1>Create your post</h1>
            <button onClick={(e) => handleSubmit(e)} type="submit">
              Done
            </button>
          </div>

          <input type="file"></input>
          <button onClick={(e) => handlePreventDefault(e)}>+</button>

          <button onClick={(e) => handlePreventDefault(e)}>Choose a category</button>
          <ul>
            <li>Broadcast & Media</li>
            <li>Digital Arts & Design</li>
            <li>Business & Finance</li>
            <li>Marketing Management</li>
            <li>Tutoring</li>
          </ul>
          <h3>Choose keyword</h3>
          <button onClick={(e) => handleAddTagsToThePost(e, "Audio Mix")}>
            Audio Mix
          </button>
          <button onClick={(e) => handleAddTagsToThePost(e, "Web Design")}>
            Web Design
          </button>
          <button onClick={(e) => handleAddTagsToThePost(e, "Logo Design")}>
            Logo Design
          </button>
          <label>
            {" "}
            Write your title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </label>

          <label>
            {" "}
            Describe your service
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
          </label>

          <input
            name="BarterOrCash"
            id="Barter"
            type="radio"
            value={"barter"}
            onClick={() => setIsBarter(true)}
          />
          <label htmlFor="Barter"> Barter</label>
          <input
            name="BarterOrCash"
            id="Cash"
            type="radio"
            value={"cash"}
            onClick={() => setIsBarter(false)}
          />
          <label htmlFor="Cash"> Cash</label>
        </form>
      </main>
    </>
  );
}
