import React, { PureComponent } from 'react';

class Welcome extends PureComponent {
    render() {
        return (
            <div className="section welcome masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0">Marc Berchtold</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;