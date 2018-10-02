import axios from 'axios';

const baseUrl = 'http://pitayabeachapi.herokuapp.com';

export const homeService = {
  slider: {
    get(callback) {
      axios.get(baseUrl + '/home/slider').then(res => {
        callback(res.data);
      })
    },
    post(input, callback) {
      axios.get(baseUrl + '/home/slider').then(res => {
        callback(res.data);
      })
    },
    delete(callback) {

    }
  },
  desc: {

  }
}
