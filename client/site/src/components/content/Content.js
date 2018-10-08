import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
    render() {
        const title = this.props.title
        const content = this.props.content
        const color=this.props.color
        const address=this.props.address
        const alight=this.props.alight
        const border=this.props.border
        

        return (
            <section className={['container', color ? color : '', alight ? alight:'', border ? border: ''].join(' ')}>
              
                   <p>
                       {content}
                   </p>
                   <p>{address}</p>
                   <h1>{title}</h1>
              
            </section>
        );
    }
}
export default Content;