import React, { Component } from 'react';

class Player extends Component {

    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>
                <label>
                    Jugador X
                <input type="radio" name="player" value="X" />
                </label>
                <label>
                    Jugador O
                <input type="radio" name="player" value="O" />
                </label>
                <input type="submit" value="Comenzar" />
            </form>
        )
    }
}

export default Player;