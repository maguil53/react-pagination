import React from 'react';
import './PageNav.css';

class PageNavComponent extends React.Component {

    /*
        current is used to figure out which button is currently selected.
        Binding the onClick listeners is required to that the methods know 
        what "this" (PageNavComponent instance) is referring to.
    */
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            currentButtons: this.getInitialButtons(),
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
    }

    /*
        Create buttons based on the numOfArticles and the number of articlesPerPage.
        If the numbOfArticles has a remainder, add an extra button.
    */
    getNumOfButtons() {
        let numOfButtons = Math.floor(this.props.numOfArticles / this.props.articlesPerPage);
        const hasRemainder = this.props.numOfArticles % this.props.articlesPerPage !== 0;

        if(hasRemainder) {
            numOfButtons++;
        }

        return numOfButtons;
    }

    /*
        Gets the initial set of buttons. If numOfButtons > 5 then we grab the first
        5 buttons, because we want to display 5 at a time if possible.
    */
    getInitialButtons() {
        let buttonNums = [];
        const numOfButtons = this.getNumOfButtons();

        if(numOfButtons > 5) {
            buttonNums.push(0,1,2,3,4);
        } else {
            for(let i = 0; i < this.getNumOfButtons(); i++){
                buttonNums.push(i);
            }
        }

        return buttonNums;
    }
    

    createButton(buttonIndex, isSelected) {
        return(
            // buttonIndex starts at 0 (Which is why we add 1)
            <button 
                key={buttonIndex}
                onClick={() => this.handleClick(buttonIndex)}
                className={isSelected ? 'highlighted' : null}
            >
                {buttonIndex + 1}
            </button>
        );
    }


    handleClick(buttonIndex) {
        /*
            Update the index of the last article that's displayed.
            This is sent to App component's updateArticles() to update
            the next set of articles displayed.
        */
        const lastArticleIndex = (buttonIndex + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);

        let updatedCurrentButtons = [];
        const numOfButtons = this.getNumOfButtons();
        /* 
            We're using 5 here bc we only want to display a maximum of 5 buttons
            before using Next and Prev buttons.
        */ 
        if(buttonIndex < numOfButtons - 5) {
            /*
                The selected button will be the first of 5 buttons displayed.
                If numOfbuttons < 5, then the else-if statement will be executed.
            */
            for(let i = 0; i < 5; i++) {
                updatedCurrentButtons.push(buttonIndex + i);
            }
        } else if (buttonIndex >= numOfButtons - 5) {
            /*
                If buttonIndex is within the last 5 possible buttons,
                then updatedCurrentButtons will display the last 5 buttons.

                However, if numOfButtons < 5, then we use the old 
                currentButtons because we can't grab the last
                5 buttons (Bc there's not enough buttons to grab).
                numOfButtons decreases as the articlesPerPages increases.
                
            */
            if(numOfButtons < 5) {
                // Use old currentButtons.
                updatedCurrentButtons = this.state.currentButtons;
            } else {
                // Display the last 5 buttons.
                const fifthToLast = numOfButtons - 5;
                for(let i = 0; i < 5; i++) {
                    updatedCurrentButtons.push(fifthToLast + i);
                }
            }   
        }
        
        this.setState({
            current: buttonIndex,
            currentButtons: updatedCurrentButtons,
        });
    }


    /*
        Increment/Update "currentButtons" by 1. However, if we're already displaying the 
        last 5 buttons. Then only update "current".
    */
    incrementButton() {
        const updatedCurrentButtons = this.state.currentButtons.map(x => x + 1);
        const updatedCurrent = this.state.current + 1;

        /* 
            Using updatedCurrent, call the callback in our props object.
            This will execute App component's updateArticle()
        */
        const lastArticleIndex = (updatedCurrent + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);

        if(this.state.current < this.getNumOfButtons() - 5) {
            this.setState({
                current: updatedCurrent,
                currentButtons: updatedCurrentButtons,
            });
        } else {
            this.setState({
                current: updatedCurrent,
            });
        }    
    }


    /*  
        Similar to incrementButton(), except we decrement currentButtons by 1.
        However, if the first element in updatedCurrentButtons is -1, then we only
        update "current".
    */
    decrementButton() {
        const updatedCurrentButtons = this.state.currentButtons.map(x => x - 1);
        const updatedCurrent = this.state.current - 1;

        const lastArticleIndex = (updatedCurrent + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);

        if(updatedCurrentButtons[0] === -1) {
            this.setState({
                current: updatedCurrent,
            }); 
        } else {
            this.setState({
                current: updatedCurrent,
                currentButtons: updatedCurrentButtons,
            });
        }
    }


    render() {
        let navButtons = [];
        /*
            Display the "Prev" button if we're not on the first button.
            We're using -1 as a key bc no other button will be using it as its key.
        */
        if(this.state.current !== 0) {
            navButtons.push(
                <button key={-1} onClick={this.decrementButton}>Prev</button>
            );
        }
           
        // Dynamically create buttons based on currentButtons 
        this.state.currentButtons.forEach(index => {
            if(index === this.state.current) {
                // Currently selected button (Pass true)
                navButtons.push(this.createButton(index, true));
            } else {
                navButtons.push(this.createButton(index, false));
            }
        });

        /*
            Display the "Next" button if we're not on the last button.
            We're using -1 as a key bc no other button will be using it as its key.
        */
        if(this.state.current !== (this.getNumOfButtons() - 1)) {
            navButtons.push(
                <button key={-2} onClick={this.incrementButton}>Next</button>
            );
        }

        return (
            <div>
                {navButtons}
            </div>
        )
    }
}

export default PageNavComponent;