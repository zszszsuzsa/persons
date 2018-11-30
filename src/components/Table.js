import React, { Component } from 'react';
import TableItem from './TableItem';
import './Table.scss';

export default class Table extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			selected: "name"
		};
		this.select = this.select.bind(this);
	}

	/**
	 * Sorts data by column
	 * @param {click event on column names} event 
	 */
	select(event) {
		//check which column is selected. 
		let id=event.target.id;
		//selected element's id is assigned to state as value
		this.setState({selected: id});
		// sortBYColumn store action is triggered
		this.props.sortByColumn(id);
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>
							<div id="name" onClick={(event) => { this.select(event) }}>Name
								{this.state.selected==="name" &&
									<span ><i class="fas fa-sort-up"></i></span>
								}
							</div>
							<div>(job title)</div>
						</th>
						<th>
							<div id="age" onClick={(event) => { this.select(event)}}>Age
							{this.state.selected==="age" &&
									<span ><i class="fas fa-sort-up"></i></span>
								}
							</div>
						</th>
						<th>
							<div id="nick" onClick={(event) => { this.select(event)}}>Nickname
							{this.state.selected==="nick" &&
									<span ><i class="fas fa-sort-up"></i></span>
								}
							</div>
						</th>
						<th>
							<div id="employee" onClick={(event) => { this.select(event)}}>Employee
							{this.state.selected==="employee" &&
									<span ><i class="fas fa-sort-up"></i></span>
								}
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.persons.map((person, index) => {
						return <TableItem
							key={index}
							i={index}
							person={person}
							deletePerson={this.props.deletePerson}
							convert={this.props.convert}
						/>
					}
					)}
				</tbody>

			</table>
		);
	}
};
