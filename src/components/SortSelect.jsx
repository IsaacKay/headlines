import React from 'react';
import shortid from 'shortid';

/**
 * @description Articles subComponent which contains buttons for
 * responsible for changing the way news articles are sorted
 */
export default class SortSelect extends React.Component {
  /**
   * @description renders select buttons for changing article sorts
   * @returns {void}
   */
  render() {
    const sortParams = this.props.sortParams;
    const selectedIndex = this.props.selectedIndex;
    const sortSelectOptions = sortParams.map((sortParam) => {
      const optionElement = (<button
        key={shortid.generate()}
        onClick={this.props.getArticlesWithSort}>
        {sortParam}
      </button>);
      return optionElement;
    });
    const sortSelect = (
      <div value={selectedIndex} ref="sortSelect">
        {sortSelectOptions}
      </div>
    );
    return sortSelect;
  }
}
