import {
    type Project as ProjectRecord,
    Prisma,
    ProjectStatus,
} from '../generated/prisma/client';
import {
    Field,
    ID,
    ObjectType,
    InputType,
    registerEnumType,
} from '@nestjs/graphql';

registerEnumType(ProjectStatus, { name: 'ProjectStatus' });

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class SharedProject {
    @Field()
    status: ProjectStatus;

    @Field(() => [String])
    technologies: string[];

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => String, { nullable: true })
    url: string | null;

    @Field(() => String, { nullable: true })
    source: string | null;

    @Field()
    profileId: string;
}

@InputType()
export class CreateProject
    extends SharedProject
    implements Prisma.ProjectUncheckedCreateInput {}

@ObjectType()
export class Project extends SharedProject implements ProjectRecord {
    @Field(() => ID)
    id: string;
}
