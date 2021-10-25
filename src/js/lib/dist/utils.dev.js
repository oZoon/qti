"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomID = exports.formatPhone = exports.getTaskData = exports.getNewNumber = exports.dateToTimeStamp = exports.timestampToDateTime = exports.timestampToDate = void 0;

var timestampToDate = function timestampToDate(timestamp) {
  // console.log(timestamp);
  var timeDate = new Date(timestamp / 1);
  var day = leadingZero(timeDate.getDate());
  var month = leadingZero(timeDate.getMonth() + 1);
  var year = timeDate.getFullYear();
  return day + '.' + month + '.' + year;
};

exports.timestampToDate = timestampToDate;

var timestampToDateTime = function timestampToDateTime(timestamp) {
  // console.log(timestamp);
  var timeDate = new Date(timestamp / 1);
  var day = leadingZero(timeDate.getDate());
  var month = leadingZero(timeDate.getMonth() + 1);
  var year = timeDate.getFullYear();
  var hours = leadingZero(timeDate.getHours());
  var minutes = leadingZero(timeDate.getMinutes());
  var seconds = leadingZero(timeDate.getSeconds());
  return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
};

exports.timestampToDateTime = timestampToDateTime;

var leadingZero = function leadingZero(n) {
  return n < 10 ? '0' + n : n;
};

var dateToTimeStamp = function dateToTimeStamp(data) {
  console.log(data);
  var day = data.split(' ')[0].split('.')[0];
  var month = data.split(' ')[0].split('.')[1] - 1;
  var year = data.split(' ')[0].split('.')[2];
  var hours = data.split(' ')[1].split(':')[0];
  var minutes = data.split(' ')[1].split(':')[1];
  var seconds = data.split(' ')[1].split(':')[2];
  return +new Date(year, month, day, hours, minutes, seconds, 0);
};

exports.dateToTimeStamp = dateToTimeStamp;

var getNewNumber = function getNewNumber(taskList) {
  var result = 0;

  for (var i = 0; i < taskList.list.length; i++) {
    if (taskList.list[i].taskNumber > result) {
      result = taskList.list[i].taskNumber;
    }
  }

  return result + 1;
};

exports.getNewNumber = getNewNumber;

var getTaskData = function getTaskData(taskList, index, arrKeys) {
  var obj = taskList.list[index];
  var result = [];

  for (var key in obj) {
    for (var i = 0; i < arrKeys.length; i++) {
      if (key == arrKeys[i]) {
        result.push(obj[key]);
      }
    }
  }

  return result;
};

exports.getTaskData = getTaskData;

var formatPhone = function formatPhone(value) {
  // +79222209028
  return "".concat(value.slice(0, 2), " ").concat(value.slice(2, 5), " ").concat(value.slice(5, 8), " ").concat(value.slice(8, 10), " ").concat(value.slice(10, 12));
};

exports.formatPhone = formatPhone;

var randomID = function randomID(length) {
  var allowSymbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  return Array(length).fill('').map(function () {
    return allowSymbols[Math.floor(Math.random() * allowSymbols.length)];
  }).join('');
};

exports.randomID = randomID;