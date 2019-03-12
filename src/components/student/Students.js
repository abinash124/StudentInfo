import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Students extends Component {
    render() {
        const students = [{
            id: '214578234',
            firstName: 'Abinash',
            lastName: 'Bhattarai',
            email: 'bhattarai.abinash@gmail.com',
            phone: '817-715-6892',
            tuition: '1000'
        }]
        if (students) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {' '}
                                <i className="fas fa-graduation-cap"/> Students{' '}
                            </h2>
                        </div>
                        <div className="col-md-6"/>

                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Tuition</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.firstName} {student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>${parseFloat(student.tuition).toFixed(2)}</td>
                                <td>
                                    <Link to={`/student/${student.id}`} className="btn btn-secondary btn-sm">
                                        <i className="fas fa-info-circle"></i> Details
                                    </Link>
                                </td>

                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>

            );
        }
        else {
            return <h1> Loading...</h1>
        }

    }
}

export default Students;
