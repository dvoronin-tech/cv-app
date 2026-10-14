import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExperienceService {
    constructor(private prisma: PrismaService) {}

    getExperienceByProfileId(profileId: string) {
        return this.prisma.experience.findMany({ where: { profileId } });
    }
}
