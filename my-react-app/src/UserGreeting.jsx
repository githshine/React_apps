import PropTypes from "prop-types";

function UserGreeting(props) {
  // return (<div>
  //   <h2>Hello, {props.isLoggedIn ? props.userName : "world"}</h2>
  // </div>)

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>;
  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

  return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
}

export default UserGreeting;