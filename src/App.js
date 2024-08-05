import React from "react";
import ReactDOM from 'react-dom';
import './App.css';

// function App() {
//   return (
//     <div>
//       <Anna/>
//       <De/>
//       <Arma/>
//     </div>
    
//   );
// }


// const Arma=()=>{
//   return(
//     <div>
//       <h1>Armas</h1>
//     </div>
//   );
// }


// const Anna=()=>{
//   return(
//     <div>
//       <h1>Anna</h1>
//     </div>
//   );


// }

// const De=()=>{
//   return(
//     <div>
//       <h1>De</h1>
//     </div>
//   );
// }


// export default App;


class MyWebsite extends React.Component{

render(){
  return <h1>Lol</h1>
}

}





ReactDOM.render(<MyWebsite/>,document.getElementById('root'));


export default MyWebsite;