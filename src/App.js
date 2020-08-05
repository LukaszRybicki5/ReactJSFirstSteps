import React,  {Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters'

class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 3},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ],
    buttonTitle: "Increment",
    buttonDecrementTitle: "Decrement",
 };

 handleDelete = (counterId) =>{
    console.log("delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

handleReset = () =>{
   const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;    
    this.setState({ counters })
    console.log("klik", counter);
};

handleDecrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;    
    this.setState({ counters })
    console.log("klik", counter);
}

  render(){
  return (
    <div>
      <React.Fragment>
      <Navbar/>
      <main className="container">
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      />
      </main>
      </React.Fragment>
    </div>
  );
  }
}
export default App;
