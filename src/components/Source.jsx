import React from 'react';
import { Link } from 'react-router';

/**
 * @description - A Component for a Single News source.
 * This component contains
 * 1. Link  that leads to articles in the source
 * 2. Category of Source
 * 3. Description of source
 * 4. Link that leads to source website
 * Other props includes sortParams
 */
export default class Source extends React.Component {
  /**
   * @returns {React.Component} - renders single News Source Component
   */
  render() {
    const {
      name,
      id,
      category,
      url,
      sortBysAvailable,
      description } = this.props.source;

    const comp = (
      <div>
        <Link to={`/sources/:${id}/:${sortBysAvailable}`}><h3>{name}</h3></Link>
        <br />
        <h5>Category: {category}</h5>
        <p>{description}</p>
        <a href={url}>Goto Website</a>
      </div>
    );
    return comp;
  }
}
