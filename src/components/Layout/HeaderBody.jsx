import image1 from '../../images/Image.jpg';

const HeaderBody = () => (
  <>
    <h1 className="text-5xl ml-24 mt-12 mb-6 font-medium w-[55%] z-20 relative">
      Modern Furniture For Modern Living Style
    </h1>
    <div className="flex">
      <div className="basis-2/5 ml-24">
        <p className="font-extralight font-sans">
          In unfeeling existence objection immediate repulsive on he in.
          Imprudence comparison uncommonly me he difficulty diminution
          resolution. Likewise proposal differed scarcely dwelling as on
          raillery.
        </p>
        <p className="mt-8 font-extralight font-sans">
          September few dependent extremity own continued and ten previaled
          attending. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Neque magni molestias culpa voluptas aliquam quidem eius beatae cum
          nihil excepturi architecto, ipsa ad modi maxime odit corporis possimus
          consequatur numquam.
        </p>
        <button
          type="button"
          className="bg-[#C4A586] text-white py-2 px-4 mt-6 font-extralight mr-6"
        >
          Request a Qoute
        </button>
        <button
          type="button"
          className="py-2 px-4 font-extralight border-[#C4A586] border border-solid text-[#C4A586]"
        >
          Watch a video
        </button>
      </div>
      <div className="mt-[-12rem] z-10">
        <img src={image1} alt="" />
      </div>
    </div>
  </>
);

export default HeaderBody;
