import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfile } from './profile.model';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    getAllProfiles() {
        return this.prisma.profile.findMany();
    }

    createProfile(data: CreateProfile) {
        return this.prisma.profile.create({ data });
    }
}
