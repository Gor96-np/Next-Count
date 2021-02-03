import React from 'react';

import classes from './Header.css'

const header = (props) => {
    return (
       <div className={classes.Header}><h3>Counter:{props.count}</h3></div>
    )
};

export default header;