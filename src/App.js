import React from 'react';
import './App.css';
import { articles } from './articles.js'
import CardComponent from './CardComponent';
import PageNavComponent from './PageNavComponent';


// Create currentArticles here.
// These will be passed as a prop to the cardComponent.
// This way, card component only has to worry about displaying
// the articles.

// Meanwhile, we'll pass in a prop/function from App Component to 
// a different component (Say pageNavComponent)...so that this
// component calls the callback whenever the user clicks on one of the
// page list>buttons.....this callback function will update App's "currentArticles"
// and thus update CardComponent without any extra work.


// numOfArticles = articles.length 
// (This needs to be part of state, because what if a user wants to make an
// api request and there's a different number of articles?? Cmon Marco -.-)
//    We are going to use first/lastArticleIndex to
//    figure out the next set of 5 articles we're going 
//    to display
// firstArticleIndex = 0;
//    If the number of articles is greater than 5, then
//    lastArticleIndex starts at 5. Else, we just simply
//    use numOfArticles to determine how many articles we're
//    going to display.
// lastArticleIndex = (numOfArticles > 5) ? 5 : numOfArticles - 1;

// This is what is going to be updated by the godamn problem below
// currentArticles = articles.splice(firstArticleIndex, lastArticleIndex)


// 1(5)    2(5)    3(5)    4(5)    5(3)    (Total 23)
// hasRemainder = true;
// if(hasRemainder) { render 5 }

// firstArticleIndex = lastArticleIndex
// (Why? because splice() doesn't include the index of 2nd argument)

// We're going to pass numOfArticles to pageNavComponent....
// We're going to use numOfArticles to build links dynamically....
// each list>buttons will have some kind of KEY... 
// this key will be 5, 10, 15, 20, or (if(hasRemainder){ 24 })
// THEN!! This will be returned to App to update lastArticleIndex
// based on the list>button's key

// Create each of these list>buttons dynamically with a map() function.
// Give them each a key
// by incrementing by 5 
// 1(0-5)    2(5-10)    3(10-15)    4(15-20)    5(20-24)    (Total 23)

// *** BUT!! Remember that the key can't be accessed (I think let's double check)
// *** Therefore we might have to create a property to keep track of the key/lastIndex

// WOW I"M SO DUMB!
// just use onClick(() => this.props.handleClick(lastIndex))
// lastIndex will be updated with each iteration, adding 5...and 
// (if the numberOfArticles has a remainder when dividing by 5) add the
// remainder

// Say we have 20 articles and we're displaying 0-5 (5 articles non-inclusive).
// "lastArticleIndex" is 5.....then we highlight 1...
//
// Say we have 20 articles and we're displaying 5-10 (5 articles non-inclusive).
// "lastArticleIndex" is 10.....then we highlight 2...
//
// Say we have 20 articles and we're displaying 5-7 (2 articles non-inclusive).
// "lastArticleIndex" is 7.....then we highlight 2...



// incrementIndex = length % 5 ....should be 0,1,2,3, or 4

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
      And send the proper "currentArticles" to our CardComponents
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
        {/* <header className="App-header">
        </header> */}

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
