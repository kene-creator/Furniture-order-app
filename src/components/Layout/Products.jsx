import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AvailableFurnitures from '../Furnitures/AvailableFurnitures';

const Products = () => {
  const [active, setActive] = useState('Chair');

  const links = ['All', 'Bed', 'Sofa', 'Chair', 'Light'];

  return (
    <section className="mt-16 p-24">
      <div className="flex items-center justify-center">
        <h3 className="text-4xl mr-16">PRODUCTS</h3>
        <p className="mt-8 mr-16 text-slate-400">Best Selling</p>
        <p className="mt-8 mr-64 text-slate-400">Most Popular</p>
        <a href="/" className="mt-8 mr-16 text-xs">
          See All
        </a>
      </div>
      <div className="mt-16">
        <ul className="flex items-center justify-center text-xs">
          {links.map((link) => (
            <li className="mr-6 text-slate-400" key={uuidv4()}>
              <a
                href={`#${link}`}
                className={`${active === link && 'text-black'}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <AvailableFurnitures />
      </div>
    </section>
  );
};

export default Products;
