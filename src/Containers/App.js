import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import { setSearchField } from '../Action';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
        }
        console.log('constructor');
    };
    /*
    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value} );
        setTimeout(10);
        console.log('OnsearchCHange');
    }
    */
    componentDidMount(){
        //console.log(this.props.store.getState())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState( { robots: users} ))
        console.log('componentMount');
    }


    render(){
        console.log('render')
        const filterdRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
        return !this.state.robots.length ? <h1>Loadning...</h1> :  
        (
                <div className='tc'>
                    <h1>RobotsFriends</h1>
                    <SearchBox searchChange = {this.props.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filterdRobots} />
                        </ErrorBoundry>    
                    </Scroll>
                </div>
            ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);//ktory state sledovat a o ktore akcie sa zaujimat