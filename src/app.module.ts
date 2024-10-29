import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@/context/auth/infrastructure/auth.modules';
import { AuthGuard } from '@/context/shared/guards/auth.guard';

@Module({
  providers: [AuthGuard],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://todo:9lXIP3FzTGXsM9c7@cluster0.i8kuny3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class AppModule {}