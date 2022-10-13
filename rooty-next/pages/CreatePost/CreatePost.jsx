import { useState, useEffect } from "react";
import axios from "axios";
import SubmitButton from "../../components/buttons/SubmitButton";
import ImageInputS3 from "../../components/inputs/ImageInputS3";
import TextInput from "../../components/inputs/TextInput";
import KeywordButton from "../../components/buttons/KeyWordButton";

export default function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBarter, setIsBarter] = useState(true);
  const [postKeywords, setPostKeywords] = useState([]);
  const [potentialPostKeywords, setPotentialPostKeywords] = useState([
    "Audio Mix",
    "Web Design",
    "Logo Design",
  ]);
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoInput, setPhotoInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const theCategoryValue = getCheckedRadioValue("categories");
    await uploadThePhotoToS3().then((res) => {
      props.onSubmitForm(
        title,
        description,
        isBarter,
        theCategoryValue,
        postKeywords,
        res
      );
      setTitle("");
      setDescription("");
      setIsBarter(false);
      setPhotoUrl("");
    });
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

  async function uploadThePhotoToS3() {
    if (photoInput == false) {
      let theUrlToReturn = "no Url bro";
      return theUrlToReturn;
    }
    let theUrlToReturn;
    await axios.get("/api/s3").then(async (res) => {
      const theUrlData = res.data.url;
      await axios({
        method: "PUT",
        url: theUrlData,
        data: photoInput.files[0],
      }).then(() => {
        const [photoUrlRet] = theUrlData.split("?");
        setPhotoUrl(photoUrlRet);
        theUrlToReturn = photoUrlRet;
      });
    });
    return theUrlToReturn;
  }

  async function handleS3Url(e) {
    e.preventDefault();
    setPhotoInput(e.target);
  }

  return (
    <>
      <main>
        <form>
          <div>
            <h1>Create your post</h1>
            <SubmitButton
              onSubmitButtonClicked={handleSubmit}
              textInsideTheButton={"Done"}
            />
          </div>
          <ImageInputS3 onInsertPhotoInsideS3={handleS3Url} />
          {/* change this please Sohrab so it makes a ImageInputS3 tag */}
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
          <KeywordButton
            keyWords={potentialPostKeywords}
            onAddTagsToThePost={handleAddTagsToThePost}
          />
          <TextInput
            inputDescription={"Write your title"}
            valueOfTheInputtt={title}
            onChangingTheText={setTitle}
          />
          <TextInput
            inputDescription={"Describe your service"}
            valueOfTheInputtt={description}
            onChangingTheText={setDescription}
          />
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
