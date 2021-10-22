import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestData } from './redux/action/countAction';
import { bindActionCreators } from 'redux';

class App extends Component {
    componentDidMount() {
        this.props.requestData();
    }
    

    render() {
        return (
            <div>
                <h1>Weather For:</h1>
{/* 
                <div>
                    <input type = "text" placeholder="enter city name" onChange={}> </input>
                </div> */}

                {console.log(this.props.data)}
                <h2>{this.props.data ?this.props.data.getCityByName.name : null}</h2>
                <h2>{this.props.data ?this.props.data.getCityByName.country : null}</h2>
                <h2>{this.props.data ?this.props.data.getCityByName.weather.summary.description : null}</h2>
                <h2>{this.props.data ?this.props.data.getCityByName.weather.temperature.actual : null}</h2>
                {/* <ul>
                    {(this.props.data ).map((country) => (
                        <li key={country.name}>
                            <div>{this.props.data}</div>
                        </li>
                    ))}
                </ul> */}

            </div>

            // <div className='App'>
            //     <div className='Age-label'>
            //         your age: <span>{this.props.age}</span>
            //     </div>
            //     <button onClick={this.props.onAgeUp}>Age UP</button>
            //     <button onClick={this.props.onAgeDown}>Age Down</button>
            // </div>
        );
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestData }, dispatch);

// return {
//     onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
//     onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
// };
export default connect(mapStateToProps, mapDispatchToProps)(App);
