import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
/**
 * @description A single article component which contains
 * Article description, author's name ,url to the full article
 * article image, and time published
 */
export default class Article extends React.Component {
  /**
   * @description -Renders Article info
   * @return {JSX.Element} -div element containing article summary
   */
  render() {
    const {
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt
    } = this.props.article;
    return (
      <div>
        <Col md={6} sm={12}>
          <Thumbnail
          alt="artilcle image"
          src={urlToImage}
          className="article-image">
            <h3>{title}</h3>
            <div className="desc-container">
              <p>{description}</p>
            </div>
            <h6>Published At: {publishedAt}</h6>
            <a href={url} target="blank">Open in browser</a>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
