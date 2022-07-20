import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditDto } from './dto';

@Injectable()
export class EditSectionService {
  constructor(private readonly prisma: PrismaService) { }
  async editSection(dto: EditDto) {
    const dtoWithoutID = Object.assign({}, dto)
    delete dtoWithoutID.id
    return this.prisma.section.update({
      where: {
        id: dto.id,
      },
      data: dtoWithoutID,
    });
  }
}
