import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';
import { FavoriteArtistsModule } from './favorite-artists/favorite-artists.module';
import cloudinaryConfig from './cloudinary.config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importa el ConfigModule sin argumentos
    AlbumsModule,
    MongooseModule.forRoot(process.env.DB_HOST), // Ejemplo de uso de una variable de entorno
    AuthJwtModule,
    SongsModule,
    UserModule,
    PlaylistModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [cloudinaryConfig],
    }),
    FavoriteArtistsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('aut');
    consumer.apply(AuthMiddleware).forRoutes('u');
    consumer.apply(AuthMiddleware).forRoutes('songs');
  }
}
