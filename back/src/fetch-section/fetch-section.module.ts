import { Module } from '@nestjs/common';
import { FetchSectionController } from './fetch-section.controller';
import { FetchSectionService } from './fetch-section.service';

@Module({
  controllers: [FetchSectionController],
  providers: [FetchSectionService]
})
export class FetchSectionModule {}
