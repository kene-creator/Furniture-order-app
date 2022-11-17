/* eslint-disable */
import ReactDOM from 'react-dom';

const Backdrop = (props) => (
  <div className="bg-blend-overlay backdrop" onClick={props.onClick} />
);

const ModalOverlay = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onClose } = props;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
