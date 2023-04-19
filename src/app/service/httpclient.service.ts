import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Employee{
    constructor(
        public empId: string,
        public name: string,
        public designation: string,
        public salary: string,
    ){ }
}

@Injectable({
    providedIn: 'root'
})

export class HttpclientService{
    constructor(
        private HttpClient:HttpClient
    ){}
    getEmployees()
    {
        let basicScript=this.getHeader();
        let headers=new HttpHeaders(
            {Authorization:basicString}
        );
        console.log("test call");
        return this.HttpClient.get<Employee[]> ('http:localhost:8080/employees',{headers});
    
    }
    public deleteEmployee(employee){
        return this.HttpClient.delete<Employee> ("http://localhost:8080/employees"+"/"+ employee.empId);
    }

    public createEmployee(employee){
        return this.HttpClient.post<Employee>("http://localhost:8080/employees", employee);
    }
}