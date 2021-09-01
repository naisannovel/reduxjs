import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dish: state.dish,
  };
};

const mapDispatchToProps = dispatch =>{
    return {
        addComment: ()=> dispatch({
            type: 'TEST',
            payload: 'naisan novel'     // payload will be object
        })
    }
}

const accessReduxStoreFromComponent = () => {

  console.log(props.dish);

  props.addComment()
  
  return <div>{props.dish}</div>;
};

export default connect(mapStateToProps,mapDispatchToProps)(accessReduxStoreFromComponent);
