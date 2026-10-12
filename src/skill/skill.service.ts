import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSkill } from './skill.model';

@Injectable()
export class SkillService {
    constructor(private prisma: PrismaService) {}

    getSkillsByProfileId(profileId: string) {
        return this.prisma.skill.findMany({ where: { profileId } });
    }

    createSkill(data: CreateSkill) {
        return this.prisma.skill.create({ data });
    }
}
