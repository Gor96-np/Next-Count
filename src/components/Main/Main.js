import React from 'react';

import classes from './Main.css';

const main = (props) => (
        <div className={classes.Main}>
                 <div onClick={props.inc}>Increment</div>
                 <div onClick={props.dec}>Decrement</div>
                 <div onClick={props.add}>Add 10</div>
                 <div onClick={props.sub}>Subtract 15</div>
        </div>
    );

export default main;