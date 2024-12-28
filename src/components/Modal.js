const Modal = ({ toggleModal }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-5 text-black">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <button className="text-gray-500" onClick={toggleModal}>
            ✖
          </button>
        </div>
  
        {/* Modal Body */}
        <div className="mt-5">
          <p className="mb-3">
            <strong>Elegant Collision Center</strong>
          </p>
          <p>5336 Prudence Drive</p>
          <p>Houston, TX 77045</p>
          <p className="mb-3">Tel: 832-661-0390</p>
  
          {/* Google Maps Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13851.93936395308!2d-95.45579639999999!3d29.630588499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dc3cb0c53035%3A0xf1f02f3d9ea6e7a!2s5336%20Prudence%20Dr%2C%20Houston%2C%20TX%2077045%2C%20USA!5e0!3m2!1sen!2sus!4v1692799002401!5m2!1sen!2sus"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
  
        {/* Modal Footer */}
        <div className="flex justify-end mt-5">
          <button className="btn btn-primary" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
  
  export default Modal;
  