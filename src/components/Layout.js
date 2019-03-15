import React from 'react';
import {layout, trans} from './layout.module.scss';

export default ({children, transparent}) => {
    console.log(transparent);
    return (
        <div className={transparent ? `${layout} ${trans}`: layout}>{children}</div>
    )
};