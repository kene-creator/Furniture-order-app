import Residential from '../../images/f-002.png';
import Hospitality from '../../images/f-001.png';

const Collection = () => (
  <section>
    <div className="flex w-full">
      <div className="flex bg-[#FCEFE9] basis-2/4 justify-between p-8 items-center">
        <div className="ml-6">
          <h3 className="text-3xl mb-16 w-[20%]">Residential Furniture</h3>
          <a href="">Browse Collection</a>
        </div>
        <div>
          <img
            src={Residential}
            alt="Residential collection"
            className="w-72 h-60"
          />
        </div>
      </div>
      <div className="flex bg-[#FAE2C8] basis-2/4 justify-between p-8 items-center">
        <div className="ml-6">
          <h3 className="text-3xl mb-16 w-[20%]">Hospitality Furniture</h3>
          <a href="">Browse Collection</a>
        </div>
        <div>
          <img
            src={Hospitality}
            alt="Hospitality collection"
            className="w-72 h-60"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Collection;
