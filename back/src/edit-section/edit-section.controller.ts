import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EditSectionService } from './edit-section.service';
import { AuthGuard } from '@nestjs/passport';
import { EditDto } from './dto';

@UseGuards(AuthGuard('jwt-editor'))
@Controller('edit')
export class EditSectionController {
  constructor(private readonly editSectionService: EditSectionService) { }

  @Post('')
  async editSection(@Body() dto: EditDto) {
    return this.editSectionService.editSection(dto);
  }
}
