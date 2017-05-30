import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * @description SourceStore stores models for Sources component.
 * It emits change event after creating source.
 */
class SourcesStore extends EventEmitter {
  /**
   * initalizes needed variables
   */
  constructor() {
    super();
    this.getAllNewsSources.bind(this);
    this.sources = [];
  }

  /**
   * @returns {object[]} -An array of all created sources
   */
  getAllNewsSources() {
    return this.sources;
  }
  /**
   * @description listens for only CREATE_SOURCE  action
   * @param {object} action -An action contains type and data
   * @returns {undefined}
   */
  handleActions(action) {
    switch (action.type) {
      case 'CREATE_SOURCES':
        this.sources = action.sources;
        this.emit('change');
        break;
      default:
      // do nothing
    }
  }
}
const sourcesStore = new SourcesStore();

dispatcher.register(sourcesStore.handleActions.bind(sourcesStore));
export default sourcesStore;
