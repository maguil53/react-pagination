import React from 'react';
import './CardComponent.css'

class CardComponent extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="title-container">
                    <p className="title">{this.props.title}</p>
                </div>
                <div className="author-container">
                    <p className="author">Author: {this.props.author}</p>
                </div>

                

                <div className="content-container">
                    <div className="line"></div>
                    <p>{this.props.content}</p>
                </div>    
            </div>
        )
    }

}

export default CardComponent;