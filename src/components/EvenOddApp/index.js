// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  generateRandomNumber = () => {
    this.setState({
      count: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    const ele = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count-heading"> Count {count} </h1>
          <p className="count-msg"> Count is {ele} </p>
          <button
            type="button"
            onClick={this.generateRandomNumber}
            className="increment-button"
          >
            Increment
          </button>
          <p className="random-msg">
            * Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
