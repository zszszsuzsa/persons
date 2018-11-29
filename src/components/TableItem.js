import React, {Component} from 'react';

class TableItem extends Component {

    deleteAndConvert(){
        this.props.deletePerson(this.props.i);
        this.props.convert();
    }

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
               <a href="#" onClick={this.deleteAndConvert.bind(this)}>Delete</a>
            </td>
          </tr>
              
        );
    }
}

export default TableItem;