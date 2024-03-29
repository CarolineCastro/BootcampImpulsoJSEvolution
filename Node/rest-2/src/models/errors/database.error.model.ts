

class DatabaseError extends Error {
    
    constructor (
        public message: string,
        public error?: any,
    ){

        super(message);

        this.error = error;
    }
}

export default DatabaseError;