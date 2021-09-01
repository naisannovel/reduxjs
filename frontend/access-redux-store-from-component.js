import React from "react";
import { connect } from "react-redux";
import { addComment,fetchDish } from "../actionCreators";

const mapStateToProps = state => {
  return {
    dish: state.dish,
  };
};

const mapDispatchToProps = dispatch =>{
    return {
        fetchDishes: ()=> dispatch(fetchDish())
    }
}

const accessReduxStoreFromComponent = () => {

  console.log(props.dish);

  props.fetchDish()
  
  return <div>{props.dish}</div>;
};

export default connect(mapStateToProps,mapDispatchToProps)(accessReduxStoreFromComponent);
