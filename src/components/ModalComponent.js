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
				nick: "",
				employee: false
			},
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

	// Clear input fields after sending data to store
	clearInput() {
		this.setState({ name: "", job: "", age: "", nick: "", employee: false })
	}

	//Setting the local state by input field value binding. 
	// These values will be sent to the store on clicking OK buttton
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
			newEmployee: Object.assign({}, this.state.newEmployee, { employee: !this.state.newEmployee.employee })
		});
	}

	/**
	 * runs when user clicks on OK 
	 * calls addPerson store method(send new data to teh store)
	 * converts store data to text(json) for DataDump component's textarea
	 * closes modal dialog
	 */
	setEmployee() {
		this.props.addPerson(this.state.newEmployee)
		this.props.convert();
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
						<Modal.Title>New person</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form class="well">
							<label htmlFor="name">
								Name:
								</label>
							<input type="text" value={this.state.newEmployee.name} onChange={e => this.handleNameChange(e)} />

							<label htmlFor="job">
								Job title:
								</label>
							<input type="text" value={this.state.newEmployee.job} onChange={this.handleJobChange} />

							<label htmlFor="age">
								Age:
								</label>
							<input type="text" value={this.state.newEmployee.age} onChange={this.handleAgeChange} />

							<label htmlFor="nick">
								Nickname:
								</label>
							<input type="text" value={this.state.newEmployee.nick} onChange={this.handleNicknameChange} />

							<label htmlFor="employee">
								Employee:
								</label>
							<input type="checkbox" value={this.state.newEmployee.employee} name="emmployee" onChange={this.handleEmployeeChange}></input>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.setEmployee.bind(this)}>OK</Button>
						<Button onClick={this.handleClose} class="close">Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}