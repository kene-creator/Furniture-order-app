import { v4 as uuidv4 } from 'uuid';

import product1 from '../../images/product-1.png';
import product2 from '../../images/product-2.png';
import product3 from '../../images/product-3.png';
import product4 from '../../images/product-4.png';
import product5 from '../../images/product-5.png';
import product6 from '../../images/product-6.png';
import FurnitureForm from '../Form/FurnitureForm';

const DUMMY_FURNITURES = [
  {
    id: uuidv4(),
    name: 'Ramen Stool',
    price: '$65.00',
    formerPrice: '$95.00',
    productImage: product1
  },
  {
    id: uuidv4(),
    name: 'Flexform',
    price: '$35.00',
    formerPrice: '$55.00',
    productImage: product2
  },
  {
    id: uuidv4(),
    name: 'Porada',
    price: '$87.00',
    formerPrice: '$97.00',
    productImage: product3
  },
  {
    id: uuidv4(),
    name: 'Amora',
    price: '$65.00',
    formerPrice: '$95.00',
    productImage: product4
  },
  {
    id: uuidv4(),
    name: 'Taknion',
    price: '$45.00',
    formerPrice: '$55.00',
    productImage: product5
  },
  {
    id: uuidv4(),
    name: 'Liquid Contract',
    price: '$35.00',
    formerPrice: '$45.00',
    productImage: product6
  }
];

const AvailableFurnitures = () => {
  const furnitureList = DUMMY_FURNITURES.map((furniture) => (
    <li key={furniture.id} className="basis-[24%] h-52 bg-[#FFF4E8] mr-6 mb-28">
      <FurnitureForm />
      <div className="font-mono ml-8">
        <p className="text-2xl mt-2">{furniture.name}</p>
        <div className="flex mt-4">
          <p className="mr-8">{furniture.price}</p>
          <p className="text-slate-300 line-through">{furniture.formerPrice}</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={furniture.productImage} alt="" className="h-48" />
      </div>
    </li>
  ));

  return (
    <section>
      <ul className="flex mt-20 flex-wrap justify-center items-center">
        {furnitureList}
      </ul>
    </section>
  );
};

export default AvailableFurnitures;
