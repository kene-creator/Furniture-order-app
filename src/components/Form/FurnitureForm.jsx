import Input from '../UI/Input';
import BtnCart from '../UI/BtnCart';

const FurnitureForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;
  return (
    <form action="">
      <Input
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
    </form>
  );
};

export default FurnitureForm;
