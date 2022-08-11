import React, {Component} from "react";
import Spinner from '../spinner';

const withData = (View, getData) => {
    return class extends Component {
      state = { itemleList: null };
  
      componentDidMount(){
        getData()
        .then((itemleList) => {
          this.setState({ itemleList });
        });
      }
       
      render(){
        const { itemleList } = this.state;
         
        if (!itemleList){
          return <Spinner />
        }
        return <View {... this.props} itemleList = {itemleList}/>
      }
  }
  }

  
export default withData;