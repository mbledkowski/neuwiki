import { Module } from '@nestjs/common';
import { EditSectionController } from './edit-section.controller';
import { EditSectionService } from './edit-section.service';

@Module({
  controllers: [EditSectionController],
  providers: [EditSectionService]
})
export class EditSectionModule {}
