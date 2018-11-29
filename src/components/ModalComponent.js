import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalComponent.scss';


export default class ModalComponent extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleJobChange = this.handleJobChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleNicknameChange = this.handleNicknameChange.bind(this);
		this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
		this.setEmployee = this.setEmployee.bind(this);

		this.state = {
			newEmployee: {
				name: "",
				job: "",
				age: "",
				nickname: "",
				isEmployee: false
			},
			initial: "",
			show: false,
		};
	}

	// Show/ hide modal dialog
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}

	clearInput() {
		this.setState({ name: "", job: "", age: "", nickname: "", isEmployee: false })
	}

	//Setting the state by input fieldvalue binding
	handleNameChange(event) {
		this.setState({
			newEmployee: Object.assign({}, this.state.newEmployee, { name: event.target.value })
		});
	}
	handleJobChange(event) {
		this.setState({
			newEmployee: Object.assign({}, this.state.newEmployee, { job: event.target.value })
		});
	}
	handleAgeChange(event) {
		this.setState({
			newEmployee: Object.assign({}, this.state.newEmployee, { age: event.target.value })
		});
	}
	handleNicknameChange(event) {
		this.setState({
			newEmployee: Object.assign({}, this.state.newEmployee, { nick: event.target.value })
		});
	}
	handleEmployeeChange() {
		this.setState({
			newEmployee: Object.assign({}, this.state.newEmployee, { isEmployee: !this.state.newEmployee.isEmployee })
		});
	}

	setEmployee() {
		this.props.addPerson(this.state.newEmployee)
		this.handleClose();
		this.clearInput();
	}

	render() {
		return (
			<div>
				<div class="add">
				<Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
					Add
					</Button>
				</div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton class="modal-header">
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form class="well">
							<label for="name">
								Name:
								</label>
							<input type="text" value={this.state.newEmployee.name} onChange={e => this.handleNameChange(e)} />

							<label for="job">
								Job title:
								</label>
							<input type="text" value={this.state.newEmployee.job} onChange={this.handleJobChange} />

							<label for="age">
								Age:
								</label>
							<input type="text" value={this.state.newEmployee.age} onChange={this.handleAgeChange} />

							<label for="nickname">
								Nickname:
								</label>
							<input type="text" value={this.state.newEmployee.nickname} onChange={this.handleNicknameChange} />

							<label for="employee">
								Employee:
								</label>
							<input type="checkbox" value={this.state.newEmployee.isEmployee} name="emmployee" onChange={this.handleEmployeeChange}></input>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.setEmployee.bind(this)}>Add new</Button>
						<Button onClick={this.handleClose} class="close">Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}