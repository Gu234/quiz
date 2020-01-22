import React from 'react';

export default () => {
    const { quizState, confirmButtonContent } = this.state;
    switch (quizState) {
        case 'red':
            this.setState({ confirmButtonContent: 'Wrong answer' });
            return <button className="confirm" >{confirmButtonContent}</button>
        case 'green':
            this.setState({ confirmButtonContent: 'Correct answer' });
            return <button className="confirm" >{confirmButtonContent}</button>
        case 'check':
            return <button className="confirm">{confirmButtonContent}</button>

        default:
            break;
    }
}