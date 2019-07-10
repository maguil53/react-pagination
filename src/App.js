import React from 'react';
import './App.css';
import { articles } from './articles.js'
import CardComponent from './CardComponent';
import PageNavComponent from './PageNavComponent';

class App extends React.Component {
  // Initialize values in constructor.
  constructor(props) {
    super(props);

    this.state = {
      numOfArticles: articles.length,
      firstArticleIndex: 0,
      /* 
        If the number of articles is greater than articlesPerPage, then
        get first set of articles. Else, get what we can.
      */
      lastArticleIndex: (
        (articles.length > this.props.articlesPerPage) ? 
          this.props.articlesPerPage : articles.length - 1),
    }

    this.updateArticles = this.updateArticles.bind(this);
  }

  /*
    This callback will be sent PageNavComponent as a prop.
    Once the user clicks on a button (to navigate to another set of articles),
    this callback will recieve the index of the last article in the set and update
    firstArticleIndex and lastArticleIndex accordingly. 

    Calling this.setState() tells React to call render() again, since there's been a change
    in the component's state. This will ultimately update currentArticles in render();
  */
  updateArticles(lastIndex) {
    this.setState({
      firstArticleIndex: lastIndex - this.props.articlesPerPage,
      lastArticleIndex: lastIndex
    });
  }

  render() {
    // Use slice() NOT splice(). The latter modifies the original array (articles).
    let currentArticles = articles.slice(this.state.firstArticleIndex,
      this.state.lastArticleIndex);

    let cards = currentArticles.map((article) => {
      return (
        <CardComponent
          key={article.id}
          title={article.title}
          author={article.author}
          content={article.content}
        />
      );
    });

    return (
      <div className="App">

        <div className="cards">
          {cards}
        </div>

        <div className="page-nav">
          <PageNavComponent
            numOfArticles={this.state.numOfArticles}
            onClick={i => this.updateArticles(i)}
            articlesPerPage={this.props.articlesPerPage}
          />
        </div>
      </div>
    )
  }
};


export default App;
