import { useState } from 'react';
import { motion } from 'framer-motion';

import review1 from '../../images/review_1.jpg';
import review2 from '../../images/review_2.jpg';
import review3 from '../../images/review_3.jpg';
import icons from '../../images/icons.svg';

const Review = () => {
  const reviewData = [
    {
      image: review1,
      name: 'Mike Taylor',
      date: '20th January 2022',
      star: 4,
      id: 1
    },
    {
      image: review2,
      name: 'Victoria Timi',
      date: '17th October 2021',
      star: 5,
      id: 2
    },
    {
      image: review3,
      name: 'Kenetth Smith',
      date: '12th July 2022',
      star: 4,
      id: 3
    }
  ];

  const [active, setActive] = useState(reviewData[0].id);

  const activeAddHandler = (id) => {
    if (id === 3) {
      const num = 1;
      return num;
    }
    return id + 1;
  };

  const activeSubtractHandler = (id) => {
    if (id === 1) {
      const num = 3;
      return num;
    }
    return id - 1;
  };

  return (
    <div>
      <ul>
        {reviewData.map((data) => (
          <motion.li
            key={data.id}
            className={`${
              active === data.id ? 'flex' : 'hidden'
            } justify-center items-center mr-32 ml-32 mb-32`}
            initial={{ opacity: 1 }}
            animate={{ opacity: active === data.id ? 1 : 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mr-20">
              <img
                src={data.image}
                alt="Customer"
                className="w-[80rem] h-[21rem] bg-center bg-contain"
              />
            </div>

            <div>
              <div className="w-3/4">
                <h3 className="text-4xl font-mono mb-4">
                  Lets see what our customers say
                </h3>
                <p className="text-xl">
                  Dwelling and speedily ignorant any steepest. Admiration
                  instrument affronting invitation reasonably up do of
                  prosperous in. Shy saw declared age debating ecstatic man.
                  Call in so want pure rank am dear were. Remarkably to
                  continuing in surrounded diminutio..
                </p>

                <div className="mt-6">
                  <p className="font-mono text-xl font-semibold">{data.name}</p>
                  <div>
                    <p className="text-sm">{data.date}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="p-2 bg-slate-300 rounded-full"
                  type="button"
                  onClick={() => setActive(activeSubtractHandler(data.id))}
                >
                  <svg className="w-3 h-3 fill-black">
                    <use xlinkHref={`${icons}#icon-chevron-left`} />
                  </svg>
                </button>
                <button
                  className="p-2 bg-slate-300 rounded-full ml-6"
                  type="button"
                  onClick={() => setActive(activeAddHandler(data.id))}
                >
                  <svg className="w-3 h-3 fill-black rotate-180">
                    <use xlinkHref={`${icons}#icon-chevron-left`} />
                  </svg>
                </button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
