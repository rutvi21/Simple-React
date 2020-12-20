// React Imports
import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

class Output extends Component {
    reverseString(input) {
        return input.split('').reverse().join('');
    }

    render() {
        return (
            <div className = 'container'>
                <div className="row">
                    Output Reverse: {this.reverseString(this.props.submittedValue)}
                </div>
                <div className="row">
                    Output: {this.props.submittedValue}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

// Connecting mapStateToProps lets this component get state from the Redux Store as this.props
export default connect(mapStateToProps)(Output);