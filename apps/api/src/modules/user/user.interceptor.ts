import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Remove sensitive information from user data
        if (data && typeof data === 'object') {
          return this.sanitizeUserData(data);
        }
        return data;
      }),
    );
  }

  private sanitizeUserData(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.sanitizeUserData(item));
    }

    if (data && typeof data === 'object') {
      const sanitized = { ...data };
      
      // Remove sensitive fields
      delete sanitized.password;
      delete sanitized.supabase_user_id;
      
      // Recursively sanitize nested objects
      Object.keys(sanitized).forEach((key) => {
        if (sanitized[key] && typeof sanitized[key] === 'object') {
          sanitized[key] = this.sanitizeUserData(sanitized[key]);
        }
      });

      return sanitized;
    }

    return data;
  }
}