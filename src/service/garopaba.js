import axios from 'axios';
import {endPoints} from './api';

export default {
  banner: {
    get(callback) {
      axios.get(endPoints.garopabaBannerUrl)
        .then(res => {
          callback(res.data);
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.put(endPoints.garopabaBannerUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
  },


  desc: {
    get(callback) {
      axios.get(endPoints.garopabaDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(data, callback) {
      axios.put(endPoints.garopabaDescUrl + "/" + data._id, data)
        .then(res => {
          callback(res)
        })
    },
  },

  gallery: {
    get(callback) {
      axios.get(endPoints.garopabaGalleryUrl)
        .then(res => {
          callback(res.data);
        })
    },
    post(inputFile, callback) {
      let files = inputFile.files;
      let count = 0;
      let max   = files.length;
      for (let index = 0; index < max; index++) {
        let formData = new FormData();
        formData.append("img", files[index]);
        axios.post(endPoints.garopabaGalleryUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(endPoints.garopabaGalleryUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },
}
