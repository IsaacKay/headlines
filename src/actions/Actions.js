import dispatcher from '../dispatcher';
import HeadlinesUtils from '../utils/headlines-utils';

// Did this to improve readability
const HU = HeadlinesUtils;

/**
 * @description Actions for Sources Component
 */
export default class SourcesActions {
  /**
   * @description Dispatches CREATE_SOURCES
   * it is used as callback in this.HU.getSources
   * @param {object} response -XMLHttpRequest response from axios
   * @returns {undefined}
   */
  static handleGetSources(response) {
    const { sources } = response.data;
    dispatcher.dispatch({
      type: 'CREATE_SOURCES',
      sources
    });
  }
  /**
   * @description dispatches CREATE_SOURCES action when there is no
   * using HeadlinesUtils
   * @returns {undefined}
   */
  static getSources() {
    HU.getSources(SourcesActions.handleGetSources);
  }

  /**
   * @description Dispatches article action
   * it is used as callback in this.HU.getArticles()
   * @param {object} response -XMLHttpRequest response from axios
   * @returns {void}
   */
  static handleGetArticles(response) {
    const { articles } = response.data;
    dispatcher.dispatch({
      type: 'CREATE_ARTICLES',
      articles
    });
  }
  /**
   * @description dispatches CREATE_ARTICLES action when there is no
   * using HeadlinesUtils
   * @param {string} source - Articles news source
   * @param {string} sortBy - sort parameter
   * @returns {void}
   */
  static getArticles(source, sortBy) {
    HU.getArticles(source, sortBy, SourcesActions.handleGetArticles);
  }
}
