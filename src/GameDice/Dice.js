import React, { Component } from 'react';
import {connect} from 'react-redux';

class Dice extends Component {
  renderDice = () => {
    return this.props.array_dice.map((dice, index) => {
      return <img key={index} className="ms-2 w3-animate-zoom" style={{ width: 70, height: 70 }} src={dice.image} alt={dice.image} />
    })
  }
  render() {
    return (
      <div>
        {this.renderDice()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      array_dice: state.StateGameDice.array_dice
  }
}

export default connect(mapStateToProps)(Dice)