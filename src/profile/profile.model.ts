import {
    Field,
    GraphQLISODateTime,
    ID,
    InputType,
    ObjectType,
} from '@nestjs/graphql';
import type {
    Profile as ProfileRecord,
    Prisma,
} from '../generated/prisma/client';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class SharedProfile {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => GraphQLISODateTime)
    birthDate: Date;

    @Field()
    title: string;

    @Field()
    summary: string;

    @Field()
    city: string;

    @Field()
    country: string;

    @Field()
    email: string;

    @Field(() => String, { nullable: true })
    phone: string | null;

    @Field(() => String, { nullable: true })
    telegram: string | null;

    @Field(() => String, { nullable: true })
    github: string | null;

    @Field(() => String, { nullable: true })
    linkedin: string | null;

    @Field(() => String, { nullable: true })
    website: string | null;
}

@InputType()
export class CreateProfile
    extends SharedProfile
    implements Prisma.ProfileCreateInput {}

@ObjectType()
export class Profile extends SharedProfile implements ProfileRecord {
    @Field(() => ID)
    id: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}
