import profilePic from "./assets/peofilePic.png"
import xia from "./assets/xia.png"

function Card() {
  return (<div className="card">
    <img className="card-image" src={profilePic} alt="profile picture"></img>
    <h2 className="card-title">Xia H</h2>
    <p className="card-text">I learn how to write front-end website</p>
  </div>)
}

export default Card;