
/* eslint-disable no-undef */
import Oidc from 'oidc-client'
import _ from 'lodash'
import pkg from '../../package.json'

class OidcClient {
  constructor (settings) {
    this.mgr = new Oidc.UserManager(settings)
  }
  getUser () {
    this.mgr.getUser().then((user) => {
      console.log(user)
    }).catch((err) => {
      console.log(err)
    })
  }
  startSigninMainWindow () {
    this.mgr.signinRedirect({state: '145878'}).then(() => {
      console.log('signinRedirect done')
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default ({ app, router, Vue }) => {
  const { origin } = document.location
  const settings = pkg['mx-ugto-siidrh']['oidc-settings']
  Object.keys(settings).forEach((setting) => {
    settings[setting] = _.template(settings[setting])({ origin })
  })

  Vue.prototype.$OidcClient = new OidcClient(settings)
}
