import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }
    renderHtml() {
        if (this.props.winner) {
            return (<h2>Ganador es {this.props.winner}</h2>)
        } else {
            return this.props.player ?
                <h2>Siguiente jugador {this.props.player}</h2> :
                <Player player={(e) => this.handleSetPlayer(e)} />
        }
    }
    render() {
        return (<span>{this.renderHtml()}</span>)
    }
}

export default Status;