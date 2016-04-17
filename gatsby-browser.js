// Send pageview event to Google Analytics on page change.
// see https://github.com/gatsbyjs/gatsby/issues/64
exports.onRouteChange = state => {
  if (window.ga) {
    ga('send', 'pageview', {
      page: state.pathname
    });
  }
}