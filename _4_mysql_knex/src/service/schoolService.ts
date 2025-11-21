import { Request, Response } from 'express';
import { database } from '../database';
import { Student } from '../model/student';
import { schoolDataAccess } from '../data_access/schoolDataAccess';

class SchoolService {

    getAll = async () => {
        const data = await schoolDataAccess.selectAll()
        return data
    }

    post = async (student: Student) => {
        const data = await schoolDataAccess.insert(student)
        return data
    }
}

export const schoolService = new SchoolService();