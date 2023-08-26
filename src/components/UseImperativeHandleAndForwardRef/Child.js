import { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childFunction1() {
      console.log("Child Function 1");
    },
    childFunction2() {
      console.log("Child Function 2");
    }
  }));

  return (
    <div>
      <h2>Child</h2>
    </div>
  );
});

export default Child;
