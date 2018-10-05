import axios from 'axios';
import {endPoints} from './api';

export default {
  events: {
    get(callback) {
      axios.get(endPoints.clubEventsUrl)
        .then(res => {
          callback(res.data);
        })
    },
    post(data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      formData.append("title", data.title);
      formData.append("date", data.date);
      formData.append("link", data.link);
      axios.post(endPoints.clubEventsUrl, formData)
        .then(res => {
          callback(res)
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      formData.append("title", data.title);
      formData.append("date", data.date);
      formData.append("link", data.link);
      axios.put(endPoints.clubEventsUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(endPoints.clubEventsUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },


  banner: {
    get(callback) {
      axios.get(endPoints.clubBannerUrl)
        .then(res => {
          callback(res.data);
        })
    },
    post(data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.post(endPoints.clubBannerUrl, formData)
        .then(res => {
          callback(res)
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.put(endPoints.clubBannerUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(endPoints.clubBannerUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },


  desc: {
    get(callback) {
      axios.get(endPoints.clubDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    post(data, callback) {
      axios.post(endPoints.clubDescUrl, {
          text: data.text
        })
        .then(res => {
          callback(res)
        })
    },
    put(data, callback) {
      axios.put(endPoints.clubDescUrl + "/" + data._id, data)
        .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(endPoints.clubDescUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },

  gallery: {
    get(callback) {
      axios.get(endPoints.clubGalleryUrl)
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
        axios.post(endPoints.clubGalleryUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(endPoints.clubGalleryUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },
}
