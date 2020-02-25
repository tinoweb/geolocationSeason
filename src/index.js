import React from 'react'
import ReactDOM from 'react-dom'
import SeassonDisplay from './SeassonDisplay'
import Spinner from './spinner'

class App extends React.Component {

    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            error => this.setState({errorMessage:error.message}),
        )
    }

    showContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeassonDisplay lat={this.state.lat} />
        }
        return <Spinner /> 
    }

    render(){
        return (
            <div className="border-red">
                {this.showContent()}
            </div>
        )
        
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
