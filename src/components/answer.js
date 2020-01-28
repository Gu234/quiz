import React, { Component } from 'react';

export default class extends Component {
    state = {
        isClicked: false
    }

    render() {
        const { children } = this.props;
        return <button onClick={this.handleClick}
            className={this.className()}
            disabled={this.isDisabled()}
        >{children}</button>
    }

    handleClick = () => {
        this.setState({ isClicked: true });
        this.props.onClick()
    }

    className() {
        if (this.state.isClicked)
            if (this.props.is_correct_answer)
                return 'green'
            else
                return 'red'
        else
            if (this.props.is_correct_answer && this.props.isSelectedAnswer)
                return 'green'
    }

    isDisabled() {
        return this.props.isSelectedAnswer
    }
}