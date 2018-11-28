import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import TableItem from './TableItem';
import { connect } from 'react-redux';
import { addRow, deleteRow } from '../common/actions/appActions';
//import proptypes!

export default class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th><div>Name
							</div>
							<div>(job title)
							</div>
						</th>
						<th>Age</th>
						<th>Nickname</th>
						<th>Employee</th>
					</tr>
				</thead>
				<tbody>
					{this.props.persons.map((person, index) => {
						return <TableItem
							key={index}
							person={person}
						/>
					}
					)}
				</tbody>

			</table>
		);
	}
};

const mapStateToProps = state => {
	return {
		persons: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addEmployee: function (value) {
			dispatch(addRow(value))
		}
	}
};
connect(mapStateToProps, mapDispatchToProps)(Table);
