import React from 'react';
import './App.css';
import { articles } from './articles.js'
import CardComponent from './CardComponent';
import PageNavComponent from './PageNavComponent';

// *******************************
// Later on we need to fix the hardcoded "5" value
// and store it in a variable somewhere just so the developer
// can decide how many articles they want displayed on each page.
class App extends React.Component {
  // constructor is just used to initialize your values.
  // Calculate everything in a separate function.
  // Then call that function in render() before returning
  // your final result.

  // Remember that calling this.setState()
  // tells React to call render() again....
  // SO! any data that needs to make everything render again
  // should belong to this.state!
  constructor(props) {
    super(props);

    /*
      numOfArticles is inside our state object because PageNavComponent
      needs to re-render the number of buttons to display if we get a reponse
      with a large or small number of values. (For now we're just using a fixed
      size from our articles.js file AKA our dummy data).
    */
    this.state = {
      numOfArticles: articles.length,
      firstArticleIndex: 0,
      /* 
        If the number of articles is greater than 5, then
        get first 5 articles. Else, get what we can.
      */
      lastArticleIndex: (articles.length > 5) ? 5 : articles.length - 1,
    }

    this.updateArticles = this.updateArticles.bind(this);
  }

  /*
    This method will be sent PageNavComponent as a callback function.
    Once the user clicks on a "pagination button" (for a lack of better words),
    it will execute this callback. This method is responsible for updating the indices
    of the first and last article that we want to display. React will call render() again
    with the updated state values, and will ultimately update currentArticles.
  */
  updateArticles(lastIndex) {
    // Called from createButton() in PageNavComponent
    this.setState({
      firstArticleIndex: lastIndex - 5,
      lastArticleIndex: lastIndex
    });

  }

  render() {
    /* 
      Updating first/lastArticleIndex will make React call this function again
      and send the updated "currentArticles" to our CardComponents.
      Meanwhile our CardComponent only needs to worry about displaying the data
      that's passed in through the props object, without needing to manage state.
    */

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
          <PageNavComponent numOfArticles={this.state.numOfArticles} onClick={i => this.updateArticles(i)} />
        </div>
      </div>
    )
  }
};


export default App;
