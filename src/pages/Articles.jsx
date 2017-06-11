import React from 'react';
import shortid from 'shortid';
import articlesStore from '../stores/ArticlesStore';
import Actions from '../actions/Actions';
import Article from '../components/Article.jsx';
import SortSelect from '../components/SortSelect.jsx';

/**
 * @description A react component  that renders a list of news Articles
 */
export default class Articles extends React.Component {
  /**
   * Intializes state
   */
  constructor() {
    super();
    this.dispatchArticles = this.dispatchArticles.bind(this);
    this.loadArticles = this.loadArticles.bind(this);
    this.getArticlesWithNewSort = this.getArticlesWithNewSort.bind(this);
    this.state = { articles: [], sortParams: [] };
  }
  /**
   * @description Used in  component did mount to dispatch news articles and set
   * @returns {void}
   */
  dispatchArticles() {
    const { source, sortBy } = this.props.location.query;
    this.sortParams = sortBy.split(',');
    Actions.getArticles(source, this.sortParams[0]);
  }
  /**
   * @description Used in component did mount to set Article component
   * state
   * @returns {void}
   */
  loadArticles() {
    const articles = articlesStore.getAllNewsArticles();
    const sortParams = this.sortParams;
    this.setState({ articles, sortParams });
  }
  /**
   * @description Dispatch CREATE_ARTICLES action and
   * set articles state
   * @returns {void}
   */
  componentDidMount() {
    this.dispatchArticles();
    articlesStore.on('change', this.loadArticles);
  }
  /**
   * @description Maps array of articles object into array of articles components
   * @returns {JSX.Element[]} Array of news articles elements
   */
  makeActualArticlesComponents() {
    let articles = this.state.articles;
    articles = articles.map((article) => {
      const uniqueKey = shortid.generate();
      const articleComponent = (<Article article={article} key={uniqueKey} />);
      return articleComponent;
    });
    return articles;
  }
  /**
   * @description A callback for changing sort when a new sort option
   * is clicked in select
   * @param {Event} event javascript event class
   * @returns {void}
   */
  getArticlesWithNewSort(event) {
    const sortBy = event.currentTarget.innerText;
    const source = this.props.location.query.source;
    Actions.getArticles(source, sortBy);
    const articles = articlesStore.getAllNewsArticles();
    this.setState({ articles });
  }
  /**
   * @description Renders an array of articles
   * @return {JSX.Element} JSDoc containing News articles
   */
  render() {
    const articles = this.makeActualArticlesComponents();
    return (
      <div>
        <SortSelect
          sortParams={this.state.sortParams}
          selectedIndex={this.sortSelected}
          getArticlesWithSort={this.getArticlesWithNewSort}
        />
        {articles}
      </div>
    );
  }
}
