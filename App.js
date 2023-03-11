import React,{useState} from "react";

function App() {
 
  const [life_of_player,setLife_of_player]= useState(0);
  return(
    <div className="App">
       <header> 
           <div class="nine">
             <h1>
             Counter App for mario player <span>Welcome to SuperMario </span>
            </h1>
           </div>
      </header>
      <h2>Current value of player is   {life_of_player} </h2>
      <button className="button" onClick={ () => (life_of_player >= 10? "":setLife_of_player(life_of_player+1)) }>Increase the life Of player</button>
      <button className="button"onClick={() => (life_of_player <= 0 ? "": setLife_of_player(life_of_player-1)) }>Decrease the life Of player</button>
      <button className="button"onClick={() => setLife_of_player(0)}>Reset</button>
      
    </div>
  )
}

export default App;
