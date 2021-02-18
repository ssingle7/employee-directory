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

export default EmployeesContainer;