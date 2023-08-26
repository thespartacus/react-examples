import { memo } from 'react';

const Numbers = memo(({ nums, addRandom }) => {
  console.log("Numbers rendered");

  return (
    <div>
      <ul>
        {
          nums.map((num) => {
            return <li key={num}>{num}</li>
          })
        }
      </ul>
      <button onClick={addRandom}>Add Random</button>
    </div>
  );
});

export default Numbers;
