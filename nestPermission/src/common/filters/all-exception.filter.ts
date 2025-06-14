import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let code = 1;
    let msg = exception.message;
    let status = 500;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      code = status === 401 ? 401 : 1;
      msg = exception.getResponse()['message'] || exception.message;
    }

    response.status(status).json({
      Code: code,
      Content: null,
      Msg: msg
    });
  }
}