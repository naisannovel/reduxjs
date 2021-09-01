import React, { useEffect } from "react";
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

const accessReduxStoreFromComponent = (props) => {


  useEffect(  props.fetchDish() ,[])

  props.addDishes({name:'burger'})  // this method will call in form onSubmitHandler
  
  if(props.dish.isLoading){
    return // Loading Component 
  }else if(props.dish.errMsg !== null){
    return // error component or alert
  }else{
    return // display dish item
  }

};

export default connect(mapStateToProps,mapDispatchToProps)(accessReduxStoreFromComponent);
