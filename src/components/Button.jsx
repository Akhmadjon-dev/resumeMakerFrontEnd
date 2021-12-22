import React, { Component } from 'react'
import Sty, {SmallButton, BigButton} from '../style/components/StyButton'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {

        const {size, title, icon} = this.props

        if(size === 'big'){
            return(
                <BigButton >
                    {title}
                </BigButton>
            )
        }
        
        if(size === 'small'){
            return(
                <SmallButton >
                    {icon}
                </SmallButton>
            )
        }
    
        return (
            <Sty size='default'>
                
            </Sty>
        )
    }
}
