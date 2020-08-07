import React, { Component } from 'react';

class Counter extends Component {
    
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'ZERO' : value;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    };

    styles = {
        fontSize: '25px',
        fontWeight: 'bold'
    };    

    render() { 
        

        return( 
          
                <div>
                    {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>

        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-warning btn-sm m-2">Decrement</button>

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">
        REMOVE
        </button>     
                </div>
           
            );
    }
}
 
export default Counter;