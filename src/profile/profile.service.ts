import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    getAllProfiles() {
        return this.prisma.profile.findMany();
    }

    createProfile(data: Prisma.ProfileCreateInput) {
        return this.prisma.profile.create({ data });
    }
}
