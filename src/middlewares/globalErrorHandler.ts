import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/errors/AppError.js";

export interface GlobalErrorInterface<T = never> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {

    if (err instanceof AppError) {
        console.error("TestError: ", err);

        return res.status(err.status).json({
            status: err.status,
            success: err.success,
            message: err.message,
        });
    }

  // 2. (Optional) Is this a Zod validation error?
  // if (err instanceof ZodError) { ... }

  // 3. The Fallback: It's an unknown native Error (Database crash, typo, etc.)
  console.error("🔥 UNEXPECTED ERROR:", err); // Log the real error (and stack trace) for the devs

  // Send a generic, safe response to the client
  res.status(500).json({
    status: 500,
    success: false,
    message: "Internal Server Error",
  });
};