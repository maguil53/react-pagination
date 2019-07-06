import React from 'react';
import './PageNav.css';


class PageNavComponent extends React.Component {
    // constructor is just used to initialize your values.
    // Calculate everything in a separate function.
    // Then call that function in render() before returning
    // your final result.

    constructor(props) {
        super(props);

        // current is used to figure out which button is currently selected.
        this.state = {
            current: 0,
        }

        // Need this so handleClick knows what this.setState() is referring to
        this.handleClick = this.handleClick.bind(this);
    }
    
    createButton(buttonNum, isSelected) {
        return(
            // buttonNum starts at 1
            <button 
                key={buttonNum}
                onClick={() => this.handleClick(buttonNum)}
                className={isSelected ? 'highlighted' : null}
            >
                {buttonNum}
            </button>
            
        );
        
    }

    /*  
        This will call the callback from the App component and
        update the current so React knows which button to highlight next.
    */
    handleClick(buttonNum) {
        const lastArticleIndex = buttonNum * 5;
        this.props.onClick(lastArticleIndex);
        
        this.setState({
            current: buttonNum - 1,
        });
    }

    render() {
        /*
            Create buttons based on the number of articles.
            If the number is not perfectly divisible by 5 (hasRemainder),
            then we add an extra button.
        */
        let navButtons = [];
        let numOfButtons = Math.floor(this.props.numOfArticles / 5);
        const hasRemainder = this.props.numOfArticles % 5 !== 0;

        // Need an extra button.
        if(hasRemainder) {
            numOfButtons++;
        }

        let i = 0;
        for(i; i < numOfButtons; i++) {
            if(i === this.state.current) {
                // Highlight this button.
                navButtons.push(this.createButton(i + 1, true));
            } else {
                navButtons.push(this.createButton(i + 1, false));
            }
        }


        return (
            <div>
                {navButtons}
            </div>
        )
    }
}

export default PageNavComponent;