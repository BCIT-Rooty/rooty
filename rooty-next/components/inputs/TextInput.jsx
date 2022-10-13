export default function textInput(props) {
  return (
    <>
      <label>
        {props.inputDescription}
        <input
          value={props.valueOfTheInput}
          onChange={(e) => props.onChangingTheText(e.target.value)}
          type="text"
        />
      </label>
    </>
  );
}
