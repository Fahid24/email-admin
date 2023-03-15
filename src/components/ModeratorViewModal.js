import React from "react";

const ModeratorViewModal = ({ id, email, question, date }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-xl font-bold">
            Date: <span className="text-lg font-semibold">{date}</span>
          </h3>
          <h3 className="text-xl font-bold">
            Email: <span className="text-lg font-semibold">{email}</span>
          </h3>
          <h3 className="text-xl font-bold">
            Question: <span className="text-lg font-semibold">{question}</span>
          </h3>
        </label>
      </label>
    </>
  );
};

export default ModeratorViewModal;
