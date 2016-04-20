import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'

const newsLinks = [
  {
    path: 'http://sdurban.com/?p=10267',
    title: 'Little Italy fights Downtown Mobility Plan',
  },
  {
    path: 'https://nextcity.org/daily/entry/san-diego-downtown-mobility-plan-bike-safety',
    title: 'San Diego Is Ready to Go Big on Biking and Walking',
  },
  {
    path: 'http://bikesd.org/2016/03/downtown-mobility-plan-reason-love-san-diego-2016/',
    title: 'Downtown Mobility Plan: A Reason to Love San Diego in 2016',
  },
]

const adovocateLinks = [
  {
    path: 'http://bikesd.org/',
    title: 'BikeSD',
  },
  {
    path: 'http://sdbikecoalition.org/',
    title: 'San Diego County Bicycle Coalition',
  },
  {
    path: 'https://www.climateactioncampaign.org/',
    title: 'Climate Action Campaign',
  },
  {
    path: 'http://www.circulatesd.org/support_protected_bike_lanes_in_downtown_san_diego',
    title: 'Circulate San Diego',
  },
  {
    path: 'http://www.c3sandiego.org/',
    title: 'Citizens Coordinate for Century 3',
  },
]

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
          >
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <p>The <a href="http://www.downtownsdmobility.com/app_pages/view/10">Downtown Mobility Plan</a> (DMP) is a proposal created by <a href="http://civicsd.com/">Civic San Diego</a> that "capitalizes on the current momentum by guiding development of a magnificent, vital urban setting" and will "increase priority and safety for bicyclists and pedestrians" by providing a "cohesive network of complete streets".</p>

          <p>In particular the DMP will add one and two-way <a href="http://la.streetsblog.org/2014/09/22/governor-brown-signs-protected-bike-lane-bill-car-fee-for-bike-paths/">separated cycle tracks</a> to "encourage use and ensure a safe and convenient cycling environment for cyclists of all ages and skill levels". You can see the proposed bicycle network below, which will allow commuters, families, and tourists to make short trips across downtown safely and efficiently.</p>

          <p>Whether you live or work downtown, or just visit on the weekends, <Link to={prefixLink('/upcoming-advocacy-opportunities/')}>your support</Link> of the DMP will give everyone a safe alternative to driving, which will help reduce congestion, pollution, noise, maintenance, and increase safety for those both biking and walking. Implementating the DMP will make San Diego a world class city, building on it's amazing climate and location.</p>


          <ul
            style={{
              marginBottom: rhythm(1),
            }}
          >
            {pageLinks}
          </ul>
          <h2>In the News</h2>
          <ul
            style={{
              marginBottom: rhythm(1),
            }}
          >
            {newsLinks.map(link => <li key={link.path}><a href={link.path}>{link.title}</a></li>)}
          </ul>

          <h2>Community Groups In Favor</h2>
          <ul
            style={{
              marginBottom: rhythm(1),
            }}
          >
            {adovocateLinks.map(link =>
              <li key={link.path}><a href={link.path}>{link.title}</a></li>
            )}
          </ul>

          <h2>Proposed Bicycle Network</h2>
          <iframe
            style={{ width: '100%', height: '34rem' }}
            className="render-viewer"
            src="https://render.githubusercontent.com/view/geojson?enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676973742f616e6f6e796d6f75732f39353765366561366231316235363637323331643832613166323536353138362f7261772f336239356332313930623531346237656333333834613639633930626538656331666664343366312f6d61702e67656f6a736f6e#0a9a41cf-121a-43c8-8186-8fc6875a1420"
            sandbox="allow-scripts allow-same-origin allow-top-navigation"
          />
          <p><small><em>Note: Due to complaints from Washington Elementary and Our Lady of the Rosary Church, <a href="http://www.downtownsdmobility.com/app_pages/view/196">Civic SD Board recommended relocating the State Street cycle track to Kettner, north of Beech</a>. Original route is in light green with the proposed change in dark green.</em></small></p>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
