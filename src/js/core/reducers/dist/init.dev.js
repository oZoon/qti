"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../lib/constants");

var _generators = require("../../lib/generators");

var _utils = require("../../lib/utils");

var _dateFns = require("date-fns");

var init = {
  taskList: {
    state: false,
    data: [],
    columns: []
  }
};
init.taskList.data = Array(_constants.GENERATOR.count).fill({}).map(function () {
  return {
    taskNumber: (0, _generators.generatorNumbers)(1).join(''),
    // taskDate: timestampToDate(generatorDates(1).join('')),
    customerFull: (0, _generators.generatorFullCompanyName)(1).join(''),
    customer: (0, _generators.generatorCompanyName)(1).join(''),
    customerPrefix: (0, _generators.ganeratorCompanyNamePrefix)(1).join(''),
    supplierFull: (0, _generators.generatorFullCompanyName)(1).join(''),
    supplier: (0, _generators.generatorCompanyName)(1).join(''),
    supplierPrefix: (0, _generators.ganeratorCompanyNamePrefix)(1).join(''),
    supplierPhone: (0, _generators.generatorPhone)(1).join(''),
    comments: (0, _generators.generatorPhrase)(1).join(''),
    atiCode: (0, _generators.generatorATI)(1).join(''),
    taskDate: (0, _generators.generatorDates)(1).join('')
  };
}); // init.taskList.columns = [
//     {
//         Header: 'Номер заявки',
//         accessor: 'taskNumber',
//         disableFilters: false,
//         disableSortBy: false,
//         filterType: FILTER_NUMBER_RANGE,
//         // filter: 'between',
//         dataType: 'number',
//     },
//     {
//         Header: 'Дата заявки',
//         accessor: 'taskDate',
//         disableFilters: false,
//         disableSortBy: false,
//         filterType: FILTER_DATE_RANGE,
//         // filter: 'between',
//         dataType: 'datetime',
//         Cell: ({ value }) => format(new Date(value / 1), 'dd.MM.yyyy H:m'),
//     },
//     {
//         Header: 'Клиент',
//         accessor: 'customerFull',
//         disableFilters: false,
//         disableSortBy: false,
//         filterType: FILTER_STRING_SINGLE,
//         // filter: 'contains',
//         sortType: (a, b) => {
//             const a1 = a.split('"')[1];
//             const b1 = b.split('"')[1];
//             return a1.localeCompare(b1);
//         }
//     },
//     {
//         Header: 'Перевозчик',
//         accessor: 'supplierFull',
//         disableFilters: false,
//         disableSortBy: false,
//         filterType: FILTER_STRING_SINGLE,
//         // filter: 'contains',
//         sortType: (a, b) => {
//             const a1 = a.split('"')[1];
//             const b1 = b.split('"')[1];
//             return a1.localeCompare(b1);
//         }
//     },
//     {
//         Header: 'Контакты перевозчика',
//         accessor: 'supplierPhone',
//         disableFilters: true,
//         disableSortBy: true,
//         filterType: FILTER_NUMBER_PHONE,
//         // filter: 'start',
//         dataType: 'number',
//     },
//     {
//         Header: 'Комментарии',
//         accessor: 'comments',
//         disableFilters: true,
//         disableSortBy: true,
//         filterType: FILTER_STRING_SINGLE,
//         // filter: 'contains',
//     },
//     {
//         Header: 'ATI',
//         accessor: 'atiCode',
//         disableFilters: false,
//         disableSortBy: false,
//         filterType: FILTER_NUMBER_SINGLE,
//         // filter: 'start',
//         dataType: 'number',
//     },
// ]

var _default = init;
exports["default"] = _default;