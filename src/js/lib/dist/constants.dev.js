"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILTER_DATE_SINGLE = exports.FILTER_DATE_RANGE = exports.FILTER_STRING_SINGLE = exports.FILTER_NUMBER_PHONE = exports.FILTER_NUMBER_SINGLE = exports.FILTER_NUMBER_RANGE = exports.GENERATOR = exports.TASK_DELETE_FINISH = exports.TASK_DELETE_EXECUTE = exports.TASK_DELETE_START = exports.SAVE_DATA_FINISH = exports.SAVE_DATA_EXECUTE = exports.SAVE_DATA_START = exports.MODAL_EDIT_TASK = exports.MODAL_DETAIL_TASK = exports.MODAL_CREATE_TASK = exports.VERSION = exports.URL_SITE = void 0;

var _package = _interopRequireDefault(require("../../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url_site = 'http://localhost:8080';
var hostname = window && window.location && window.location.hostname;

if (hostname != 'localhost') {
  url_site = "http://".concat(hostname);
}

var URL_SITE = url_site;
exports.URL_SITE = URL_SITE;
var VERSION = _package["default"].version;
exports.VERSION = VERSION;
var MODAL_CREATE_TASK = 'MODAL_CREATE_TASK';
exports.MODAL_CREATE_TASK = MODAL_CREATE_TASK;
var MODAL_DETAIL_TASK = 'MODAL_DETAIL_TASK';
exports.MODAL_DETAIL_TASK = MODAL_DETAIL_TASK;
var MODAL_EDIT_TASK = 'MODAL_EDIT_TASK';
exports.MODAL_EDIT_TASK = MODAL_EDIT_TASK;
var SAVE_DATA_START = 'SAVE_DATA_START';
exports.SAVE_DATA_START = SAVE_DATA_START;
var SAVE_DATA_EXECUTE = 'SAVE_DATA_EXECUTE';
exports.SAVE_DATA_EXECUTE = SAVE_DATA_EXECUTE;
var SAVE_DATA_FINISH = 'SAVE_DATA_FINISH';
exports.SAVE_DATA_FINISH = SAVE_DATA_FINISH;
var TASK_DELETE_START = 'TASK_DELETE_START';
exports.TASK_DELETE_START = TASK_DELETE_START;
var TASK_DELETE_EXECUTE = 'TASK_DELETE_EXECUTE';
exports.TASK_DELETE_EXECUTE = TASK_DELETE_EXECUTE;
var TASK_DELETE_FINISH = 'TASK_DELETE_FINISH';
exports.TASK_DELETE_FINISH = TASK_DELETE_FINISH;
var GENERATOR = {
  count: 100,
  numberTaskMin: 3202,
  numberTaskMax: 17240,
  dateStart: '23.03.2020',
  dateEnd: '17.11.2020',
  prefix: ['ООО', 'ЗАО', 'АО', 'ОАО', 'ПАО', 'ПК'],
  namePartWords: ['Газ', 'Нефть', 'Спец', 'Строй', 'Маш', 'Рем', 'Транс', 'Сбер', 'Откат', 'Замут', 'Кидалово', 'Монтаж', 'Груп', 'Пром', 'Урал', 'Юж', 'Восток', 'Сервис', 'Курск', 'Орел', 'Мос', 'Инвест', 'Финанс'],
  countInFinal: [1, 2],
  wordLength: [1, 7],
  wordCount: [3, 9],
  // letters: 'йцукенгшщзхъёфывапролджэячсмитьбю',
  letters: 'уеёыаоэяию'
};
exports.GENERATOR = GENERATOR;
var FILTER_NUMBER_RANGE = 'FILTER_NUMBER_RANGE';
exports.FILTER_NUMBER_RANGE = FILTER_NUMBER_RANGE;
var FILTER_NUMBER_SINGLE = 'FILTER_NUMBER_SINGLE';
exports.FILTER_NUMBER_SINGLE = FILTER_NUMBER_SINGLE;
var FILTER_NUMBER_PHONE = 'FILTER_NUMBER_PHONE';
exports.FILTER_NUMBER_PHONE = FILTER_NUMBER_PHONE;
var FILTER_STRING_SINGLE = 'FILTER_STRING_SINGLE';
exports.FILTER_STRING_SINGLE = FILTER_STRING_SINGLE;
var FILTER_DATE_RANGE = 'FILTER_DATE_RANGE';
exports.FILTER_DATE_RANGE = FILTER_DATE_RANGE;
var FILTER_DATE_SINGLE = 'FILTER_DATE_SINGLE';
exports.FILTER_DATE_SINGLE = FILTER_DATE_SINGLE;