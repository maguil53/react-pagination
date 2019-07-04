import React from 'react';

class CardComponent extends React.Component {

    render() {
        return (
            <div>
                {/* <h1>Title:</h1>
                <p>{this.props.title}</p> */}
                <h2>Author:</h2>
                <p>{this.props.author}</p>
                {/* <h2>Content:</h2>
                <p>{this.props.content}</p> */}
            </div>
        )
    }

}

export default CardComponent;