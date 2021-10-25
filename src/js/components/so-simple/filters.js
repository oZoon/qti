import React from 'react'

export default column => {
    const { filterValue = [], preFilteredRows, setFilter, id } = column;
    switch (column.filterType) {
        case FILTER_NUMBER_RANGE:
            const [minNR, maxNR] = React.useMemo(() => {
                let minNR = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
                let maxNR = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
                preFilteredRows.forEach(row => {
                    minNR = Math.min(row.values[id], minNR)
                    maxNR = Math.max(row.values[id], maxNR)
                })
                return [minNR, maxNR]
            }, [id, preFilteredRows])
            filterValue[0] = filterValue[0] === undefined ? minNR : filterValue[0];
            filterValue[1] = filterValue[1] === undefined ? maxNR : filterValue[1];
            return (
                <div className="filter-text-task-number">
                    <input
                        type="number"
                        className="filter-width-70"
                        value={filterValue[0] || ''}
                        onChange={e => {
                            const val = e.target.value
                            setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
                        }}
                    />
                    <span className="task-header-text">до</span>
                    <input
                        type="number"
                        className="filter-width-70"
                        value={filterValue[1] || ''}
                        onChange={e => {
                            const val = e.target.value
                            setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
                        }}
                    />
                </div>
            )
            break;
        case FILTER_DATE_RANGE:
            const [minDR, maxDR] = React.useMemo(() => {
                let minDR = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
                let maxDR = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
                preFilteredRows.forEach(row => {
                    minDR = Math.min(row.values[id], minDR)
                    maxDR = Math.max(row.values[id], maxDR)
                })
                return [minDR, maxDR]
            }, [id, preFilteredRows])
            const [startDate, setStartDate] = useState(minDR);
            const [endDate, setEndDate] = useState(maxDR);
            const CustomInput = React.forwardRef((props, ref) => (
                <button ref={ref} className="filter-width-90" onClick={props.onClick}>
                    {props.value}
                </button>
            ))
            return (
                <div className="filter-text-task-date">
                    <span className="task-header-date">
                        от
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            selected={startDate}
                            onChange={date => {
                                console.log(date);
                                setFilter((old = []) => [(+ date), old[1]])
                                setStartDate(date)
                            }}
                            customInput={<CustomInput ref={React.createRef()} />}
                            locale={ru}
                            monthsShown={4}
                        />
                    </span>
                    <span className="task-header-date">
                        до
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            selected={endDate}
                            onChange={date => {
                                setFilter((old = []) => [old[0], (+ date)])
                                setEndDate(date)
                            }}
                            customInput={<CustomInput ref={React.createRef()} />}
                            locale={ru}
                            showPreviousMonths
                            monthsShown={4}
                        />
                    </span>
                </div>
            )
        case FILTER_STRING_SINGLE:
            const countString = preFilteredRows.length;
            return (
                <div className="filter-text-task-number">
                    <input
                        type="text"
                        className="filter-width-150"
                        value={filterValue || ''}
                        onChange={e => {
                            setFilter(e.target.value || undefined)
                        }}
                    />
                </div>
            )
            break;
        case FILTER_NUMBER_SINGLE:
            const countNumber = preFilteredRows.length;
            return (
                <div className="filter-text-task-number">
                    <input
                        type="number"
                        className="filter-width-70"
                        value={filterValue || ''}
                        onChange={e => {
                            setFilter(e.target.value || undefined)
                        }}
                    />
                </div>
            )
            break;
        case FILTER_NUMBER_PHONE:
            const [valuePhone, setValuePhone] = useState();
            return (
                <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={valuePhone ? valuePhone : ''}
                    onChange={value => {
                        setValuePhone(value)
                        setFilter(value)
                    }}
                />
            )
            break;
    }
}
