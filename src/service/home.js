import axios from 'axios';
import {
  endPoints
} from './api';

export default {
  slider: {
    get(callback) {
      axios.get(endPoints.homeSliderUrl)
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
        axios.post(endPoints.homeSliderUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(endPoints.homeSliderUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },

  evdesc: {
    get(callback) {
      axios.get(endPoints.homeEvdescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(id, data, callback) {
      axios.put(endPoints.homeEvdescUrl + "/" + id, data)
        .then(res => {
          callback(res)
        })
    },
  },

  desc: {
    get(callback) {
      axios.get(endPoints.homeDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(id, desc, callback) {
      axios.put(endPoints.homeDescUrl + '/' + id, desc)
        .then(res => {
          callback(res)
        })
    }
  }
}
