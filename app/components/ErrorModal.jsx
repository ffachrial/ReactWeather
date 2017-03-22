import React from 'react';

export default class ErrorModal extends React.Component {
  componentDidMount () {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render () {
    const { title, message } = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
};

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};
