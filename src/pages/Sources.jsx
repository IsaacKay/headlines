import React from 'react';
import sourcesStore from '../stores/SourcesStore';
import SourcesActions from '../actions/Actions';
import Source from '../components/Source.jsx';

/**
 * @description A react component  that renders a list of news Sources
 */
export default class Sources extends React.Component {
  /**
   * Intializes state
   */
  constructor() {
    super();
    this.handleSearchSource = this.handleSearchSource.bind(this);
    this.searchSource = this.searchSource.bind(this);
    this.state = { sources: [] };
  }
  /**
   * @description Used in  component did mount to get news sources and set
   * sources state
   * @returns {void}
   */
  getAllNewsSources() {
    const sources = sourcesStore.getAllNewsSources();
    this.setState({ sources });
  }
  /**
   * @description Dispatch CREATE_SOURCES action and
   * set sources state
   * @returns {void}
   */
  componentWillMount() {
    SourcesActions.getSources();
    sourcesStore.on('change', this.getAllNewsSources.bind(this));
  }
  /**
   * @description Maps array of source object into array of source components
   * @returns {JSX.Element[]} Array of news sources elements
   */
  makeActualSourcesComponents() {
    let sources = this.state.sources;
    sources = sources.map((source) => {
      const sourceComponent = (<Source source={source} key={source.id} />);
      return sourceComponent;
    });
    return sources;
  }
  /**
   * @description searches through sources name. Creates new state
   * with search result.
   * set component's state to search result
   * search is implemented through javascript regular expression
   * @param {string} searchTerm - Search Terms
   * @param {object[]} sources - Array of news sources
   * @returns {void}
   */
  searchSource(searchTerm, sources) {
    // change searchTerm to regular expression
    searchTerm = new RegExp(searchTerm, 'i');
    const searchResult = sources.filter((source) => {
      // get rid of special characters in sourceName
      const sourceName = source.name.replace(/[^a-z0-9\s]/ig, '');
      const isSearchTermPresent = searchTerm.test(sourceName);
      return isSearchTermPresent;
    });
    this.setState({ sources: searchResult });
  }
  /**
   * @description - Gets all news sources if nothing is searched.
   * Searches through source and sets this.state.sources to search result;
   * @param {Event} event - javascript event
   * @returns {void}
   */
  handleSearchSource(event) {
    const searchTerm = event.target.value;
    const sources = this.state.sources;
    // if sources is empty or nothing is searched
    if (sources.length < 1 || !searchTerm) {
      this.getAllNewsSources();
    } else {
      this.searchSource(searchTerm, sources);
    }
  }
  /**
   * @description Renders an array of sources
   * @return {JSX.Element} JSDoc containing News Sources
   */
  render() {
    const sources = this.makeActualSourcesComponents();
    return (
      <div>
        <input id="search" type="text" onChange={this.handleSearchSource} />
        {sources}
      </div>
    );
  }
}
