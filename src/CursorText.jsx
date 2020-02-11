import React from 'react';
import './CursorText.sass';

class CursorText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            wordIndex: 0,
            waitCounter: 0 
        }        
    }

    tick() {
        let newWordIndex = this.state.wordIndex;
        let newCount = this.state.count;
        let newWaitCounter = this.state.waitCounter;

        let currentWord = this.props.phrases[this.state.wordIndex];    

        // if holding forward, wait 40x
        // if moving forward, 4x
        // if rear, 10x
        // if moving backwards 1x

        let counterRequired = 0;
        if (newCount > currentWord.length && !(newCount > currentWord.length + 1)) {
            counterRequired = 35;
        } else if (newCount <= currentWord.length) {
            counterRequired = 3;
        } else if (newCount === 0) {
            counterRequired = 10;
        } else {
            counterRequired = 0;
        }

        // do we need to go to the next character
        if (newWaitCounter >= counterRequired) {
            newWaitCounter = 0;
            newCount++;
        }
        else {
            newWaitCounter++;
        }

        // are we at the end of the current word
        if (newCount > currentWord.length*2 + 1) {
            newWordIndex++;
            newCount = 0;

            // if at end of word array, start again
            if (newWordIndex >= this.props.phrases.length) 
                newWordIndex = 0;
        }

        this.setState({
            count: newCount,
            wordIndex: newWordIndex,
            waitCounter: newWaitCounter
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let strLength = this.state.count;
        if (strLength > this.props.phrases[this.state.wordIndex].length + 1) 
            strLength = (this.props.phrases[this.state.wordIndex].length*2) - strLength;
        
        let text = this.props.phrases[this.state.wordIndex].substr(0, strLength);
        let toAssign = (strLength === 0 || strLength > this.props.phrases[this.state.wordIndex].length) ? "blink" : "";

        return (
            <>
                <span>{text}</span><span id="cursor" className={toAssign}>|</span>  
            </>
        );
    }
}
    
export default CursorText;