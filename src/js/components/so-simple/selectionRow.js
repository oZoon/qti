import React from 'react';

export default React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])
        const id = randomID(12);

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    lineHeight: '11px',
                }}
            >
                <input
                    id={id}
                    className="table-selection-row"
                    type="checkbox"
                    ref={resolvedRef}
                    {...rest}
                />
                <label htmlFor={id}></label>
            </div>
        )
    }
)
