/*
-------------------------------------------------------
-                                                     -
-                    Notes                            -
-                                                     -
- I. Handle Input Change                              -
-   A. Redundancy                                     -
-     1.Setting Handle Input Change as a parameter    -
-       for an Input function is pointless            -
-     2.Handle Input Change is super repetitive,      -
-       probably a more efficient way to do it.       - 
-                                                     -
-------------------------------------------------------

*/
import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event) {
       this.setState({ [event.target.name]: event.target.value})
       //Just to check to see if it works
       //console.log(event.target.name)
    }

    render() {
        

//<h1>{this.state.pluralNoun}</h1>
        return (
            <div className ='card'>
                <h1>{this.state.color}</h1>
                { Input('Color', this.state.color, this.handleInputChange, 'color') }
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
            </div>
        )
    }
}

export default Card;