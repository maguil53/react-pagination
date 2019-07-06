import React from 'react';
import './CardComponent.css'

class CardComponent extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="author">
                    <p>Author: {this.props.author}</p>
                </div>
                <div className="content">
                    <p>{this.props.content}</p>
                </div>    
            </div>
        )
    }

}

export default CardComponent;