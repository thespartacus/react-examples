import {useEffect, useState} from 'react';

const Child = ({count}) => {
  useEffect(() => {
    const childFunction1 = () => {
      console.log('child function 1 called');
    };

    const childFunction2 = () => {
      console.log('child function 2 called');
    };

    // 👇️ don't run on the initial render
    if (count !== 0) {
      childFunction1();

      childFunction2();
    }
  }, [count]);

  return (
    <div>
      <h2>child content</h2>
    </div>
  );
};

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(current => current + 1);
  };

  return (
    <div>
      <Child count={count} />

      <h2>parent content</h2>

      <button onClick={handleClick}>Call child functions</button>
    </div>
  );
}
