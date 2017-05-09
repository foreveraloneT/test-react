import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Pages } from '../../components'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { loadPages } from '../../actions/page'

class PagesContainer extends Component {
  // state = {
  //   pages: [],
  // }

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired,
  }

  onReloadPages = () => {
    this.props.onLoadPages()
    // fetch(PAGES_ENDPOINT)
    //   .then((response) => response.json())
    //   .then((pages) => this.setState({ pages }))
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return ! (this.state.pages === nextState.pages)
    return this.props.page !== nextProps.pages
  }

  render() {
    return (
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages} />
    )
  }

  componentDidMount() {
    this.onReloadPages()
  }
}

// state of store
const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)
