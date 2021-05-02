// import React from 'react';
// import './App.scss';
// import './Form.scss';

// // Header Component
// const Header = ()=>{
//   return (
//     <header>
//       <h1>RESTy</h1>
//     </header>
//   )
// }
// // Footer Component
// const Footer = ()=>{
//   return(
//     <footer>
//     <p>&copy; 2021 Boshra Jaber </p>
//   </footer>
//   )
// }
// // Form Component
// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       url: 'API URL',
//       method: 'method Default Value',
//     };
//   }
// // Handel Click:
// handleURL = (e)=>{
//   const url = e.target.value;
//   this.setState({ url });
//   localStorage.setItem("API History", JSON.stringify(url));
// }

//   render() {
//     let history = JSON.parse(localStorage.getItem('API History'))
//     console.log(history)
//     return (
//       <main>
//       <div>
//         <form>
//         <input id="url-input" type="text" onChange={this.handleURL} />
//         <button onClick={this.handleClick}>Go!</button>
        
//         <input type="radio" id="get" name="method" value="get" onClick={this.handleMethod}/>
//         <label for="get">GET</label>
//         <input type="radio" id="post" name="method" value="post" onClick={this.handleMethod}/>
//         <label for="post">POST</label>
//         <input type="radio" id="put" name="method" value="put"onClick={this.handleMethod}/>
//         <label for="put">PUT</label>
//         <input type="radio" id="delete" name="method" value="delete" onClick={this.handleMethod}/>
//         <label for="delete">DELETE</label>
//         </form>
//       </div>
//       <div>
//       <p>{history}</p>
//       </div>
//       {/* <p>{history.map((user) => (
//         <div className="user">{user}</div>
//       ))}</p>
//       </dev> */}
//       </main>
//     );
//   }
// }

// function App() {
//   return (
//     <>
//     <Header />
//     <Form />
//     <Footer />
//     </>
//   );
// }

// export default App;
