export class CustomHttpError extends Error {
    constructor(response) {
        super()
        this.name = "CustomHttpError";
        this.response = response;
    }
};