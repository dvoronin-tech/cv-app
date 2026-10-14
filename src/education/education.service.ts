import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EducationService {
    constructor(private prisma: PrismaService) {}

    getAllEducationsByProfileId(profileId: string) {
        return this.prisma.education.findMany({ where: { profileId } });
    }
}
