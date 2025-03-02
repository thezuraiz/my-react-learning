import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [content, setContent] = useState("null");
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("Component Did Mount");
    },
    [
      // For not Update on each Click
    ]
  );

  useEffect(() => {
    console.log("Component updated");
    return () => {
      // If you want to do after updating something
      setContent("Reset");
    };
  }, [count]);

  return (
    <>
      <button
        className="py-4 px-2 bg-green-400 font-bold my-10 mx-5 rounded-xl"
        onClick={() => setContent("Posts")}
      >
        Posts
      </button>
      <button
        className="py-4 px-2 bg-green-400 font-bold my-10 mx-5 rounded-xl"
        onClick={() => setContent("Comments")}
      >
        Comments
      </button>
      <button
        className="py-4 px-2 bg-green-400 font-bold my-10 mx-5 rounded-xl"
        onClick={() => setContent("Likes")}
      >
        Likes
      </button>
      <button
        className="py-4 px-2 bg-green-400 font-bold my-10 mx-5 rounded-xl"
        onClick={() => setCount((e) => e + 1)}
      >
        Count: {count}
      </button>
      <h3 className="py-2 p-10 bg-red-500 text-white container mx-auto">
        {content}
      </h3>
    </>
  );
};

export default UseEffectComponent;
