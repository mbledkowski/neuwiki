import { Body, Controller, Post } from '@nestjs/common';
import { CreateSectionService } from './create-section.service';
import { CreateDto } from './dto';

@Controller('create')
export class CreateSectionController {
  constructor(private readonly createSectionService: CreateSectionService) {}

  @Post('')
  createSection(@Body() dto: CreateDto) {
    return this.createSectionService.createSection(dto);
  }
}
