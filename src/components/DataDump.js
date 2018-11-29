import React, { Component } from 'react';

class DataDump extends Component {

    render() {
        return (
            <div>
                <div>Data dump</div>
                <textarea className="dump-text" value={this.props.raw} onChange={()=>{}}>
                </textarea>
            </div>
        );
    }
}

export default DataDump;