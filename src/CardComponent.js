import React from 'react';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const articles = this.props.articles;
        const cards = articles.map((article) => {
            return(
                <div key={article.id}>
                    <h1>{article.author}</h1>
                    <p>{article.content}</p>
                </div>
            );
        });

        return (cards)
    }
}

export default CardComponent;