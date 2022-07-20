import { Controller, Get, Param, Query } from '@nestjs/common';
import { FetchSectionService } from './fetch-section.service';

@Controller('fetch')
export class FetchSectionController {
  constructor(private readonly fetchSectionService: FetchSectionService) { }

  @Get('')
  async fetchSection(@Query('id') id: string, @Query('urlName') urlName: string) {
    return this.fetchSectionService.fetchSection({ id, urlName });
  }
}
