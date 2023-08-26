import { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(1);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  };

  // This function is costly and requires a lot of time to be calculated
  // but it depends only on count state variable. but if we don't use
  // useMemo here, the calculation will happen if we click on addRandom button as well
  // because the function is being called on every rerender.
  // if we wrap this in useMemo, then it will be called only if
  // we update the count, and not when user clicks on addRandom button.
  // Because the depencies have not changed after clicking on the 
  // addRandom button, hence the result from the function is memoized
  // by useMemo. A function using useMemo runs again only if the
  // one of the vaues in dependency array changes.
  const magicNum = useMemo(() => calculateMagicNumber(count), [count]);

  // Same happens if we send the function return value as a dependency in a hook
  useEffect(() => {
    console.log(magicNum);
  }, [magicNum]);

  return (
    <div>
      <div>
        Counter: {count} | Magic number: {magicNum} &nbsp;
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <div>
        <ul>
          {nums.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
        <button onClick={addRandom}>Add random</button>
      </div>
    </div>
  );
}

function calculateMagicNumber(n) {
  console.log("Costly calculation triggered.");
  let num = 1;
  for (let i = 0; i < n + 1000000000; i++) {
    num += 123000;
  }
  return parseInt(num - num * 0.22, 10);
}

export default UseMemo;
