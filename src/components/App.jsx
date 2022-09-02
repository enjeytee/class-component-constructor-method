import React from "react"

/**
 * Challenge: convert the class fields and arrow methods
 * to make use of the class `constructor` method.
 * 
 * 1. Add a constructor() method
 * 2. Call super()
 * 3. Initialize your state inside the constructor
 * 4. Convert your arrow function class methods back to
 *    regular class methods
 * 5. Bind those class methods in the constructor method
 */

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
    }    
    add() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    subtract () {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    render() {
        return (
            <div className="counter">
                <button className="counter--minus" onClick={this.subtract}>–</button>
                <div className="counter--count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </div>
        )
    }
}

/*
import React from "react"

export default class App extends React.Component {
    
     * If you can't use class fields in your class components
     * for some reason, then you'll need to make use of the
     * class' `constructor` method to initialize your state object.
     * The first line of the constructor method should be a call
     * to `super()` like you see below, and then you can add your
     * state variable as a property attached to `this`
    
    constructor(props) {
        super(props)
        this.state = {
            goOut: "Yes"
        }
        this.toggleGoOut = this.toggleGoOut.bind(this)
    }
    
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the 
     * constructor above.
        
    toggleGoOut() {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }
    
    render() {
        return (
            <div className="state">
                <h1 className="state--title">Should I go out tonight?</h1>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
*/