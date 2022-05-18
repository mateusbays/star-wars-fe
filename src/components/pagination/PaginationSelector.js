import React from "react";
import Pagination from 'react-bootstrap/Pagination'


const PaginationSelector = ({itemsPerPage, totalItems, ...props}) => {


    const items = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        items.push(
            <Pagination.Item key={i} active={i === props.active}>
                {i}
            </Pagination.Item>
        );
    }

    return (
            <Pagination onClick={props.onClick} className="justify-content-center mt-3">
                {items}
            </Pagination>
    )


}

export default PaginationSelector;
