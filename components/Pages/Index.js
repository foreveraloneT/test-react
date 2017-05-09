import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'
import { FlashMessage } from '../../containers'
import { Link } from 'react-router'

const Pages = ({
  pages,
  onReloadPages,
}) => (
  <div>
    <FlashMessage />
    <button
      className='button'
      onClick={() => onReloadPages()}>
      Reload Pages
    </button>
    <Link to={{ pathname: '/pages/new' }}>Create New Page</Link>
    <hr />
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          pages.map((page) => (
            <Page
              key={page.id}
              id={page.id}
              title={page.title} />
          ))
        }
      </tbody>
    </table>
  </div>
)

Pages.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired,
}

export default Pages

// export default class Pages extends Component {
//
//   static propType = {
//     pages: PropTypes.array.isRequired,
//     onReloadPages: PropTypes.func.isRequired,
//   }
//
//   render() {
//
//     const { pages, onReloadPages } = this.props
//
//     return (
//       <div>
//         <button
//           className='button'
//           onClick={() => onReloadPages()}>
//           Reload Pages
//         </button>
//         <hr />
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               pages.map((page) => (
//                 <Page
//                   key={page.id}
//                   id={page.id}
//                   title={page.title} />
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }
