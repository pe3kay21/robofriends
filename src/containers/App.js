import React, {Component} from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css';
import { requestRobots, setSearchField } from "../action";
  
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
        onRequestRobots: () =>dispatch (requestRobots) 
    }
}


class App extends Component  {
   componentDidMount(){
    this.props.onRequestRobots();
   
   }

 
   render() { 
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) 
        return   isPending ?
            <h1>Loading</h1> :
              (
                <div className="tc"> 
                    <h1 classname='f1'>RoboFreinds</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>    
                    </Scroll>
                </div> 
                );
              
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
