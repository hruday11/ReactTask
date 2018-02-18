import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import NavBar from './NavBar';
import { registerUser } from './Redux/actionsIndex';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.state = { formValues:{}};
  }

  renderField=(field)=>{
    const{meta: {touched , error }} = field;
    const className = `form-group ${touched && error ? 'alert alert-danger' : ''}`;
    return <div className={className}>
    <label>{field.label}</label>
    <input className="form-control" type={field.type}  {...field.input}/>
    <div className="text-help">{touched ? error : ''}</div>
    </div>
  }
  handleChange=(event)=>{
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
  }
  onDrop(files) {
    this.setState({
      files
    });
  }
  onSubmit(values){
    console.log(this.state.formValues);
    this.props.registerUser(values, (res)=>{
      console.log(res);
      this.props.history.push('/login');
    });
  }
  render(){
    const {handleSubmit} = this.props; 
    let dropzoneRef;
    return(
      <div >
      <NavBar/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
      <Field label="User Name" name="username" placeholder="User Name" value={this.state.formValues["username"]}  onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field label="Password" type="password" name="password" placeholder="password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field label="User ID" name="userId" placeholder="User ID" value={this.state.formValues["userId"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Dropzone name="profilePic" ref={(node) => { dropzoneRef = node; }} multiple={false} className="dropzone" onChange={this.handleChange.bind(this)} onDrop={this.onDrop.bind(this)}></Dropzone>
      <button className="btn btn-primary" type="button" onClick={() => { dropzoneRef.open() }}>Upload File</button>
      <Field label="Address" name="address" placeholder="Address" value={this.state.formValues["address"]}  onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field type="date" label="Date Of Joining" name="DOJ" placeholder="Date Of Joining" value={this.state.formValues["DOJ"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field type="number" label="Mobile Number" name="mobNo" placeholder="+91 1234567890" value={this.state.formValues["mobNo"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field type="checkbox" label="admin" name="admin" value={this.state.formValues["admin"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <button className="btn btn-primary" type="submit">Register</button>
      </form>
      </div></div></div>
      );
  };
};

function validate(values) {
  const errors = {};
  if (!values.username || values.username.length < 8) {
    errors.username = "Enter a username & length shouldn't be less than 8";
  }if(!values.password || values.password.length < 4){
    errors.password = "please enter a Password & length shouldn't be less than 4";
  }if(!values.userId || values.userId.length < 6){
    errors.userId = "please enter User ID and should be of minimum length 6";
  }if(!values.address){
    errors.address = "address is needed";
  }if(!values.DOJ){
    errors.DOJ = "Date Of Joining is required";
  }if(!values.mobNo ){
    errors.mobNo = "Mobile No is required";
  }else if(values.mobNo.length < 10 || values.mobNo.length>10){
    errors.mobNo = "Please a valid Mobile Number"
  }
  return errors
}

export default reduxForm({
  validate,
  form:'PostsNewForm'
})(
connect(null, {registerUser}) (App))
;