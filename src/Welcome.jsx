import React, { PureComponent } from 'react';
import TextScramble from './TextScramble';
import './Welcome.css';

class Welcome extends PureComponent {
    constructor(props) {
        super(props);

        this.scramblerNext = this.scramblerNext.bind(this);
        this.state = {
            scramblerCounter: 0,
        };
    }

    componentDidMount() {
        this.scramblerPhrases = [
            'Echolot',
            'Marc Berchtold',
            'Echolot',
            'Echolot',
            'Marc Berchtold',
            'Marc Berchtold',
        ];
        let scramblerElement = document.querySelector('.scrambler')
        if (scramblerElement) {
            this.scrambler = new TextScramble(scramblerElement);
            this.scramblerNext();
        }
    }

    scramblerNext() {
        this.scrambler.setText(this.scramblerPhrases[this.state.scramblerCounter]).then(() => {
            this.scramblerTimeout = setTimeout(this.scramblerNext, 2000);
        });

        this.setState({
            ...this.state,
            scramblerCounter: (this.state.scramblerCounter + 1) % this.scramblerPhrases.length,
        });
    }

    render() {
        return (
            <div className="section welcome masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0">
                            <span className="scrambler"></span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;