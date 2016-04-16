import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <p>The <a href="http://www.downtownsdmobility.com/app_pages/view/10">Downtown Mobility Plan</a>,
           designed by Civic San Diego, proposes to "increase priority and safety for bicyclists and
           pedestrians" by providing a "cohesive network of complete streets".</p>
          <img
            src={prefixLink('/proposed-bike-network.png')}
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ul
            style={{
              marginBottom: rhythm(2),
            }}
          >
            {pageLinks}
          </ul>
          <h2>In the News</h2>
          <ul>
            <li><a href="http://sdurban.com/?p=10267">Little Italy fights Downtown Mobility Plan</a></li>
            <li><a href="https://nextcity.org/daily/entry/san-diego-downtown-mobility-plan-bike-safety">San Diego Is Ready to Go Big on Biking and Walking</a></li>
            <li><a href="http://bikesd.org/2016/03/downtown-mobility-plan-reason-love-san-diego-2016/">Downtown Mobility Plan: A Reason to Love San Diego in 2016</a></li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
