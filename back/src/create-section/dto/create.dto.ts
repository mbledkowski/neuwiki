import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty()
  urlName: string;
  @ApiProperty()
  name: string;
  @ApiProperty({
    type: 'object',
  })
  fields: {
    [key: string]:
      | string
      | number
      | Array<string | number>
      | { [key: string]: string | number | Array<string | number> };
  };
  @ApiProperty()
  text: string;
  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        fields: {
          type: 'object',
        },
        text: { type: 'string' },
      },
    },
  })
  i18n: {
    name: string;
    fields: {
      [key: string]:
        | string
        | number
        | Array<string | number>
        | { [key: string]: string | number | Array<string | number> };
    };
    text: string;
  }[];
}
