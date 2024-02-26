import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class LinkDTO {
  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  link: string;
}

class ParametersDTO {
  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    type: () => LinkDTO,
    required: false,
    nullable: true,
  })
  @Type(() => LinkDTO)
  @ValidateNested({ each: true })
  @IsOptional()
  image: LinkDTO;

  @ApiProperty({
    type: () => LinkDTO,
    required: false,
    nullable: true,
  })
  @Type(() => LinkDTO)
  @ValidateNested({ each: true })
  @IsOptional()
  document: LinkDTO;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
  })
  @IsString()
  @IsOptional()
  text: string;
}

class ComponentsDTO {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    type: () => ParametersDTO,
    isArray: true,
  })
  @Type(() => ParametersDTO)
  @ValidateNested({ each: true })
  parameters: ParametersDTO[];
}

class CodeDTO {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  code: string;
}

class TemplateDTO {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: () => CodeDTO,
    required: true,
    nullable: false,
  })
  @Type(() => CodeDTO)
  @ValidateNested({ each: true })
  language: CodeDTO;

  @ApiProperty({
    type: () => ComponentsDTO,
    isArray: true,
    required: true,
    nullable: false,
  })
  @Type(() => ComponentsDTO)
  @ValidateNested({ each: true })
  components: ComponentsDTO[];
}

export class SendMessageRequestDTO {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  messaging_product: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    type: () => TemplateDTO,
    required: true,
    nullable: false,
  })
  @Type(() => TemplateDTO)
  @ValidateNested({ each: true })
  template: TemplateDTO;
}
