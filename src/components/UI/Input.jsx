/* eslint-disable */
import React from 'react';

const Input = React.forwardRef((props, ref) => {
  const { label } = props;
  return (
    <div className="mt-[-2rem] flex justify-center items-center">
      <input
        ref={ref}
        {...props.input}
        className="w-12 ml-2 bg-orange-100 rounded-sm"
      />
    </div>
  );
});

export default Input;
