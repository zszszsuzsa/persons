import Table from './Table';
import ModalComponent from './ModalComponent';
import DataDump from './DataDump';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRow, deleteRow, getInitialList, convert } from '../common/actions/appActions';
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
				<ModalComponent addPerson={this.props.addPerson} convert={this.props.convertStateToJSON}/>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 table-responsive">
						<Table className="table" persons={this.props.state.persons} deletePerson={this.props.deletePerson} convert={this.props.convertStateToJSON} />
					</div>
				</div>
				<div className="row dump">
					<div className="col-sm-8 col-sm-offset-2 table-responsive">
						<DataDump raw={this.props.state.raw}/>
					</div>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	addPerson: newPerson=> {
		dispatch(addRow(newPerson))
	},
	deletePerson: indexToDelete=>{
		dispatch(deleteRow(indexToDelete))
	},
	getInitialList() {
		dispatch(getInitialList())
	},
	convertStateToJSON(){
		dispatch(convert())
	}
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);






