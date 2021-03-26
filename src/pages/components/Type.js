import React, { Component } from 'react'
import Typical from 'react-typical'

const steps = [
    'Hello 👋', 1000,
    'I am KinKong!', 1000,
    'I am Cool..', 3000,
    'I can help you with this..', 1000,
    'I can help you with that..', 1000,
    'I beat Godzilla..', 1000,
    'I keep earth safe..', 1000,
    'To Know me Better..', 1000,
    'Watch My Movie..', 1000,
    'Lets Get Rocking!', 2000,
  ];
  export default class App extends Component {
    render () {
      return (
        <div>
          <Typical wrapper="h2" steps={steps} loop={Infinity} className={'caca'} />
        </div>
      )
    }
  }