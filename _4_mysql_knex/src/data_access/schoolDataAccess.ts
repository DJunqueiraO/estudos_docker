import { database } from "../database";
import { Student } from "../model/student";
import { DataAccess } from "./dataAccess";

export class SchoolDataAccess extends DataAccess {

    selectAll = async () => {
        const data = await database(this.table).select('*')
        return data
    }

    insert = async (student: Student) => {
        const data = await database(this.table).insert(student)
        return data
    }
}

export const schoolDataAccess = new SchoolDataAccess('school');