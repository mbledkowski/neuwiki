import { ApiProperty } from '@nestjs/swagger';
import { CreateDto } from 'src/create-section/dto';

export class EditDto extends CreateDto {
  @ApiProperty()
  id: string;
}
