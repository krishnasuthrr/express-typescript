import type { GlobalErrorInterface } from "../../middlewares/globalErrorHandler.js";

// 2. We extend the native Error class
export class AppError extends Error implements GlobalErrorInterface {
  public status: number;
  public success: boolean;

  constructor(status: number, message: string) {
    super(message); // This calls the native Error constructor (creates the stack trace)

    this.status = status;
    this.success = false; // Errors are always false by definition

    // Maintains proper stack trace for where our error was thrown (Node.js specific)
    Error.captureStackTrace(this, this.constructor);
  }
}