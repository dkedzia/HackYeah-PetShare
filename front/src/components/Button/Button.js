import React from "react"
import "./button.scss"

class Button extends React.Component
{
    render() {
        return (
            <div className="button">
                {this.props.content}
            </div>
        );
    }
}

export default Button
