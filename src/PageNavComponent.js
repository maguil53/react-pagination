import React from 'react';
import './PageNav.css';

// ************************************
//

class PageNavComponent extends React.Component {

    constructor(props) {
        super(props);
        // current is used to figure out which button is currently selected.
        this.state = {
            current: 0,
            currentButtons: this.getInitialButtons(),
        }
        // Need this so handleClick knows what this.setState() is referring to
        this.handleClick = this.handleClick.bind(this);
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
    }


    getNumOfButtons() {
        /*
            Create buttons based on the number of articles.
            If the number is not perfectly divisible by 5 (hasRemainder),
            then we add an extra button.
        */
        let numOfButtons = Math.floor(this.props.numOfArticles / this.props.articlesPerPage);
        const hasRemainder = this.props.numOfArticles % this.props.articlesPerPage !== 0;

        // Need an extra button.
        if(hasRemainder) {
            numOfButtons++;
        }

        return numOfButtons;
    }


    getInitialButtons() {
        let buttonNums = [];
        const numOfButtons = this.getNumOfButtons();

        console.log(numOfButtons);
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

    /*  
        This will call the callback from the App component and
        update the current so React knows which button to highlight next.
    */

    /**
     * There's a bug here whenever this.props.articlesPerPage > 7
     * However,
     *  this bug only shows up when we click on a button (NOT when we
     *  click on "next" button)
     * 
     *  Found the problem....
     *      there are less numberOfButtons the more
     *      articlesPerPage you have.
     * 
     *      This results in entering the "else-if" statement
     */
    handleClick(buttonIndex) {
        let updatedCurrentButtons = [];
        const numOfButtons = this.getNumOfButtons();
        
        /*
            This is sent back to App component's 
            updateArticles() bc this let's us figure out what
            number of articlesPerPage to display. 
            (Bc we only want to show x # of articles
            at a time)
        */
        const lastArticleIndex = (buttonIndex + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);

        console.log("numOfButtons");
        console.log(numOfButtons);
        console.log("buttonIndex");
        console.log(buttonIndex);
        // We're using 5 here bc we only want to display 5 buttons
        // before using Next and Prev buttons.
        if(buttonIndex < numOfButtons - 5) {
            
            // If user clicks 1 (index 0), then 
            // updatedCurrentButton = [0, 1, 2, 3, 4] AKA (1, 2, 3, 4, 5)
            for(let i = 0; i < 5; i++) {
                updatedCurrentButtons.push(buttonIndex + i);
            }
        } else if (buttonIndex >= numOfButtons - 5) {
            console.log("In!");
            // Display the last 5 buttons.
            const fifthToLast = numOfButtons - 5;

            // if fifthToLast < 0 
            // then don't update currentButtons.
            /**
             * We do this because fifth to last could be -1
             * if numOfButtons < 5, due to articlesPerPage being
             * a high number (Ex: Greater than 7)
             */
            if(fifthToLast < 0) {
                updatedCurrentButtons = this.state.currentButtons;
            } else {
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


    incrementButton() {
        const updatedCurrentButtons = this.state.currentButtons.map(x => x + 1);
        const updatedCurrent = this.state.current + 1;

        // Using updatedCurrent, we need to make sure to call the callback with
        // the new list of articles we want to display.
        const lastArticleIndex = (updatedCurrent + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);
        /*
         *  If the user clicks the "next" button, but we're already
         *  displaying the last 5 buttonss possible, then only update current.
         */
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

    // ********* The Bug is here
    // Once we reach 6,7,8, or even 9....we don't see
    // the next buttons down (5,4,3,2,1)... 
    // And I'm pretty sure the problem is here somewhere
    decrementButton() {
        const updatedCurrentButtons = this.state.currentButtons.map(x => x - 1);
        const updatedCurrent = this.state.current - 1;

        const lastArticleIndex = (updatedCurrent + 1) * this.props.articlesPerPage;
        this.props.onClick(lastArticleIndex);
        
        // ALMOST FIXED IT!!!
        // If the first item in updatedCurrentButtons === -1
        // Then we just update current because we don't want to
        // have a button display "0" or "-1"
        if(updatedCurrentButtons[0] === -1) {
            // currentButtons may contain negative values if they keep
            // clicking "previous" button.
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
            If the currently selected button is not the first, then display
            the "prev" button.
            We're using -2 as a key bc no other button will be using it as its key.
        */
        if(this.state.current !== 0) {
            navButtons.push(
                <button key={-2} onClick={this.decrementButton}>Prev</button>
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
            If the currently selected button is not the last, then display
            the "next" button.
            We're using -1 as a key bc no other button will be using it as its key.
        */
        if(this.state.current !== (this.getNumOfButtons() - 1)) {
            navButtons.push(
                <button key={-1} onClick={this.incrementButton}>Next</button>
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