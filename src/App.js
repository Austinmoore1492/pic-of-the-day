import React, { Component, Fragment } from 'react';
import axios from 'axios';
import DateInput from './componenets/DateInput';
import Photo from './componenets/Photo';
import Header from './componenets/Header';

class App extends Component {
  _isMounted = false;

  state = {
    isLoading: true,
    date: new Date(),
    displayPhoto: '',
    photos: []
  };

  //Get Current Photo of the Day When Component Mounts Into The DOM
  componentDidMount() {
    this._isMounted = true;

    axios
      .get(`https://api.nasa.gov/planetary/apod?&api_key=DEMO_KEY`)
      .then(response => {
        if (this._isMounted) {
          this.setState({
            isLoading: false,
            displayPhoto: response.data
          });
        }
      });
  }

  //Reset _isMounted back to false when component is UnMounted from the DOM
  componentWillUnmount() {
    this._isMounted = false;
  }

  changeDate = date => {
    this.setState({
      date,
      displayPhoto: ''
    });
    this.getPhoto(date);
  };

  getDate = time => {
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    return `${year}-${month + 1}-${day}`; //Add 1 to the month to get correct date.
  };

  //Get Photo of Date User Request
  getPhoto = userDate => {
    let date = this.getDate(userDate);
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response =>
        this.setState({
          displayPhoto: response.data
        })
      );
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <DateInput changeDate={this.changeDate} date={this.state.date} />
          <Photo photo={this.state.displayPhoto} />
        </div>
      </Fragment>
    );
  }
}

export default App;
