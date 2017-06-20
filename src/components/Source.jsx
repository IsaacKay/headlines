import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

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
    const sortBys = sortBysAvailable.join(',');
    const comp = (
      <Col sm={10} md={10} lg={10} mdPush={1} lgPush={1} smPush={1} >
        <div className="source source-cont">
          <Link to={`articles?source=${id}&sortBy=${sortBys}`}>
            <h3>{name}</h3>
            <br />
            <h5>Category: {category}</h5>
            <p>{description}</p>
          </Link>
          <a className="ordinaryLink" href={url}>Goto Website</a>
        </div>
      </Col>
    );
    return comp;
  }
}
