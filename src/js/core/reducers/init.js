import { GENERATOR } from '../../lib/constants';
import {
    FILTER_NUMBER_RANGE,
    FILTER_STRING_SINGLE,
    FILTER_DATE_RANGE,
    FILTER_NUMBER_PHONE,
    FILTER_NUMBER_SINGLE,
} from '../../lib/constants';
import {
    generatorNumbers,
    generatorDates,
    generatorFullCompanyName,
    generatorCompanyName,
    ganeratorCompanyNamePrefix,
    generatorPhone,
    generatorPhrase,
    generatorATI
} from '../../lib/generators';
import { timestampToDate, dateToTimeStamp } from '../../lib/utils';
import { format } from 'date-fns';


let init = {
    taskList: {
        state: false,
        data: [],
        columns: [],
    },
}
init.taskList.data = Array(GENERATOR.count).fill({}).map(() => {
    return {
        taskNumber: generatorNumbers(1).join(''),
        // taskDate: timestampToDate(generatorDates(1).join('')),

        customerFull: generatorFullCompanyName(1).join(''),
        customer: generatorCompanyName(1).join(''),
        customerPrefix: ganeratorCompanyNamePrefix(1).join(''),

        supplierFull: generatorFullCompanyName(1).join(''),
        supplier: generatorCompanyName(1).join(''),
        supplierPrefix: ganeratorCompanyNamePrefix(1).join(''),

        supplierPhone: generatorPhone(1).join(''),
        comments: generatorPhrase(1).join(''),
        atiCode: generatorATI(1).join(''),
        taskDate: generatorDates(1).join(''),
    }
})
// init.taskList.columns = [
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

export default init;
