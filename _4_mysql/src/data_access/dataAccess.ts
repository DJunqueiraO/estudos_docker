export class DataAccess {

    protected table: string = "";

    constructor(table: string) {
        if (table) {
            this.table = table;
        }
    }
}