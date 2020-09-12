import React from 'react';
import   './from.css';
class Summary extends React.Component{

	render(){
		const {summ,cdate}=this.props;
		return(
			<div ClassName="Row" style={{display:'flex',
			margin:"0 auto" ,width:"80%",borderStyle: "dashed",color:"red",background:"white"
			 }}>
			<div ClassName="NewConfirmed" style={{padding:"20px",color:"Orange"}}>
			<h5>New Confirmed</h5>
			<h5>{summ.NewConfirmed}</h5>
			<h5>{new Date(cdate).toDateString()}</h5>
			</div>
			<div ClassName="TotalConfirmed"style={{ padding:"20px",color:"Violet"}}>
			<h5>Total Confirmed</h5>
			<h5>{summ.TotalConfirmed}</h5>
			<h5>{new Date(cdate).toDateString()}</h5>
			</div>
			<div ClassName="TotalConfirmed" style={{ padding:"20px",color:"red"}}>
			<h5>New Deaths</h5>
			<h5>{summ.NewDeaths}</h5>
			<h5>{new Date(cdate).toDateString()}</h5>
			</div>
			<div ClassName="TotalConfirmed" style={{padding:"20px",color:"Orange"}}>
			<h5>Total Deaths</h5>
			<h5>{summ.TotalDeaths}</h5>
			<h5>{new Date(cdate).toDateString()}</h5>
			</div>
			<div ClassName="TotalConfirmed" style={{padding:"20px"}}>
			<h5>Total Recoverd</h5>
			<h5>{summ.TotalRecovered}</h5>
			<h5>{new Date(cdate).toDateString()}</h5>
			</div>

			
			
			</div>
			
			);
	}
}
export default Summary;