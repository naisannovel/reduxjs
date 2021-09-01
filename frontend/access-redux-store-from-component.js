import React from "react";
import { connect } from "react-redux";
import { fetchDish, addDish } from "../actionCreators";

const mapStateToProps = state => {
  return {
    dish: state.dish,
  };
};

const mapDispatchToProps = dispatch =>{
    return {
        fetchDishes: ()=> dispatch(fetchDish()),
        addDishes: (data)=> dispatch(addDish(data))
    }
}

const accessReduxStoreFromComponent = () => {

  console.log(props.dish);

  props.fetchDish()
  props.addDishes({name:'burger'})
  
  return <div>redux js</div>;
};

export default connect(mapStateToProps,mapDispatchToProps)(accessReduxStoreFromComponent);
