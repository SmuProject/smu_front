import React from "react";

function User({ user, id }) {
  return (
    <div className="leaderList">
      <p className="leaderRank">{id}</p>
      <p className="leaderId">{user.name}</p>
      <p className="leaderId">{user.tier}</p>
    </div>
  );
}

function UserList({ users }) {
  const userList = users.map((user, index) => (
    <User user={user} id={index + 1} />
  ));
  return <div>{userList}</div>;
}

export default UserList;
