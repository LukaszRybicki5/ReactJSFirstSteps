import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
   
    render() { 
        return (<div> 
            <button 
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2">
            RESET
            </button>
            {this.props.counters.map(counter => 
            <Counter 
                key={counter.id} 
                counter={counter}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}>    
                <h4>Title #{counter.id}</h4>
            </Counter>
            
            )}
            </div>);
    }
}
 
export default Counters;