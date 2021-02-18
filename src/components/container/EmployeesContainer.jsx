import React, { Component } from 'react';

class EmployeesContainer extends Component {
    state = {
        search: "",
        employees: [], 
        filteredEmployees: [], 
        sortDirections: this.initialSortDirections, 
    };

    get initialSortDirections() {
        return {
            name: "",
            phone: "",
            email: "", 
            dob: "",
        }
    };
}

//When this component mounts, load random users as employees from http://randomuser.me/


export default EmployeesContainer;