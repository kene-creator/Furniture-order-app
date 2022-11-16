import Input from '../UI/Input';
import BtnCart from '../UI/BtnCart';

const FurnitureForm = () => (
  <form action="">
    <Input
      label="Amount"
      input={{
        id: 'Amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}
    />
    <BtnCart />
  </form>
);

export default FurnitureForm;
