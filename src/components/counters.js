import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
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

    render() { 
        return (
            <div> 
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">RESET</button>
            {this.state.counters.map(counter => 
            <Counter
                key={counter.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counter={counter}      >    
                <h4>Title #{counter.id}</h4>
            </Counter>)}
            </div>);
    }
}
 
export default Counters;