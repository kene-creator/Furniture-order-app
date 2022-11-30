import stripe from '../../images/stripe.png';
import accenture from '../../images/accenture.png';
import deloitte from '../../images/deloitte.png';
import google from '../../images/Google.png';
import ibm from '../../images/IBM.png';

const Sponsor = () => {
  return (
    <div>
      <p className="flex justify-center items-center text-2xl uppercase font-light">
        Some of our trusted clients
      </p>
      <div className="flex mt-6 justify-between items-center w-3/4 ml-auto mr-auto p-8">
        <img src={stripe} alt="" />
        <img src={accenture} alt="" />
        <img src={deloitte} alt="" />
        <img src={google} alt="" />
        <img src={ibm} alt="" />
      </div>
    </div>
  );
};

export default Sponsor;
