import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';

@Resolver()
export class AppResolver {
    @Query(() => String)
    hello() {
        return 'Hello World!';
    }
}

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
            sortSchema: true,
            graphiql: true,
        }),
        ProfileModule,
    ],
    providers: [AppResolver],
})
export class AppModule {}
