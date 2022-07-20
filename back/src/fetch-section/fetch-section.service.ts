import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchSectionService {
  constructor(private readonly prisma: PrismaService) { }
  async fetchSection({ id, urlName }: { id?: string; urlName?: string }) {
    if (id) {
      return await this.prisma.section.findFirst({
        where: { id },
      });
    }
    if (urlName) {
      return await this.prisma.section.findFirst({
        where: { urlName },
      });
    }
    throw new ForbiddenException('No id or urlName provided');
  }
}
