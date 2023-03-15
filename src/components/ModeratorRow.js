import React from "react";
import ModeratorViewModal from "./ModeratorViewModal";

const ModeratorRow = ({ users, index }) => {
  return (
    <tr className="moderator-table hover ">
      <td> {index + 1}</td>
      <td>{users?.time?.toDate().toString().slice(0, 15)}</td>
      <td className="">{users.email}</td>
      <td>{users.message.slice(0, 50)}...</td>
      <td>
        <label htmlFor={users.id} className="btn bg-green-500 btn-sm">
          More Details
        </label>
      </td>
      {users && (
        <ModeratorViewModal
          id={users.id}
          question={users.message}
          date={users?.time?.toDate().toString().slice(0, 15)}
          email={users.email}
        />
      )}
    </tr>
  );
};

export default ModeratorRow;
