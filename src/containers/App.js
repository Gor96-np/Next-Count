import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { connect } from 'react-redux';
import * as actions from '../store/action/action';
import classes from './App.css';

class App extends Component {
  render() {
    return(
      <div className={classes.App}>
        <Header count={this.props.counter} />
        <Main inc={this.props.onIncrement}
               dec={this.props.onDecrement}
                add={this.props.onAdd}
                 sub={this.props.onSubtract}/>
                 <hr />
<button  onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
          <ul>
             {this.props.result.map(res => (
               <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>
                   {res.value}
               </li>
             ))}
          </ul>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
      counter:state.counter,
      result:state.result
  }
};

const mapDispatchToProps = dispatch => {
  return {
     onIncrement:() => dispatch({type:actions.INCREMENT,value:1 }),
     onDecrement:() => dispatch({type:actions.DECREMENT,val:1}),
     onAdd:() => dispatch({type:actions.ADD,add:10}),
     onSubtract:() => dispatch({type:actions.SUBTRACT,subt:15}),
     onStoreResult:(result) => dispatch({type:actions.STORE_RESULT,stRes:result}),
     onDeleteResult:(id) => dispatch({type:actions.DELETE_RESULT,elId:id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);