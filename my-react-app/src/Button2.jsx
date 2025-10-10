function Button2() {

  const handleClick = (e) => 
          e.target.textContent == "Changed textContent" 
          ? (e.target.textContent = "Click me 😊") 
          : e.target.textContent = "Changed textContent" ;

  return (<button onClick={(e) => handleClick(e)}>Click me 😊</button>);
}

export default Button2;