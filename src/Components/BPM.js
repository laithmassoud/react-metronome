import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './BPM.css'
import click1 from '../Audio/click1.wav';
import click2 from '../Audio/click2.wav';






export default class BPM extends Component {
    constructor(props){
    super()
    this.state = {
        value: 60,
        running:false,
        count:0,
        Beat:4
      }
      this.click1 = new Audio(click1);
      this.click2 = new Audio(click2);
    }

      handleChange = value => {
        this.setState({
          value: value,
        })
      }

playClick = () => {
const {count, Beat}= this.state
 if(count % Beat === 0){
 this.click1.play()
 }
 else{
 this.click2.play()
 }
 this.setState({
      count:this.state.count+1
 })

} 
SoundhandleChange = () => {
        if(this.state.running){
            clearInterval(this.timer)
            this.setState({
            running:false
            })
        }
        else {
    let S = (60/ this.state.value) *1000
   this.timer = setInterval(this.playClick, S);
    this.setState(prevState => { return {running: !prevState.running}})
}
        }
    render() {
    const { value, running } = this.state
     return (
       <Fragment>
        <h1>{value} BPM</h1>
        <Slider
        className='slide'
          min={60}
          max={240}
          tooltip={false}
          value={value}
          onChange={this.handleChange}
        />
        <Button  className="Button" variant="outlined" color="primary" onClick={this.SoundhandleChange}>
          {running ? 'Stop' : 'Start'}
          </Button>

    </Fragment>
        );
    }
}