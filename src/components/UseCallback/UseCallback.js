import { useCallback, useState, useEffect } from 'react';
import Numbers from './Numbers';


const  UseCallback = () => {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  // useCallback here caches the addRandom callback function reference
  // so that when UseCallback function component rerenders due to count state change,
  // Numbers component does not rerender.
  // If we don't use useCallback, on every click of counter increase, UseCallback function component
  // will rerender and new reference for addRandom will be created every time, resulting
  // in rerendering of Numbers function component as addRandom is passed to it as a prop and
  // JavaScript does not consider two different references of functions or objects as same
  // even if their contants are same.
  // useCallback here caches the reference of addRandom function and it only gets recreated if nums
  // has changed which we have defined in its dependency array.
  const addRandom = useCallback(() => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  }, [nums]);

  // same happens if function is passed as a dependency to a hook
  useEffect(() => {
    console.log(addRandom);
  }, [addRandom]);

  return (
    <div>
      <div>
        Count: {count} &nbsp;
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <Numbers addRandom={addRandom} nums={nums} />
    </div>
  );
}

export default UseCallback;
