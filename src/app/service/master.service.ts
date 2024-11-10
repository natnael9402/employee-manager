import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiresonse } from '../model/interface/master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllDept(): Observable<IApiresonse> {
    return this.http.get<IApiresonse>('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment')
  }


}
