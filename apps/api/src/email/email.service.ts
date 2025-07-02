import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  async sendEmail(emailData: any) {
    // Implement your email sending logic here
    // This could use services like SendGrid, AWS SES, etc.
    this.logger.log(`Sending email to: ${emailData.to}`);
    
    return {
      success: true,
      message: 'Email sent successfully',
    };
  }

  async sendWelcomeEmail(email: string, name?: string) {
    return this.sendEmail({
      to: email,
      subject: 'Welcome!',
      template: 'welcome',
      data: { name },
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string) {
    return this.sendEmail({
      to: email,
      subject: 'Password Reset',
      template: 'password-reset',
      data: { resetToken },
    });
  }
}