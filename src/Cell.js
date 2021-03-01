import React from 'react';


export default class Matrix extends React.Component {

    constructor(props) {
        super()
        this.state ={
            color: props.value
        }
    }

    render() {
        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }
}