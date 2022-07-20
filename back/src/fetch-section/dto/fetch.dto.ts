import { ApiProperty } from "@nestjs/swagger";

export class FetchDto {
  @ApiProperty({
    required: false,
  })
  id?: string;
  @ApiProperty({
    required: false,
  })
  urlName?: string;
} 
