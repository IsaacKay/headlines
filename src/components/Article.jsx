import React from 'react';
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
        <div>
          <img alt="artilcle image" src={urlToImage} />
        </div>
        <h3>{title}</h3>
        <h5><em>By {author}</em></h5>
        <p>{description}</p>
        <h6>Published At: {publishedAt}</h6>
        <a href={url} target="blank">Open in browser</a>
      </div>
    );
  }
}
