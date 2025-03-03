import { useRef } from "react";

const UseRefHook = () => {
  console.log("Re Rendered");
  let emailText = useRef();
  function handleSubmit() {
    console.log(emailText.current);
    // Change the style

    let style = emailText.current.style;
    console.log(style);
    style.width = "40%";
    style.borderRadius = "40px";
    style.borderColor = "red";
    console.log("Value=> ", emailText.current.value);

    /// NOTE:
    /// Its not cause component Re-Render
  }
  return (
    <>
      <input className="border " type="text" ref={emailText} />
      <button onClick={handleSubmit}>Change the Color</button>
    </>
  );
};

export default UseRefHook;
