import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SkillModule } from './skill/skill.module';
import { ProjectModule } from './project/project.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
            sortSchema: true,
            graphiql: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault() as any],
        }),
        ConfigModule.forRoot({ isGlobal: true }),
        ProfileModule,
        PrismaModule,
        SkillModule,
        ProjectModule,
        ExperienceModule,
        EducationModule,
    ],
})
export class AppModule {}
