import React from 'react';

const MyName = ({name}) => {
    return (
        <div>
            Hello, My Name is {name}.
        </div>
    )
}

export default MyName;

/*
import React, {Component} from 'react';

class MyName extends Component{
    render(){
        return (
            <div>
                Hello! My Name is <b>{this.props.name}</b>.
            </div>
        );
    }   
}

MyName.defaultProps = {
    name : 'basic name'
}
export default MyName;
*/