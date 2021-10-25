
    const {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        page,

        state: {
            pageIndex,
            pageSize,
            selectedRowIds,
        },
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,

        useRowSelect,
        hooks => {
            hooks.allColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',

                    Header: 'Дата заявки',
                    accessor: 'taskDate',
                    disableFilters: true,
                    disableSortBy: true,
                    // filterType: FILTER_DATE_RANGE,
                    // Cell: ({ value }) => timestampToDateTime(value),
                    // filter: 'between',
                    css: 'selection',

                    /*
                    The header can use the table's getToggleAllRowsSelectedProps method to render a checkbox.  Pagination is a problem since this will select all rows even though not all rows are on the current page.  The solution should be server side pagination.  For one, the clients should not download all rows in most cases.  The client should only download data for the current page. In that case, getToggleAllRowsSelectedProps works fine.
                    */
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <SecectionRow {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <SecectionRow {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )
