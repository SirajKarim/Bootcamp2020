// import React from "react";
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import Lifecycle from "./components/lifecyclemethods";

// const list = [
//   {
//     title: "React",
//     url: "https://facebook.github.io/react/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Redux",
//     url: "https://github.com/reactjs/redux",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

// function isSearched(searchTerm) {
//   return function (item) {
//     return (
//       !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { list, searchTerm: "" };
  // }

  // onDismiss = (id) => {
  //   const isNotId = (item) => item.objectID !== id;
  //   const updatedlist = this.state.list.filter(isNotId);
  //   this.setState({ list: updatedlist });
  // };
  // onSearchChange = (event) => {
  //   this.setState({ searchTerm: event.target.value });
  // };
  render() {
    // const { searchTerm, list } = this.state;
    return (
      <div>
        {/* <Login /> */}

        {/* <Dashboard /> */}
        <Lifecycle />

        {/* <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>

        {this.state.list
          .filter(isSearched(this.state.searchTerm))
          .map((item) => (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          ))} */}
      </div>
    );
  }
}

export default App;

// function App() {
//   const helloworld = "Hello World";
//   return (
//     <div className="App">
//       {/* <h2>Welcome to React</h2> */}

//       <h2>{helloworld}</h2>
//     </div>
//   );
// }

// export default App;
