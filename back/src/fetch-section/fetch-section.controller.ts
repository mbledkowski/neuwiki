import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { FetchSectionService } from './fetch-section.service';

@Controller('fetch')
export class FetchSectionController {
  constructor(private readonly fetchSectionService: FetchSectionService) { }

  @Get('')
  @ApiQuery({ name: 'id', type: String, required: false })
  @ApiQuery({ name: 'urlName', type: String, required: false })
  async fetchSection(@Query('id') id: string, @Query('urlName') urlName: string) {
    return this.fetchSectionService.fetchSection({ id, urlName });
  }
}
