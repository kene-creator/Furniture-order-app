import image4 from '../../images/image-4.jpg';
import icons from '../../images/icons.svg';
import logo from '../../images/logo.png';

const SignUp = () => (
  <>
    <div className="flex justify-between items-center mb-8">
      <div className="ml-32">
        <p className="text-[#FE8432] text-sm border border-[#FE8432] w-32 rounded-xl mb-12 flex justify-center">
          Mistruim Interior
        </p>
        <h3 className="text-4xl w-[50%] mb-8">
          Sign up to recieve updates about new products
        </h3>
        <form action="" className="relative w-[27.5rem]">
          <input
            type="text"
            placeholder="Your business email"
            className="pr-52 pl-8 bg-[#F5F5F5] pt-5 pb-5 outline-none"
          />
          <button
            type="submit"
            className="bg-[#D9AB82] h-[3rem] text-white absolute top-0 right-2 mt-2 py-3 px-4 flex items-center justify-center"
          >
            Get started
            <div className="bg-[#FAE2C8] py-4 px-4 ml-2 mr-[-0.8rem]">
              <svg className="w-3 h-3 fill-white rotate-180">
                <use xlinkHref={`${icons}#icon-chevron-left`} />
              </svg>
            </div>
          </button>
        </form>
      </div>
      <div>
        <img src={image4} alt="" />
      </div>
    </div>

    <div className="flex justify-between items-center w-[80%] mr-auto mx-auto pb-8 border-black border-b mb-8">
      <div>
        <img src={logo} alt="company logo" className="w-24" />
      </div>
      <div className="flex font-mono ">
        <p className="mr-6">About</p>
        <p className="mr-6">Product</p>
        <p className="mr-6">Service</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-center items-center">
        <a href="">
          <svg className="w-3 h-3 fill-black mr-4">
            <use xlinkHref={`${icons}#icon-facebook`} />
          </svg>
        </a>
        <a href="">
          <svg className="w-3 h-3 fill-black mr-4">
            <use xlinkHref={`${icons}#icon-instagram`} />
          </svg>
        </a>
        <a href="">
          <svg className="w-3 h-3 fill-black">
            <use xlinkHref={`${icons}#icon-play`} />
          </svg>
        </a>
      </div>
    </div>
  </>
);

export default SignUp;
