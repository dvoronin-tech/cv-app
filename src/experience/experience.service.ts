import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExperience } from './experience.model';

@Injectable()
export class ExperienceService {
    constructor(private prisma: PrismaService) {}

    getExperienceByProfileId(profileId: string) {
        return this.prisma.experience.findMany({ where: { profileId } });
    }

    createExperience(data: CreateExperience) {
        return this.prisma.experience.create({ data });
    }
}
