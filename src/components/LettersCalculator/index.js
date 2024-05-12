// // Write your code here.
// import {Component} from 'react'

// import './index.css'

// class LettersCalculator extends Component {
//   state = {
//     inputPhrase: '',
//   }

//   onChangeInput = event => {
//     const {value} = event.target
//     this.setState({inputPhrase: value})
//   }

//   render() {
//     const {inputPhrase} = this.state

//     return (
//   <div className="background-container">
//     <div className="content">
//       <h1 className="heading">
//         Calculate the
//         <br /> Letters you <br />
//         enter
//       </h1>
//       <label htmlFor="phrase" className="label">
//         Enter the phrase
//       </label>
//       <input
//         type="text"
//         id="phrase"
//         placeholder="Enter the phrase"
//         value={inputPhrase}
//         onChange={this.onChangeInput}
//         className="inputElement"
//       />
//       <p type="button" className="button">
//         No.of letters: {inputPhrase.length}
//       </p>
//     </div>
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
//       alt="letters calculator"
//       className="img"
//     />
//   </div>
//     )
//   }
// }

import {useState} from 'react'
import './index.css'

const LettersCalculator = () => {
  const [inputPhrase, setInputPhrase] = useState('')

  const onChangeInput = event => {
    setInputPhrase(event.target.value)
  }

  return (
    <div className="background-container">
      <div className="content">
        <h1 className="heading">
          Calculate the
          <br /> Letters you <br />
          enter
        </h1>
        <label htmlFor="phrase" className="label">
          Enter the phrase
        </label>
        <input
          type="text"
          id="phrase"
          placeholder="Enter the phrase"
          value={inputPhrase}
          onChange={onChangeInput}
          className="inputElement"
        />
        <p type="button" className="button">
          No.of letters: {inputPhrase.length}
        </p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
        className="img"
      />
    </div>
  )
}
export default LettersCalculator
