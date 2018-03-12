import lodash from 'lodash'

export default ({ app, router, Vue }) => {
  Vue.prototype.$lodash = lodash
}
