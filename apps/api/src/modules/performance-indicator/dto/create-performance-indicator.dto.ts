import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreatePerformanceIndicatorDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  target_value: number;

  @IsNumber()
  current_value: number;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @IsUUID()
  project_id?: string;
}