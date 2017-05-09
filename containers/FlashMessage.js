import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FlashMessage } from '../components'
import { getFlashMessage } from '../reducers/pages'

class FlashMessageContainer extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.message !== nextProps.message
  }

  render() {
    return (
      <FlashMessage message={this.props.message} />
    )
  }
}

const mapStateToProps = (state) => ({
  message: getFlashMessage(state)
})

export default connect(
  mapStateToProps
)(FlashMessageContainer)
