export class ApiError extends Error {
	constructor(error: string) {
		super(error);
		this.name = "ApiError";
	}
}
