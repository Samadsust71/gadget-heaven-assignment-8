import PropTypes from "prop-types";
import { BiSolidBadgeCheck } from "react-icons/bi";

const PurchaseModal = ({ closeModal, isOpen, handlePurchase, totalPrice }) => {
  const handleClose = () => {
    closeModal();
    handlePurchase();
  };
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box text-center space-y-4">
            <div className="text-6xl text-green-600 text-center flex justify-center items-center">
              <BiSolidBadgeCheck />
            </div>
            <h2 className="font-bold text-lg">Payment Succesfully</h2>
            <div className="border-b"></div>
            <p>Thanks for Purchasing</p>
            <p>Total : ${totalPrice}</p>
            <div className="modal-action w-full">
              <button
                className="btn w-full rounded-3xl bg-gradient-to-b from-[#9538E2] to-violet-400 text-white"
                onClick={() => handleClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PurchaseModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  handlePurchase: PropTypes.func,
  totalPrice: PropTypes.number,
};

export default PurchaseModal;
