import React, { Component } from 'react';

export default class extends Component {
    state = {
        isClicked: false
    }

    render() {
        const { children, id } = this.props;
        return <button onClick={() => this.handleClick()}
            className={this.className()}
            id={id}
            disabled={this.props.disabled}
        >{children}</button>
    }

    handleClick = () => {
        this.setState({ isClicked: true });
        this.props.onClick(this.props.id)
    }

    className() {
        if (this.state.isClicked)
            if (this.props.is_correct_answer)
                return 'green'
            else
                return 'red'
    }

}