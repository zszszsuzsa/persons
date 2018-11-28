import Table from './Table';
import ModalComponent from './ModalComponent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRow, deleteRow, getInitialList } from '../common/actions/appActions';


class App extends Component {

	constructor() {
		super();
		this.getAll = this.getAll.bind(this);
	}

	getAll() {
		this.props.getInitialList();
	}
	componentWillMount() {
		this.getAll();
		// this.setState({ persons: this.props.persons.persons });
	}

	render() {
		return (
			<div className="container">
				<ModalComponent/>
				{/* <ModalComponent addPerson={this.props.addPerson}/> */}
				<div className="row">
					<div className="col-sm-8 col-sm-offset-4">
						<Table className="table" persons={this.props.persons.persons} />
					</div>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state) => ({
	persons: state
});

const mapDispatchToProps = (dispatch) => ({
	//TODO
	// addPerson: newPerson=> {
	// 	dispatch(addRow(newPerson))
	// },
	getInitialList() {
		dispatch(getInitialList())
	}
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);






