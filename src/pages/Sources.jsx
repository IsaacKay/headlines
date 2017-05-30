import React from 'react';
import sourcesStore from '../stores/SourcesStore';
import SourcesActions from '../actions/SourcesActions';
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
   * @description Renders an array of sources
   * @return {JSX.Element} JSDoc containing News Sources
   */
  render() {
    const sources = this.makeActualSourcesComponents();
    return (
      <div>
        {sources}
      </div>
    );
  }
}
