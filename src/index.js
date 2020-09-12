// import React from 'react';
import ReactDOM from 'react-dom';
import React,{Component} from  'react';

//import App from './App';
import * as serviceWorker from './serviceWorker';
class Counters extends Component {
	 constructor(props)
    {
      super(props);
      this.state = {second:0,
      	counter:""
      }
 
      this.handlechange = this.handlechange.bind(this);
      this.StartTimer = this.StartTimer.bind(this);
      this.formatTime=this.formatTime.bind(this);
    }

	handlechange(e)
	{
		this.setState({second:e.target.value})
		
		}
		formatTime(timeInSeconds) {
		var seconds = timeInSeconds % 60;
		var minutes = Math.floor(timeInSeconds / 60);

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		//if(seconds==0&&minutes==0)
		//{
			//clearInterval(this.clock);
		//}

		return minutes + ":" + seconds;
	}


	StartTimer()
	{
		this.clock = setInterval(() => {
			if(this.state.second<=0)
			{

				clearInterval(this.clock);
			}
			this.setState({
				second: this.state.second-1,
				counter: this.formatTime(this.state.second)
			});
		}, 1000);

		





	/*const dateObj = new Date(this.state.second * 1000);
	   const minutes = parseInt(dateObj.getUTCMinutes()); 
             const seconds = parseInt(dateObj.getSeconds());;
             const time =minutes 
                + ':' + seconds
                console.log(time);
                const res=parseInt(time);
                console.log(res);
              
                setInterval(()=>{
                	this.setState({counter:(time)+1})
                },1000);*/


   
}
	render(){
		return (
			<div >
			<h1 style={{ color:"red"}}>CountDownTimer</h1>
			<h1>{this.state.counter}</h1>
			<input type="text" placeholder="enter time in a second"onChange={this.handlechange} style={{ width:"400px",color:"blue" }}/>
			<button onClick={this.StartTimer} style={{ color:"blue",height:"50px"}}>Start-Timer</button>
			</div>
			);

	}
}

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
