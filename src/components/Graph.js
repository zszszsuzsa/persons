import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import './ModalComponent.scss';

export default class Graph extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.createGraph = this.createGraph.bind(this);

		this.state = {
			tabledata: null,
			show: false,
		};
	}

	/**
	 * caterorises people of person array (from store) based on age
	 */
	categorize() {

		let arr = [
			{ label: "0-20", number: 0 },
			{ label: "20-30", number: 0 },
			{ label: "30-40", number: 0 },
			{ label: "40-50", number: 0 },
			{ label: "50+", number: 0 },
			{ label: "other :)", number: 0 }
		]
		for (let i = 0; i < this.props.persons.length; i++) {
			var x = Number(this.props.persons[i].age);
			switch (true) {
				case (x < 21):
					arr[0].number = arr[0].number + 1;
					break;
				case (x > 20 && x < 31):
					arr[1].number = arr[1].number + 1;
					break;
				case (x > 30 && x < 41):
					arr[2].number = arr[2].number + 1;
					break;
				case (x > 40 && x < 51):
					arr[3].number = arr[3].number + 1;
					break;
				case (x > 50):
					arr[4].number = arr[4].number + 1;
					break;
				default:
					arr[5].number = arr[5].number + 1;
					break;
			}
		};
		this.setState({ tabledata: arr });
	}

	createGraph() {
		this.handleShow();
		this.categorize();
	}

	// Show/ hide modal dialog
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div>
				<div class="graph">
					<Button bsStyle="primary" bsSize="large" onClick={this.createGraph}>
						Graph
					</Button>
				</div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton class="modal-header">
						<Modal.Title>Number of people by age group</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<BarChart width={600} height={300} data={this.state.tabledata}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="label" />
							<YAxis />
							<Bar dataKey="number" barSize={20} fill="#008081">
							<LabelList dataKey="number" position="top" />
							</Bar>
						</BarChart>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose} class="close">Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}