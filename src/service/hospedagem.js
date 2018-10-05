import axios from 'axios';
import {endPoints} from './api';

export default {
  room: {
    get(callback) {
      axios.get(endPoints.hospRoomUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      formData.append("cama", data.cama);
      formData.append("wifi", data.wifi);
      formData.append("air", data.air);
      formData.append("coffee", data.coffee);
      formData.append("maxOcupation", data.maxOcupation);
      formData.append("perNight", data.perNight);
      axios.put(endPoints.hospRoomUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
  },


  banner: {
    get(callback) {
      axios.get(endPoints.hospBannerUrl)
        .then(res => {
          callback(res.data);
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.put(endPoints.hospBannerUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
  },


  desc: {
    get(callback) {
      axios.get(endPoints.hospDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    put(data, callback) {
      axios.put(endPoints.hospDescUrl + "/" + data._id, data)
        .then(res => {
          callback(res)
        })
    },
  },

  gallery: {
    get(callback) {
      axios.get(endPoints.hospGalleryUrl)
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
        axios.post(endPoints.hospGalleryUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(endPoints.hospGalleryUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },
}
