import { PartialType } from '@nestjs/mapped-types';
import { CreateFeuilletempDto } from './create-feuilletemp.dto';

export class UpdateFeuilletempDto extends PartialType(CreateFeuilletempDto) {}
