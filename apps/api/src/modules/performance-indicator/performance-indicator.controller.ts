import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PerformanceIndicatorService } from './performance-indicator.service';
import { CreatePerformanceIndicatorDto } from './dto/create-performance-indicator.dto';
import { UpdatePerformanceIndicatorDto } from './dto/update-performance-indicator.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ResponseInterceptor } from '../../common/interceptors/response.interceptor';

@Controller('performance-indicators')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ResponseInterceptor)
export class PerformanceIndicatorController {
  constructor(private readonly performanceIndicatorService: PerformanceIndicatorService) {}

  @Post()
  create(@Body() createPerformanceIndicatorDto: CreatePerformanceIndicatorDto) {
    return this.performanceIndicatorService.create(createPerformanceIndicatorDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.performanceIndicatorService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceIndicatorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerformanceIndicatorDto: UpdatePerformanceIndicatorDto) {
    return this.performanceIndicatorService.update(id, updatePerformanceIndicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performanceIndicatorService.remove(id);
  }
}