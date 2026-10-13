import {
    type Education as EducationRecord,
    Prisma,
} from '../generated/prisma/client';
import {
    Field,
    GraphQLISODateTime,
    ID,
    InputType,
    ObjectType,
} from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class SharedEducation {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => GraphQLISODateTime)
    startDate: Date;

    @Field(() => GraphQLISODateTime, { nullable: true })
    endDate: Date;

    @Field()
    profileId: string;
}

@InputType()
export class CreateEducation
    extends SharedEducation
    implements Prisma.EducationUncheckedCreateInput {}

@ObjectType()
export class Education extends SharedEducation implements EducationRecord {
    @Field(() => ID)
    id: string;
}
