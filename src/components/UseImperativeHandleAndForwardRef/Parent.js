import { useRef } from "react";
import Child from "./Child";

function Parent() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.childFunction1();

    childRef.current.childFunction2();
  }

  return (
    <div>
      <Child ref={childRef} />

      <h2>parent content</h2>

      <button onClick={handleClick}>Call child functions</button>
    </div>
  );
}

export default Parent;
