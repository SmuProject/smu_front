import React from "react";
function UserList({ users }) {
  return users.map((user, index) => (
    <tr>
      <td className="leaderRank">{index + 1}</td>
      <td className="leaderId">{user.name}</td>
      <td className="leaderId">{user.tier}</td>
    </tr>
  ));
}

export default UserList;
