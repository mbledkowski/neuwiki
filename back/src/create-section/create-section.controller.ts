import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateSectionService } from './create-section.service';
import { CreateDto } from './dto';

@UseGuards(AuthGuard('jwt-editor'))
@Controller('create')
export class CreateSectionController {
  constructor(private readonly createSectionService: CreateSectionService) {}

  @Post('')
  createSection(@Body() dto: CreateDto) {
    return this.createSectionService.createSection(dto);
  }
}
