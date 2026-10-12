import { type Experience as ExperienceRecord, Prisma } from '../generated/prisma/client';
import { Field, GraphQLISODateTime, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class SharedExperience {
    @Field()
    companyName: string;

    @Field(() => [String])
    achievements: string[];

    @Field()
    role: string;

    @Field()
    description: string;

    @Field(() => GraphQLISODateTime)
    startDate: Date;

    @Field(() => GraphQLISODateTime, { nullable: true })
    endDate: Date | null;

    @Field()
    profileId: string;
}

@InputType()
export class CreateExperience
    extends SharedExperience
    implements Prisma.ExperienceUncheckedCreateInput {}

@ObjectType()
export class Experience extends SharedExperience implements ExperienceRecord {
    @Field(() => ID)
    id: string;
}
