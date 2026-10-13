import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEducation } from './education.model';

@Injectable()
export class EducationService {
    constructor(private prisma: PrismaService) {}

    getAllEducationsByProfileId(profileId: string) {
        return this.prisma.education.findMany({ where: { profileId } });
    }

    createEducation(data: CreateEducation) {
        return this.prisma.education.create({ data });
    }
}
