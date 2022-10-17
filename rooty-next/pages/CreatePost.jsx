import { useState, useEffect } from "react";
import Text from "../components/text";
import { FlexBox, Wrapper } from "../styles/globals";
import Input, {TextIn} from "../components/input"; 
import { TextInput } from "../components/input";
import Button from "../components/button";

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
            <Wrapper justifyContent="flex-start" alignItems="flex-start" dir="column">
                <Text txt="Create your post" size="24px" weight="bold" padding="40px 0px 10px 20px"></Text>
                <FlexBox padding="20px 0px 20px 20px" border="0.5px solid #545454" width="100vw" justifyContent="flex-start">
                    <Input type="file"></Input>
                </FlexBox>
                <FlexBox border="0.5px solid #545454" width="100vw" justifyContent="flex-start" alignItems="flex-start" dir="column" padding="0px 0px 15px 0px">
                    <Text txt="Choose a Category" size="16px" weight="bold" padding="15px 0px 20px 20px"></Text>
                    <FlexBox flexWrap="wrap">
                        <Button txt="Broadcast & Media" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                        <Button txt="Business & Finance" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                        <Button txt="Computing" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                        <Button txt="Digital Arts & Media" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                        <Button txt="Marketing" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                        <Button txt="Tutoring" border="solid 2px #545454" bgColor="white" color="#545454" width="fit-content" padding="15px"></Button>
                    </FlexBox>
                </FlexBox>
                <FlexBox border="0.5px solid #545454" width="100vw" justifyContent="flex-start" alignItems="flex-start" dir="column" padding="0px 0px 15px 0px">
                    <Text txt="Type Keywords" size="16px" weight="bold" padding="15px 0px 20px 20px"></Text>
                    <Input type="search" bgColor="white" border="solid 1px #545454" margin="0px 0px 0px 20px"></Input>
                </FlexBox>
                <FlexBox border="0.5px solid #545454" width="100vw" justifyContent="flex-start" alignItems="flex-start" dir="column" padding="0px 0px 15px 0px">
                    <Text txt="Post Title" size="16px" weight="bold" padding="15px 0px 20px 20px"></Text>
                    <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FlexBox>
                <FlexBox border="0.5px solid #545454" width="100vw" justifyContent="flex-start" alignItems="flex-start" dir="column" padding="0px 0px 15px 0px">
                    <Text txt="Describe your Service" size="16px" weight="bold" padding="15px 0px 20px 20px"></Text>
                    <TextInput value={description} onChange={(e) => setDescription(e.target.value)}  type="textarea" />
                </FlexBox>
                
                        
                
                {/* <TextInput type="textarea"></TextInput> */}
                {/* <button onClick={(e) => handleSubmit(e)} >+</button>

                <button onClick={(e) => handleSubmit(e)} >Choose a category</button>
                <h3>Choose keyword</h3>
                <button onClick={(e) => handleSubmit(e)} >Audio Mix</button>
                <button onClick={(e) => handleSubmit(e)} >Web Design</button>
                <button onClick={(e) => handleSubmit(e)} >Logo Design</button> */}
                {/* <label> Write your title
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </label> */}

                <label> Describe your service
                    <input value={description} onChange={(e) => setDescription(e.target.value)}  type="text" />
                </label>

                <input name="BarterOrCash" id="Barter" type="radio" value={"barter"} onClick={() => setIsBarter(true)} />
                <label htmlFor="Barter"> Barter
                </label>
                    <input name="BarterOrCash" id="Cash" type="radio" value={"cash"} onClick={() => setIsBarter(false)}/>
                <label htmlFor="Cash"> Cash
                </label>
                <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
            </Wrapper>
        </>
    )
}