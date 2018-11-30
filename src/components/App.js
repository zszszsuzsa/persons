import Table from './Table';
import ModalComponent from './ModalComponent';
import Graph from './Graph';
import DataDump from './DataDump';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRow, deleteRow, getInitialList, convert, sortAscending } from '../common/actions/appActions';
import './App.scss';


class App extends Component {

	constructor() {
		super();
		this.getAll = this.getAll.bind(this);
	}

	getAll() {
		this.props.getInitialList();
	}

	/**
	 *  before component mount initial list is got from store (from person.json file)
	 * data is solrted by name by default
	 */
	componentWillMount() {
		this.getAll();
		this.props.sortAscending("name");
	}

	render() {
		return (
			<div className="container-fluid">
				<ModalComponent addPerson={this.props.addPerson} 
								convert={this.props.convertStateToJSON}/>
				<Graph persons={this.props.state.persons} />
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 table-responsive">
						<Table 
							persons={this.props.state.persons} 
							deletePerson={this.props.deletePerson} 
							convert={this.props.convertStateToJSON} 
							sortByColumn={this.props.sortAscending} />
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

/**
 * store state is set as property
 */
const mapStateToProps = (state) => ({
	state: state
});

/**
 * store action are set as properties
 */
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
	},
	sortAscending: key=>{
		dispatch(sortAscending(key))
	}
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);






