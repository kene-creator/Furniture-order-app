import icons from '../../images/icons.svg';

const BtnCart = () => (
  <button
    className="w-40 h-[3rem] bg-[#D9AB82] text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center ml-auto mr-auto mt-[-1rem]"
    type="submit"
  >
    Add To Cart
    <div className="bg-white/50 ml-2 rounded-full p-1 ]">
      <svg className="w-3 h-3 fill-white">
        <use xlinkHref={`${icons}#icon-shopping-basket`} />
      </svg>
    </div>
  </button>
);

export default BtnCart;
