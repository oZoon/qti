"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatorATI = exports.generatorPhrase = exports.generatorPhone = exports.generatorCompanyName = exports.ganeratorCompanyNamePrefix = exports.generatorFullCompanyName = exports.generatorDates = exports.generatorNumbers = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _assignPropTypes = _interopRequireDefault(require("assign-prop-types"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @return non-ordering array contains count of integer numbers
 */
var generatorNumbers = function generatorNumbers(count) {
  return Array(count).fill(0).map(function () {
    return Math.floor(_constants.GENERATOR.numberTaskMin) + Math.floor(Math.random() * (_constants.GENERATOR.numberTaskMax - _constants.GENERATOR.numberTaskMin));
  });
};
/**
 * @return non-ordering array contains count of Dates
 */


exports.generatorNumbers = generatorNumbers;

var generatorDates = function generatorDates(count) {
  return Array(count).fill(0).map(function () {
    return Math.floor(strToTS(_constants.GENERATOR.dateStart) + Math.random() * (strToTS(_constants.GENERATOR.dateEnd) - strToTS(_constants.GENERATOR.dateStart)));
  });
};
/**
 * @return non-ordering array contains random companyName
 */


exports.generatorDates = generatorDates;

var generatorFullCompanyName = function generatorFullCompanyName(count) {
  return Array(count).fill('').map(function () {
    return "".concat(getPrefix(), " \"").concat(getCompanyName(), "\"");
  });
};

exports.generatorFullCompanyName = generatorFullCompanyName;

var ganeratorCompanyNamePrefix = function ganeratorCompanyNamePrefix(count) {
  return Array(count).fill('').map(function () {
    return getPrefix();
  });
};

exports.ganeratorCompanyNamePrefix = ganeratorCompanyNamePrefix;

var generatorCompanyName = function generatorCompanyName(count) {
  return Array(count).fill('').map(function () {
    return getCompanyName();
  });
};

exports.generatorCompanyName = generatorCompanyName;

var generatorPhone = function generatorPhone(count) {
  return Array(count).fill('').map(function () {
    return "+79".concat(getPhone());
  });
};

exports.generatorPhone = generatorPhone;

var generatorPhrase = function generatorPhrase(count) {
  return Array(count).fill('').map(function () {
    return getPhrase();
  });
};

exports.generatorPhrase = generatorPhrase;

var generatorATI = function generatorATI(count) {
  return Array(count).fill('').map(function () {
    return getNum(5);
  });
};

exports.generatorATI = generatorATI;

var strToTS = function strToTS(strDate) {
  return +new Date(strDate.split('.')[2], strDate.split('.')[1] - 1, strDate.split('.')[0]);
};

var getPrefix = function getPrefix() {
  return _constants.GENERATOR.prefix[Math.floor(Math.random() * _constants.GENERATOR.prefix.length)];
};

var getCompanyName = function getCompanyName() {
  var count = _constants.GENERATOR.countInFinal[0] + Math.floor(1 + Math.random() * (_constants.GENERATOR.countInFinal[1] - _constants.GENERATOR.countInFinal[0]));
  return Array(count).fill('').map(function () {
    return _constants.GENERATOR.namePartWords[Math.floor(Math.random() * _constants.GENERATOR.namePartWords.length)];
  }).join('');
};

var pad = function pad(number) {
  return number < 10 ? "0".concat(number) : number;
}; // const getPhone = () => `${getNum(2)} ${getNum(3)} ${getNum(2)} ${getNum(2)}`;


var getPhone = function getPhone() {
  return getNum(9);
};

var getNum = function getNum(count) {
  return Array(count).fill(0).map(function () {
    return Math.floor(Math.random() * 10);
  }).join('');
};

var getPhrase = function getPhrase() {
  return Array(Math.floor(_constants.GENERATOR.wordCount[0] + Math.random() * (_constants.GENERATOR.wordCount[1] - _constants.GENERATOR.wordCount[0]))).fill('').map(function () {
    return Array(Math.floor(_constants.GENERATOR.wordLength[0] + Math.random() * (_constants.GENERATOR.wordLength[1] - _constants.GENERATOR.wordLength[0]))).fill('').map(function () {
      return _constants.GENERATOR.letters[Math.floor(Math.random() * _constants.GENERATOR.letters.length)];
    }).join('');
  }).join(' ');
};
/*

export const taskNumber = (count, min, max) => {
    return Array(count).fill(Math.floor(min) + Math.floor(Math.random() * Math.floor(max - min)))
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}


export default assignPropTypes({
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
}, {
    style: {},
    onClick: noop,
}, {
    theme: PropTypes.object,
})
    (({ children, style, onClick }) => (<button
        className={theme.btn}
        style={style}
        onClick={onClick}
    >
        {children}
    </button>));
*/