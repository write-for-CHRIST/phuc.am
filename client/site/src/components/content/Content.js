import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
    render() {
        const title = this.props.title
        const content = this.props.content
        const color=this.props.color

        return (
            <section className={['container', color ? color : ''].join(' ')}>
               <div className={color}>
                   <p>
                       {content}
                   </p>
                   <h1>{title}</h1>
               </div>
            </section>
        );
    }
}
export default Content;