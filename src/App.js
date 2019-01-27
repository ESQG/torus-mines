
import React, {Component} from 'react';

const N_MINES = 20;
const BOARD_WIDTH = 12;
const BOARD_HEIGHT = 10;

export default class App extends Component {
    render () {
        return <div><p>Rendered by React if working.</p>
			<Game />
        </div>
    }
}

class SquareInfo {

}

class Game extends Component {

	constructor() {
		super();
		const boardInfo = [];
		for(let i=0; i<BOARD_HEIGHT; i++) {
			let row = [];
			for (let j=0; j<BOARD_WIDTH; j++) {
				row.push({
					isMine: false,
					mineState: MineState.Revealed,
					numNeighbors: i
				});
			}
			boardInfo.push(row);
		}
		this.state = { boardInfo: boardInfo };
	}

	renderRow(row, i) {
		const tds = row.map((cell, j) => <td>{i*j}</td>);
		return <tr>{tds}</tr>;
	}

	render() {
		return <table className="board">
		<tbody>
			{this.state.boardInfo.map(this.renderRow)}
			</tbody>
		</table>;
	}


}

const MineState = {
	Secret: 0,
	Revealed: 1,
	Flagged: 2,
};

class Square extends Component {

	render() {
		const { mineState, numNeighbors, isMine } = this.props;
		let buttonContents = null;
		if (mineState == MineState.Flagged) {
			buttonContents = "!";
		}
		else if (mineState == MineState.Revealed) {
			if (isMine) {
				buttonContents = "X";
			}
			else {
				buttonContents = numNeighbors;
			}
		}
		return <button className="square">{buttonContents}</button>;
	}
}
