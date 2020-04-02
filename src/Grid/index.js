import React from "react";
import Square from "../Square";
import './styles.css'
class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true,
            status: 'Player X turn'
        }
    }

    handleClick(index) {
        let squaresCopy = this.state.squares.slice();
        if(squaresCopy[index] !== null){
            return;
        }
        squaresCopy[index] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            squares: squaresCopy,
            isXNext: !this.state.isXNext,
            status: !this.state.isXNext ? 'Player X turn' : 'Player O turn'
        })
    }

    getGridRow(offset) {
        return (
            <div className="grid-row">

                <Square value={this.state.squares[offset + 0]} squarePressed={() => this.handleClick(offset + 0)}/>

                <Square value={this.state.squares[offset + 1]} squarePressed={() => this.handleClick(offset + 1)}/>
                <Square value={this.state.squares[offset + 2]} squarePressed={() => this.handleClick(offset + 2)}/>
            </div>
        );
    }

    render() {
        return (
            <div className="grid">
                <p>{this.state.status}</p>
                {this.getGridRow(0)}
                {this.getGridRow(3)}
                {this.getGridRow(6)}

            </div>
        );
    }
}

export default Grid;