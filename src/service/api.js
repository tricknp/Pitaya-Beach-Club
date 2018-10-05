// This module should center all cruds calls and configs

// CONFIGs
export const baseUrl = 'http://pitayabeachapi.herokuapp.com';
//export const baseUrl= 'http://localhost:3000';

export const endPoints = {

  login      : baseUrl + '/login',
  verifytoken: baseUrl + '/verifytoken',

  homeSliderUrl: baseUrl + '/home/slider',
  homeDescUrl  : baseUrl + '/home/desc',

  clubEventsUrl : baseUrl + '/club/event',
  clubBannerUrl : baseUrl + '/club/banner',
  clubDescUrl   : baseUrl + '/club/desc',
  clubGalleryUrl: baseUrl + '/club/gallery',

  hospBannerUrl : baseUrl + '/apart/banner',
  hospRoomUrl   : baseUrl + '/apart/room',
  hospDescUrl   : baseUrl + '/apart/desc',
  hospGalleryUrl: baseUrl + '/apart/gallery',

  gastroBannerUrl : baseUrl + '/gastro/banner',
  gastroDescUrl   : baseUrl + '/gastro/desc',
  gastroGalleryUrl: baseUrl + '/gastro/slider',
}

// APIs
export const homeService = require('./home').default;
export const clubService = require('./club').default;
export const hospService = require('./hospedagem').default;
export const gastroService = require('./gastronomia').default;
