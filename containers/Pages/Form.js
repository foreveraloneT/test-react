import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPage } from '../../actions/page'
import { PageForm } from '../../components'
import { connect  } from 'react-redux'


class PageFormContainer extends Component {
  static propTypes = {
    submitButtMsg: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { submitButtMsg, handleSubmit } = this.props

    return (
      <PageForm
        submitButtMsg={submitButtMsg}
        handleSubmit={handleSubmit} />
    )
  }
}

const FIELDS = ['title', 'content']

const validate = (values, props) => (
  FIELDS.reduce((errors, field) => (
    values[field] ? errors : { ...errors, [field]:'Required' }
  ), {})
)

const pageForm = reduxForm({
  form: 'page',
  validate
})(PageFormContainer)

export default connect(
  (state) => ({}),
  (dispatch) => ({
    onSubmit: (values) => dispatch(createPage(values))
  })
)(pageForm)
