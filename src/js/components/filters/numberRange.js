import React from 'react';

export default (props) => {
    console.log(props);
    const {
        filterValue,
        setFilter,
        min,
        max,
    } = props;
    return (
        <div className="filter-task-number">
            <div className="filter-text">
                Номер заявки
                </div>
            <div className="filter-text">
                от
                    <input
                    type="number"
                    className="filter-width-70"
                    value={filterValue[0] || ''}
                    onChange={e => {
                        const val = e.target.value
                        setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
                    }}
                    placeholder={`Min (${min})`}
                />
                        до
                    <input
                    type="number"
                    className="filter-width-70"
                    value={filterValue[1] || ''}
                    onChange={e => {
                        const val = e.target.value
                        setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
                    }}
                    placeholder={`Max (${max})`}
                />
            </div>
        </div>
    )
}
