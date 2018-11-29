import React, {Component} from 'react';

class TableItem extends Component {

    render() {
        return (
            <tr>
            <td><div>{this.props.person.name}</div>
                <div>{this.props.person.job}</div>
           </td>
            <td>{this.props.person.age}</td>
            <td>{this.props.person.nick}</td>
            <td>
                <input type="checkbox" name="this.props.key" readOnly checked={this.props.person.employee}>
                </input>
            </td>
            <td>
                {<a href="#">Delete</a>}
               {/* <a href="#" deleteItem={this.deleteItem.bind(this, key)} onClick={this.props.deleteItem}>Delete</a> */}
            </td>
          </tr>
              
        );
    }
}

export default TableItem;