import { v4 as uuidv4 } from 'uuid';

const DUMMY_FURNITURES = [
  {
    id: uuidv4(),
    name: 'Ramen Stool',
    price: '$65.00',
    formerPrice: '$95.00'
  },
  {
    id: uuidv4(),
    name: 'Flexform',
    price: '$35.00',
    formerPrice: '$55.00'
  },
  {
    id: uuidv4(),
    name: 'Porada',
    price: '$87.00',
    formerPrice: '$97.00'
  },
  {
    id: uuidv4(),
    name: 'Amora',
    price: '$65.00',
    formerPrice: '$95.00'
  },
  {
    id: uuidv4(),
    name: 'Taknion',
    price: '$45.00',
    formerPrice: '$55.00'
  },
  {
    id: uuidv4(),
    name: 'Liquid Contract',
    price: '$35.00',
    formerPrice: '$45.00'
  }
];

const AvailableFurnitures = () => {
  const furnitureList = DUMMY_FURNITURES.map((furniture) => (
    <li>{furniture.name}</li>
  ));

  return (
    <section>
      <ul>{furnitureList}</ul>
    </section>
  );
};

export default AvailableFurnitures;
