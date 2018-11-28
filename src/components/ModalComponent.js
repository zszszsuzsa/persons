import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { addRow} from '../common/actions/appActions';
import {mapDispatchToProps} from "./App";

export default class ModalComponent extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleJobChange = this.handleJobChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleNicknameChange = this.handleNicknameChange.bind(this);
		this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			show: false,
			name: "",
			job: "",
			age: "",
			nickname: "",
			isEmployee: false
		};
	}

	// Show/ hide modal dialog
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}

	//Setting the state by input fieldvalue binding
	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}
	handleJobChange(event) {
		this.setState({ job: event.target.value });
	}
	handleAgeChange(event) {
		this.setState({ age: event.target.value });
	}
	handleNicknameChange(event) {
		this.setState({ nickname: event.target.value });
	}
	handleEmployeeChange() {
		this.setState(() => {
			this.state.isEmployee = !this.state.isEmployee;
		});
	}

	setEmployee(){
		let employee={
			name:this.state.name,
			job: this.state.jos,
			age:this.state.age,
			nickname:this.state.nickname,
			isEmployee:this.state.isEmployee
		};
		// this.props.addEmployee(employee)
	}

	// Submit action
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
					Add
			 </Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<label>
								Name:
					<input type="text" value={this.state.name} onChange={e =>this.handleNameChange(e)} />
							</label>
							<label>
								Job title:
					<input type="text" value={this.state.job} onChange={this.handleJobChange} />
							</label>
							<label>
								Age:
					<input type="text" value={this.state.age} onChange={this.handleAgeChange} />
							</label>
							<label>
								Nickname:
					<input type="text" value={this.state.nickname} onChange={this.handleNicknameChange} />
							</label>
							<label>
								Employee:
							<input type="checkbox" value={this.state.isEmployee} name="emmployee" onChange={this.handleEmployeeChange}></input>
							</label>
							<input type="submit" value="Submit" />
						</form>
						<hr />
					</Modal.Body>
					<Modal.Footer>
					<Button onClick={this.setEmployee()}>Add new</Button>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}