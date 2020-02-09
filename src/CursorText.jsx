import React from 'react';

class CursorText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            wordIndex: 0,
            iterateForward: true,
            waitCounter: 0 
        }        
    }

    tick() {
        // forward hold 40x
        // rear hold 20x

        let newWordIndex = this.state.wordIndex;
        let newCount = this.state.count;
        let newWaitCounter = this.state.waitCounter;
        let newIterateForward = this.state.iterateForward;

        let currentWord = this.props.phrases[this.state.wordIndex];    

        // if holding forward, wait 40x
        // if moving forward, 4x
        // if rear, 10x
        // if moving backwards 1x

        let counterRequired = 0;
        if (newIterateForward && newCount > currentWord.length) {
            counterRequired = 40;
        } else if (newIterateForward) {
            counterRequired = 4;
        } else if (!newIterateForward && newCount === 0) {
            counterRequired = 10;
        } else {
            counterRequired = 1;
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
        if (newCount >= currentWord.length*2) {
            newWordIndex++;
            newCount = 0;

            // if at end of word array, start again
            if (newWordIndex >= this.props.phrases.length) 
                newWordIndex = 0;
        }

        if ((newIterateForward && newCount === this.props.phrases[this.state.wordIndex].length) || (newCount === 0 && !newIterateForward)) 
            newIterateForward = !newIterateForward;

        if (this.state.count > this.props.phrases[this.state.wordIndex].length){

        }

        this.setState({
            count: newCount,
            wordIndex: newWordIndex,
            waitCounter: newWaitCounter,
            iterateForward: newIterateForward
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
        if (strLength > this.props.phrases[this.state.wordIndex].length)
            strLength = (this.props.phrases[this.state.wordIndex].length*2) - strLength;
        
        let text = this.props.phrases[this.state.wordIndex].substr(0, strLength);

        return (
            <div>
                <span>{text}</span><span id="cursor">|</span>
            </div>
        );
    }
}
    
export default CursorText;