import React from 'react';
import './user-card.css';

const UserCard = ({ userData }) => {
  const {
    html_url,
    login: username,
    avatar_url,
    public_repos,
    followers,
    following,
  } = userData || {};
  return (
    <div className="userCard-container">
      <div className="userIntro">
        <img src={avatar_url} alt="avatar_img"></img>
        <a href={html_url} target="new">
          {username}
        </a>
      </div>
      <div className="userInfo">
        <p className="info">
          <span className="info-header">Public Repos</span>: {public_repos}
        </p>
        <p className="info">
          <span className="info-header">Followers</span>: {followers}
        </p>
        <p className="info">
          <span className="info-header">Following</span>: {following}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
