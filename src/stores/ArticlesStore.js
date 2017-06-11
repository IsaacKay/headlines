import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * @description ArticlesStore stores models for Articles component.
 * It emits change event after creating Articles.
 */
class ArticlesStore extends EventEmitter {
  /**
   * initalizes needed variables
   */
  constructor() {
    super();
    this.getAllNewsArticles = this.getAllNewsArticles.bind(this);
    this.articles = [];
  }

  /**
   * @returns {object[]} -An array of all created Articles
   */
  getAllNewsArticles() {
    return this.articles;
  }
  /**
   * @description listens for only CREATE_ARTICLES  action
   * @param {object} action -An action contains type and data
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'CREATE_ARTICLES':
        this.articles = action.articles;
        this.emit('change');
        break;
      default:
      // do nothing
    }
  }
}
const articlesStore = new ArticlesStore();

dispatcher.register(articlesStore.handleActions.bind(articlesStore));
export default articlesStore;
