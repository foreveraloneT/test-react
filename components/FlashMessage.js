import React, { PropTypes } from 'react'

const FlashMessage = ({
  message = ''
}) => (
  <div>
    {message}
  </div>
)

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default FlashMessage
