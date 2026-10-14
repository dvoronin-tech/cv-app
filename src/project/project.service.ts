import { Injectable } from '@nestjs/common';
import { SkillService } from '../skill/skill.service';
import { PrismaService } from '../prisma/prisma.service';
import { Args } from '@nestjs/graphql';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}

    getProjectsByProfileId(@Args('profileId') profileId: string) {
        return this.prisma.project.findMany({ where: { profileId } });
    }
}
