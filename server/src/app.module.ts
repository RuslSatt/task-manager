import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.model';
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/comments.model';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DB,
            models: [User, Task, Comment],
            autoLoadModels: true,
        }),
        UsersModule,
        AuthModule,
        TasksModule,
        CommentsModule,
    ],
    controllers: [TasksController, CommentsController],
})
export class AppModule {}
