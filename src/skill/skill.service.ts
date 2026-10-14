import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillService {
    constructor(private prisma: PrismaService) {}

    getSkillsByProfileId(profileId: string) {
        return this.prisma.skill.findMany({ where: { profileId } });
    }
}
