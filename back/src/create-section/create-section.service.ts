import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDto } from './dto';

@Injectable()
export class CreateSectionService {
  constructor(private readonly prisma: PrismaService) {}
  async createSection(dto: CreateDto): Promise<{ status: string }> {
    try {
      await this.prisma.section.create({
        data: {
          urlName: dto.urlName,
          name: dto.name,
          fields: JSON.stringify(dto.fields),
          text: dto.text,
          i18n: JSON.stringify(dto.i18n),
        },
      });
      return { status: 'Added' };
    } catch (e) {
      throw new BadRequestException({ status: 'Error' });
    }
  }
}
