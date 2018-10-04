import axios from 'axios';

const baseUrl = 'http://pitayabeachapi.herokuapp.com';

const homeSliderUrl = baseUrl + '/home/slider'
const homeDescUrl = baseUrl + '/home/desc'

const clubEventsUrl = baseUrl + '/club/event'
const clubBannersUrl = baseUrl + '/club/banner'
const clubDescUrl = baseUrl + '/club/desc'
const clubGalleryUrl = baseUrl + '/club/gallery'



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

export const clubService = {
  events: {
    get(callback) {
      axios.get(clubEventsUrl)
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
      axios.post(clubEventsUrl, formData)
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
      axios.put(clubEventsUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(clubEventsUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },


  banner: {
    get(callback) {
      axios.get(clubBannersUrl)
        .then(res => {
          callback(res.data);
        })
    },
    post(data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.post(clubBannersUrl, formData)
        .then(res => {
          callback(res)
        })
    },
    put(id, data, callback) {
      let formData = new FormData();
      formData.append("img", data.inputFile.files[0]);
      axios.put(clubBannersUrl + "/" + id, formData)
        .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(clubBannersUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },


  desc: {
    get(callback) {
      axios.get(clubDescUrl)
        .then(res => {
          callback(res.data[0]);
        })
    },
    post(data, callback) {
      axios.post(clubDescUrl, {text:data.text})
        .then(res => {
          callback(res)
        })
    },
    put(data, callback) {
      axios.put(clubDescUrl + "/" + data._id, data)
      .then(res => {
          callback(res)
        })
    },
    delete(id, callback) {
      axios.delete(clubDescUrl + "/" + id)
        .then(res => {
          callback(res)
        })
    }
  },

  gallery: {
    get(callback) {
      axios.get(clubGalleryUrl)
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
        axios.post(clubGalleryUrl, formData)
          .then(res => {
            count++
            if (count === max) {
              callback(res)
            }
          })
      }
    },
    delete(id, callback) {
      axios.delete(clubGalleryUrl + '/' + id)
        .then(res => {
          callback(res)
        })
    }
  },
}
