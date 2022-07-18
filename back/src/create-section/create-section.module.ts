import { Module } from '@nestjs/common';
import { CreateSectionController } from './create-section.controller';
import { CreateSectionService } from './create-section.service';

@Module({
  controllers: [CreateSectionController],
  providers: [CreateSectionService],
})
export class CreateSectionModule {}
