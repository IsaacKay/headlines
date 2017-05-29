import axios from 'axios';
/**
 * This is a custom Abstraction layer that simplifies
 * api calls
 */
export default class HeadlinesUtils {
  /**
   * @return {undefined}
   * @param {function} callback -Callback that takes response as a parameter
   */
  static getSources(callback) {
    const sources = 'https://newsapi.org/v1/sources?language=en';
    axios.get(sources)
      .then(callback);
  }
}
