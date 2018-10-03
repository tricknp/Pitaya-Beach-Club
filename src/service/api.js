import axios from 'axios';

const baseUrl = 'http://pitayabeachapi.herokuapp.com';
const homeSliderUrl = baseUrl + '/home/slider'
const homeDescUrl = baseUrl + '/home/desc'



export const homeService = {
  slider: {
    get(callback) {
      axios.get(homeSliderUrl)
        .then(res => {
          callback(res.data);
        })
    },
    post(inputFile, callback) {
      let files = inputFile.files;
      let count = 0;
      let max = files.length;
      for (let index = 0; index < max; index++) {
        let formData = new FormData();
        formData.append("img", files[index]);
        axios.post(homeSliderUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(homeSliderUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },

  desc: {
    get(callback) {
      axios.get(homeDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(id, desc, callback) {
      axios.put(homeDescUrl + '/' + id, desc)
        .then(res => {
          callback(res)
        })
    }
  }
}
