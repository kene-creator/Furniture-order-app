import ReactDOM from 'react-dom';

const Backdrop = () => <div className="bg-blend-overlay backdrop" />;

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
  const { children } = props;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
