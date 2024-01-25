import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
	  message: state.message,
	  textColor: state.textColor
	};
  };

class Information extends Component {

  render() {
    const { message, textColor } = this.props;
    return (
      <div className="mt-8 flex m-auto justify-center items-center text-center h-12 w-96 bg-white border border-gray-500 shadow-gray-500 shadow-md" style={{ color: textColor }}>
        {message}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Information);
