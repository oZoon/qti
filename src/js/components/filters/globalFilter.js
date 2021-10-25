import React, { useState } from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)
    const onChange = value => {
        setFilter(value || undefined)
    }
    return (
        <div className="filter-customer">
            <div className="filter-text">
                Глобальный поиск
        </div>
            <div className="filter-text">
                <input
                    type="text"
                    className="filter-width-200"
                    value={value || ''}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}
