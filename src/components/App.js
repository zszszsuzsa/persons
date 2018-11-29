import Table from './Table';
import ModalComponent from './ModalComponent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRow, deleteRow, getInitialList } from '../common/actions/appActions';
import './App.scss';


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
	}

	render() {
		return (
			<div className="container-fluid">
				<ModalComponent addPerson={this.props.addPerson}/>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 table-responsive">
						<Table className="table" persons={this.props.persons.persons} />
					</div>
				</div>
				<div className="row dump">
					<div className="col-sm-8 col-sm-offset-2 table-responsive">
					<div>Data dump</div>
						<textarea className="dump-text" persons={this.props.persons.persons}></textarea>
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
	addPerson: newPerson=> {
		dispatch(addRow(newPerson))
	},
	deletePerson: index=>{
		//TODO
	},
	getInitialList() {
		dispatch(getInitialList())
	}
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);






