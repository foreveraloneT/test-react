import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ShowPage } from '../../components'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/pages'

class ShowPageContainer extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ! (this.props.page === nextProps.page)
  }

  render() {
    const { id, title, content } = this.props.page

    return (
      <ShowPage
        id={id}
        title={title}
        content={content} />
    )
  }

  componentDidMount() {
    const { onLoadPage, params: { id } } = this.props
    onLoadPage(id)
  }
}

const mapStateToProps = (state, ownProps) => ({
  page: getPageById(state, ownProps.params.id)
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
)(ShowPageContainer)
