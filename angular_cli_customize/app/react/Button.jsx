import React from 'react';
class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log(234);
    }
    render() { 
        return (  
            <button>{this.props.text || "默认"}</button>
        );
    }
}
 
export default Button;