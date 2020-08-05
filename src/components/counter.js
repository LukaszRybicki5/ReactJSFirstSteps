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
/*
    state = {
         value: this.props.counter.value,
         tags: ['tag1', 'tag2', 'tag3'],
         buttonTitle: "Increment",
         buttonDecrementTitle: "Decrement",
        };
*/
    styles = {
        fontSize: '25px',
        fontWeight: 'bold'
    };    

    render() { 
        let classes = this.getBadgeClasses();

        return( 
            <React.Fragment>
                <div>
                    {this.props.children}
                <span style={this.styles} className={classes}>{this.formatCount()}</span>

        <button onClick={() => this.props.onIncrement(this.props.onIncrement)} className="btn btn-secondary btn-sm m-2">+</button>

        <button onClick={() => this.props.onDecrement(this.props.onDecrement)} className="btn btn-warning btn-sm m-2">-</button>

        <button 
        onClick={() => this.props.onDelete(this.props.onDelete)}
        className="btn btn-danger m-2">
        REMOVE
        </button>     
                </div>
            </React.Fragment>
            );
    }
}
 
export default Counter;