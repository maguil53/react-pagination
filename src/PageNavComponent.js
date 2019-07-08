import React from 'react';
import './PageNav.css';


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
        let numOfButtons = Math.floor(this.props.numOfArticles / 5);
        const hasRemainder = this.props.numOfArticles % 5 !== 0;

        // Need an extra button.
        if(hasRemainder) {
            numOfButtons++;
        }

        return numOfButtons;
    }


    getInitialButtons() {
        let buttonNums = [];
        const numOfButtons = this.getNumOfButtons();

        if(numOfButtons > 5) {
            buttonNums.push(0,1,2,3,4);
        } else {
            for(let i = 0; i < this.state.numOfButtons; i++){
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
    handleClick(buttonIndex) {
        let updatedCurrentButtons = [];
        const numOfButtons = this.getNumOfButtons();
        
        /*
            We're using 5 here bc of a different reason than
            below. This is sent back to App component's 
            updateArticles() bc this let's us figure out what 5
            articles to display. (Bc we only want to show 5 articles
            at a time)
        */
        const lastArticleIndex = (buttonIndex + 1) * 5;
        this.props.onClick(lastArticleIndex);

        // We're using 5 here bc we only want to display 5 buttons
        // before using Next and Prev buttons.
        if(buttonIndex < numOfButtons - 5) {
            // If user clicks 1 (index 0), then 
            // updatedCurrentButton = [0, 1, 2, 3, 4] AKA (1, 2, 3, 4, 5)
            for(let i = 0; i < 5; i++) {
                updatedCurrentButtons.push(buttonIndex + i);
            }
        } else if (buttonIndex >= numOfButtons - 5) {
            // Display the last 5 buttons.
            const fifthToLast = numOfButtons - 5;
            for(let i = 0; i < 5; i++) {
                updatedCurrentButtons.push(fifthToLast + i);
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
        const lastArticleIndex = (updatedCurrent + 1) * 5;
        this.props.onClick(lastArticleIndex);
        /*
         *  If the user clicks the "next" button, but we're already
         *  displaying the last 5 buttonss possible, then only update current.
         */
        if(this.state.current < this.getNumOfButtons() - 5) {
            console.log("True!");
            this.setState({
                current: updatedCurrent,
                currentButtons: updatedCurrentButtons,
            });
        } else {
            console.log("False!");
            this.setState({
                current: updatedCurrent,
            });
        }
            
        
    }


    decrementButton() {
        const updatedCurrentButtons = this.state.currentButtons.map(x => x - 1);
        const updatedCurrent = this.state.current - 1;

        const lastArticleIndex = (updatedCurrent + 1) * 5;
        this.props.onClick(lastArticleIndex);

        if(this.state.current > 1) {
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
           
        console.log("currentBUttons");
        console.log(this.state.currentButtons);
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