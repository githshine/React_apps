function ProfilePicture () {
  const imgUrl = "/src/assets/peofilePic.png";
  const handleClick = (e) => e.target.style.display = "none";
  return <img src={imgUrl} onClick={(e) => handleClick(e)} ></img>;
}

export default ProfilePicture;