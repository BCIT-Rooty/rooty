import { useState, useEffect } from "react";
import axios from "axios";

export default function CreatePost(props) {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBarter, setIsBarter] = useState(true);
  const [postKeywords, setPostKeywords] = useState([]);
  const [category, setCategory] = useState("");
  const [photoUrl, setPhotoUrl] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const theCategoryValue = getCheckedRadioValue("categories");
    props.onSubmitForm(title, description, isBarter, theCategoryValue, photoUrl);
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

  // https://stackoverflow.com/questions/8666229/how-to-get-value-from-form-input-type-radio
  function getCheckedRadioValue(radioGroupName) {
    var rads = document.getElementsByName(radioGroupName),
      i;
    for (i = 0; i < rads.length; i++) if (rads[i].checked) return rads[i].value;
    return null; // or undefined, or your preferred default for none checked
  }

  async function handleS3Url(e) {
    e.preventDefault();
    let photoInput = e.target;
    console.log(photoInput)
    await axios.get("/api/s3").then(async (res) => {
      const theUrlData = res.data.url;
      console.log(theUrlData);
      await axios({
        method: "PUT",
        url: theUrlData,
        data: photoInput.files[0],
      }).then(() => {
        const [photoUrl] = theUrlData.split("?");
        console.log(photoUrl);
        setPhotoUrl(photoUrl)
      });
    });
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
          <input
            type="file"
            accept="image/*"
            onInput={(e) => handleS3Url(e)}
          ></input>
          <button onClick={(e) => handlePreventDefault(e)}>+</button>
          {
            // thisButton should make the radio button disappear and reappear
          }
          <button onClick={(e) => handlePreventDefault(e)}>
            Choose a category
          </button>
          <input
            name="categories"
            id="bAndM"
            type="radio"
            value={"Broadcast & Media"}
          />
          <label htmlFor="Broadcast & Media"> Broadcast & Media</label>
          <input
            name="categories"
            id="Digital Arts & Design"
            type="radio"
            value={"Digital Arts & Design"}
          />
          <label htmlFor="Digital Arts & Design"> Digital Arts & Design</label>
          <input
            name="categories"
            id="Business & Finance"
            type="radio"
            value={"Business & Finance"}
          />
          <label htmlFor="Business & Finance"> Business & Finance</label>

          <input
            name="categories"
            id="Marketing Management"
            type="radio"
            value={"Marketing Management"}
          />
          <label htmlFor="Marketing Management"> Marketing Management</label>

          <input
            name="categories"
            id="Tutoring"
            type="radio"
            value={"Tutoring"}
          />
          <label htmlFor="Tutoring">Tutoring</label>

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
