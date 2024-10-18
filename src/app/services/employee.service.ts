import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbPath = '/employees';

  employeesRef: AngularFirestoreCollection<Employee>;

  constructor(private db: AngularFirestore) {
    this.employeesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Employee> {
    return this.employeesRef;
  }

  create(employee: Employee): any {
    return this.employeesRef.add({ ...employee });
  }
}