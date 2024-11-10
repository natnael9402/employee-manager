import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiresonse, IParentDept } from '../../model/interface/master';
import { single } from 'rxjs';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisible = signal<boolean>(false)

  masrterSrc = inject(MasterService)

  parentDeptList = signal<IParentDept[]>([])

ngOnInit(): void {
  this.getParentDept()
}

getParentDept() {
  this.masrterSrc.getAllDept().subscribe((res: IApiresonse) => {
this.parentDeptList.set(res.data)
  })
}

}

