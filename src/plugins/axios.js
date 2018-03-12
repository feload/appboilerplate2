import axios from 'axios'
import axiosCancel from 'axios-cancel'

export default ({ Vue }) => {
  axiosCancel(axios, {
    debug: false // default
  })
  Vue.prototype.$axios = axios
}
