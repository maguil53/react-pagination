import React from 'react';
import './App.css';
import { data } from './news.js'
import CardComponent from './CardComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <CardComponent articles={this.state.data} />
      </div>
    )
  }


};

// function App() {

//   console.log(data[0].content); // Works!

//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

export default App;
