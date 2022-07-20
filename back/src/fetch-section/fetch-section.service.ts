import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FetchDto } from './dto';

@Injectable()
export class FetchSectionService {
  constructor(private readonly prisma: PrismaService) { }
  async fetchSection(dto: FetchDto) {
    if (dto.id) {
      return await this.prisma.section.findFirst({
        where: { id: dto.id },
      });
    }
    if (dto.urlName) {
      return await this.prisma.section.findFirst({
        where: { urlName: dto.urlName },
      });
    }
    throw new ForbiddenException('No id or urlName provided');
  }
}
