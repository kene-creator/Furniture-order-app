import { v4 as uuidv4 } from 'uuid';
import icons from '../../images/icons.svg';

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
    <li key={furniture.id} className="basis-[24%] h-52 bg-[#FFF4E8] mr-6 mb-28">
      <button
        className="w-40 h-[3rem] bg-[#D9AB82] text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center ml-auto mr-auto mt-[-1.5rem]"
        type="submit"
      >
        Add To Cart
        <div className="bg-white/50 ml-2 rounded-full p-1 ]">
          <svg className="w-3 h-3 fill-white">
            <use xlinkHref={`${icons}#icon-shopping-basket`} />
          </svg>
        </div>
      </button>
      <div className="font-mono ml-8">
        <p className="text-2xl mt-2">{furniture.name}</p>
        <div className="flex mt-4">
          <p className="mr-8">{furniture.price}</p>
          <p className="text-slate-300 line-through">{furniture.formerPrice}</p>
        </div>
        <div></div>
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
