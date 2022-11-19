import { useRef, useState } from 'react';
import Input from '../UI/Input';
import BtnCart from '../UI/BtnCart';

const FurnitureForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: `Amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <BtnCart />
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default FurnitureForm;
