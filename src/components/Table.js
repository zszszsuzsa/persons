import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import TableItem from './TableItem';
import { connect } from 'react-redux';
import { addRow, deleteRow } from '../common/actions/appActions';
import './Table.scss';

export default class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th><div>Name
							</div>
							<div class='job'>(job title)
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
