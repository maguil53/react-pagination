import React from 'react';

class paginateComponent extends React.Component {
    // constructor is just used to initialize your values.
    // Calculate everything in a separate function.
    // Then call that function in render() before returning
    // your final result.
    
    createButton(buttonNum) {
        return(
            // buttonNum starts at 1
            <button key={buttonNum} onClick={() => this.props.onClick(buttonNum * 5)}>{buttonNum}</button>
        );
    }

    render() {
        /*
            Create buttons based on the number of articles.
            If the number is not perfectly divisible by 5 (hasRemainder),
            then we add an extra button.
        */
        let navButtons = [];
        const numOfButtons = Math.floor(this.props.numOfArticles / 5);
        const hasRemainder = this.props.numOfArticles % 5 !== 0;

        let i = 0;
        for(i; i < numOfButtons; i++) {
            navButtons.push(this.createButton(i + 1));
        }

        // Add last button
        if(hasRemainder) {
            navButtons.push(this.createButton(i + 1));
        }

        return (
            <div>
                {navButtons}
            </div>
        )
    }
}

export default paginateComponent;