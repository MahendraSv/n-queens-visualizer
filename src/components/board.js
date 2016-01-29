var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./square');
var Queen = require('./queen');

var Board = React.createClass({
  propTypes: {
    queenPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  renderSquare: function (i) {
    var x = i % 8;
    var y = Math.floor(i / 8);
    var black = (x + y) % 2 === 1;

    var queenX = this.props.queenPosition[0];
    var queenY = this.props.queenPosition[1];
    var piece = (x === queenX && y === queenY) ?
      <Queen /> :
      null;

    return (
        <Square black={black} key={i} boardSize={this.props.boardSize}>
          {piece}
        </Square>
    );
  },

  render: function () {
    var squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return <div className="board">{squares}</div>
  }
});

module.exports = Board;
