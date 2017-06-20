import React from 'react';
import shortid from 'shortid';
import { Button, ButtonGroup } from 'react-bootstrap';

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
    const sortSelectOptions = sortParams.map((sortParam) => {
      const optionElement = (<Button
        key={shortid.generate()}
        onClick={this.props.getArticlesWithSort}>
        {sortParam}
      </Button>);
      return optionElement;
    });
    const sortSelect = (
        <ButtonGroup className="btngroup-container">
          {sortSelectOptions}
        </ButtonGroup>
    );
    return sortSelect;
  }
}
