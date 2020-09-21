ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Data206786568*'; flush privileges;

DROP DATABASE IF EXISTS `Spotify-Data-Base`;
CREATE DATABASE `Spotify-Data-Base`;
USE `Spotify-Data-Base`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50),
  `country` char(3) NOT NULL,
  `created_at` date NOT NULL,
  `premium` boolean NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users` VALUES (1, 'John Riely' , 'JohnJohn@gmail.com' , 'USA' , '2018-09-03' , true);
INSERT INTO `users` VALUES (2, 'Shohei Ono' , null , 'JPN' , '2015-01-01' , true);
INSERT INTO `users` VALUES (3, 'Noa Adi' , 'noaadddi@gmail.com' , 'ISR' , '2017-11-23' , false);
INSERT INTO `users` VALUES (4, 'Ron Avinoam' , 'ronav@gmail.com' , 'ISR' , '2018-04-09' , false);
INSERT INTO `users` VALUES (5, 'Leonid Garin' , null , 'RUS' , '2018-01-31' , true);
INSERT INTO `users` VALUES (6, 'Pedro Antonio' , null , 'BRA' , '2016-10-19' , false);
INSERT INTO `users` VALUES (7, 'Alex Leonov' , 'leonov@gmail.com' , 'RUS' , '2017-02-05' , false);
INSERT INTO `users` VALUES (8, 'Yoav Cohen' , 'YoYo@gmail.com' , 'ISR' , '2020-03-01' , false);
INSERT INTO `users` VALUES (9, 'Peter Smith' , 'ThePeter@gmail.com' , 'USA' , '2019-12-22' , false);
INSERT INTO `users` VALUES (10, 'Dina Collins' , 'colldina@gmail.com' , 'GBR' , '2015-12-01' , false);
INSERT INTO `users` VALUES (11, 'Molly Bricks' , 'mBricks@gmail.com' , 'USA' , '2019-01-19' , true);
INSERT INTO `users` VALUES (12, 'Daniel Gayel' , 'MrDanielll@gmail.com' , 'FRA' , '2018-10-04' , false);
INSERT INTO `users` VALUES (13, 'Antonio Basille' , 'antonionino@gmail.com' , 'ITA' , '2017-07-30' , true);
INSERT INTO `users` VALUES (14, 'Gal Shemtov' , 'shemmamashtov@gmail.com' , 'ISR' , '2019-11-11' , true);
INSERT INTO `users` VALUES (15, 'Yael Levi' , 'yaelushlevi22@gmail.com' , 'ISR' , '2020-07-20' , false);


CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `genre` varchar(50),
  `joined_at` date NOT NULL,
  `cover_image` varchar(500),
  PRIMARY KEY (`id`)
);

INSERT INTO `artists` VALUES (1, 'J. Cole' , 'rap' , '2012-04-10', 'https://pbs.twimg.com/profile_images/1286117233585008640/CBP7O5Xm_400x400.jpg');
INSERT INTO `artists` VALUES (2, 'Post Malone' , 'pop' , '2012-01-19', 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/02/21/edf6e522-52de-11ea-8948-c9a8d8f9b667_image_hires_045852.jpg?itok=MBGVfIH7&v=1582232343');
INSERT INTO `artists` VALUES (3, 'Ariana Grande' , 'pop' , '2015-11-11', 'https://www.tubefilter.com/wp-content/uploads/2019/02/ariana-grande-1.jpg');
INSERT INTO `artists` VALUES (4, 'Billie Eilish' , 'pop' , '2014-08-20', 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc45b1830-78ba-11ea-bc41-6517026e24df.jpg?crop=3657%2C2438%2C148%2C1174');
INSERT INTO `artists` VALUES (5, 'Green Day' , 'rock' , '2012-05-10', 'https://www.nme.com/wp-content/uploads/2016/11/NME_GREENDAY_269_29482901_144821732.jpg');
INSERT INTO `artists` VALUES (6, 'Coldplay' , 'rock' , '2014-12-23', 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-184033-53049468.jpg');
INSERT INTO `artists` VALUES (7, 'Red Hot Chilly Peppers' , 'rock' , '2012-12-02', 'https://townsquare.media/site/838/files/2019/12/red-hot-chili-peppers.jpg?w=980&q=75');
INSERT INTO `artists` VALUES (8, 'Kendrick Lamar' , 'rap' , '2015-11-17', 'https://thesource.com/wp-content/uploads/2018/03/Kendrick-Lamar.jpeg');
INSERT INTO `artists` VALUES (9, 'Eminem' , 'rap' , '2014-11-26', 'https://www.rollingstone.com/wp-content/uploads/2020/01/eminem-review.jpg');
INSERT INTO `artists` VALUES (10, 'Justin Biber' , 'hip hop' , '2013-03-25', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15159/production/_113116368_gettyimages-1202446488.jpg');
INSERT INTO `artists` VALUES (11, 'Rihana' , 'pop' , '2016-01-11', 'https://thumbor.forbes.com/thumbor/1950x1950/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ceec355142c500008f42068%2F0x0.jpg%3FcropX1%3D32%26cropX2%3D1982%26cropY1%3D257%26cropY2%3D2207');
INSERT INTO `artists` VALUES (12, 'Kanye West' , 'hip hop' , '2015-12-20', 'https://pyxis.nymag.com/v1/imgs/43b/76c/88f02dad39322d39ccc09a8fdf2ea40fe9-kanye-west-canidacy.rsquare.w1200.jpg');
INSERT INTO `artists` VALUES (13, 'BTS' , 'pop' , '2019-03-02', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg');
INSERT INTO `artists` VALUES (14, 'Breaking Benjamin' , 'rock' , '2016-09-01', 'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2018/04/03143049/breaking-benjamin-online.jpg');
INSERT INTO `artists` VALUES (15, '2pac' , 'rap' , '2013-04-13', 'https://www.nme.com/wp-content/uploads/2019/12/GettyImages-1125955705-696x442.jpg');
INSERT INTO `artists` VALUES (16, 'imagine dragons' , 'pop' , '2015-04-11', 'https://pbs.twimg.com/profile_images/1047708254447357957/fvJXTeOY.jpg');
INSERT INTO `artists` VALUES (17, 'Dennis Lloyd' , 'pop' , '2014-11-27', 'https://i.ytimg.com/vi/GuLTb9cYHWE/maxresdefault.jpg');
INSERT INTO `artists` VALUES (18, 'Snoop Dogg' , 'rap' , '2015-10-21', 'https://static.billboard.com/files/media/Snoop-Dogg-cr-Kenneth-Cappello-billboard-1548-768x433.jpg');
INSERT INTO `artists` VALUES (19, 'Ed Sheeran' , 'pop' , '2016-02-28', 'https://i2.wp.com/hkpub.net/wp-content/uploads/2019/07/Ed-Sheeran-Press-Photo-2-Credit-Mark-Surridge-crop.jpg?fit=1200%2C1068&ssl=1');
INSERT INTO `artists` VALUES (20, 'bbno$' , 'rap' , '2018-11-02', 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2020/03/04/D_TNZOBUIAAurqz.jpg');



CREATE TABLE `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `user_id` int,
  `created_at` date NOT NULL,
  `public` boolean NOT NULL,
  `cover_image` varchar(500),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
  );
  
INSERT INTO `playlists` VALUES (1, 'My Rock Music' , 8 , '2017-06-14' , true, 'https://eddietrunk.com/wp-content/uploads/2019/09/RockMusic600.jpg');
INSERT INTO `playlists` VALUES (2, 'chill' , 4 , '2020-01-21' , false, 'https://i.ytimg.com/vi/RLWcYADoV84/maxresdefault.jpg');
INSERT INTO `playlists` VALUES (3, 'my favorites' , 1 , '2020-01-22' , true, 'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg');
INSERT INTO `playlists` VALUES (4, 'rap' , 2 , '2018-11-09' , false, 'https://image.freepik.com/free-vector/rap-battle-neon-text-hand-holding-microphone_1262-11900.jpg');
INSERT INTO `playlists` VALUES (5, 'parties' , 8 , '2019-06-19' , false, 'https://static.toiimg.com/photo/73045588.cms');
INSERT INTO `playlists` VALUES (6, 'best of hip hop' , 9 , '2018-05-15' , false, 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/johnson-169hero-hiphop-shutterstock.jpg');
INSERT INTO `playlists` VALUES (7, 'music to drive to' , 4 , '2018-04-30' , false, 'https://img.etimg.com/thumb/msid-71477539,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg');
INSERT INTO `playlists` VALUES (8, 'i love these songs' , 5 , '2019-08-30' , true, 'https://lh3.googleusercontent.com/MYWHyzqjk_ByAfgTAaXlWhuGYJJy37JuJg7Cj4PDO-t8C6hLIYMKa8I3R-NOsAZNd20wq5iAzA=w2880-h1619-l90-rj');
INSERT INTO `playlists` VALUES (9, '90s Hits' , null , '2016-12-08' , true, 'https://images-na.ssl-images-amazon.com/images/I/81ySD45ZNbL._SL1500_.jpg');
INSERT INTO `playlists` VALUES (10, 'Workout Music' , null , '2017-03-18' , true, 'https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg');
INSERT INTO `playlists` VALUES (11, 'Latest Hits' , null , '2020-07-20' , true, 'https://www.dw.com/image/54667813_303.jpg');


CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `artist_id` int NOT NULL,
  `number_of_songs` int NOT NULL check (`number_of_songs` > 0),
  `uploaded_at` date NOT NULL,
  `cover_image` varchar(500),
  PRIMARY KEY (`id`),
   FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
);

INSERT INTO `albums` VALUES (1, 'To Pimp A Butterfly' , 8 , 12 , '2015-02-20', 'https://upload.wikimedia.org/wikipedia/he/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png' );
INSERT INTO `albums` VALUES (2, 'Kamikaze' , 9 , 14 , '2018-09-12', 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg'  );
INSERT INTO `albums` VALUES (3, 'Good Kid M.A.A.D City' , 8 , 11 , '2013-01-12', 'https://www.helicon.co.il/wp-content/uploads/2020/02/0602537192267.jpg'  );
INSERT INTO `albums` VALUES (4, '4 Your Eyes Only' , 1 , 14 , '2016-08-01', 'https://media.pitchfork.com/photos/5929c00fabf31b7dc71563da/1:1/w_600/6a6268b6.jpg');
INSERT INTO `albums` VALUES (5, 'When We Fall Asleep Where Do We Go' , 4 , 13 , '2018-07-06', 'https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png');
INSERT INTO `albums` VALUES (6, 'KOD' , 1 , 13 , '2019-03-16', 'https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/b/76/b7694a54-4778-11e8-a64a-776834e70253/5adeb487943fd.image.jpg?resize=1200%2C1190');
INSERT INTO `albums` VALUES (7, 'Beerbongs & Bentleys' , 2 , 17 , '2016-11-16', 'https://i.pinimg.com/originals/e6/94/75/e69475741ad8f1a686d8390627630c47.jpg');
INSERT INTO `albums` VALUES (8, "Hollywood's Bleeding" , 2 , 15 , '2019-08-08', 'https://images.genius.com/456a385f5f9741e2202331ac8d06e1f2.1000x1000x1.jpg');


CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `artist_id` int NOT NULL,
  `album_id` int default 0,
  `uploaded_at` date NOT NULL,
  `length_seconds` int NOT NULL,
  `youtube_link` varchar(500),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`)
);

INSERT INTO `songs` VALUES (1, 'No Role Modelz' , 1 , null ,  '2014-08-24' , 212 , 'https://www.youtube.com/embed/k-VcA7C6meg');
INSERT INTO `songs` VALUES (2, 'HUMBLE.' , 8 , null ,  '2016-11-21' , 238 , 'https://www.youtube.com/embed/H4RELGc9su8');
INSERT INTO `songs` VALUES (3, 'Rockstar' , 2 , null ,  '2014-04-02' , 201 , 'https://www.youtube.com/embed/4GFAZBKZVJY');
INSERT INTO `songs` VALUES (4, 'Bad Guy' , 4 , 5 ,  '2019-01-16' , 250 , 'https://www.youtube.com/embed/DyDfgMOUjCI');
INSERT INTO `songs` VALUES (5, 'Lose Yourself' , 9 , null ,  '2015-05-25' , 294 , 'https://www.youtube.com/embed/_Yhyp-_hX2s');
INSERT INTO `songs` VALUES (6, 'KOD' , 1 , 6 ,  '2018-11-20' , 198 , 'https://www.youtube.com/embed/ciya_AQu25o');
INSERT INTO `songs` VALUES (7, 'Snow' , 7 , null ,  '2013-12-23' , 199 , 'https://www.youtube.com/embed/ifXalt3MJtM');
INSERT INTO `songs` VALUES (8, 'Sorry' , 10 , null ,  '2016-03-12' , 214 , 'https://www.youtube.com/embed/8ELbX5CMomE');
INSERT INTO `songs` VALUES (9, '7 Rings' , 3 , null ,  '2017-11-16' , 230 , 'https://www.youtube.com/embed/QYh6mYIJG2Y');
INSERT INTO `songs` VALUES (10, 'King Kunta' , 8 , 1 ,  '2014-09-02' , 256 , 'https://www.youtube.com/embed/g0NVaX8DRN4');
INSERT INTO `songs` VALUES (11, 'For Whom the Bell Tolls' , 1 , 4 ,  '2015-08-01' , 258 , 'https://www.youtube.com/embed/kyHzJM1ucr4');
INSERT INTO `songs` VALUES (12, 'Immortal' , 1 , 4 ,  '2015-08-01' , 217 , 'https://www.youtube.com/embed/4ZxVZaYd1Fs');
INSERT INTO `songs` VALUES (13, 'Deja Vu' , 1 , 4 ,  '2015-08-01' , 242 , 'https://www.youtube.com/embed/oigcRpBOoZk');
INSERT INTO `songs` VALUES (14, 'Ville Mentality' , 1 , 4 ,  '2015-08-01' , 202 , 'https://www.youtube.com/embed/7OQcrUcw47k');
INSERT INTO `songs` VALUES (15, "She's Mine Pt. 1" , 1 , 4 ,  '2015-08-01' , 242 , 'https://www.youtube.com/embed/VB0e6fyI-Q0');
INSERT INTO `songs` VALUES (16, 'Change' , 1 , 4 ,  '2015-08-01' , 247 , 'https://www.youtube.com/embed/ZN6RBOAyRhE');
INSERT INTO `songs` VALUES (17, 'Neighbors' , 1 , 4 ,  '2015-08-01' , 197 , 'https://www.youtube.com/embed/X5Z5UOLP7js');
INSERT INTO `songs` VALUES (18, 'Foldin Clothes' , 1 , 4 ,  '2015-08-01' , 209 , 'https://www.youtube.com/embed/t3x9IcFVPAI');
INSERT INTO `songs` VALUES (19, "She's Mine Pt. 2" , 1 , 4 ,  '2015-08-01' , 197 , 'https://www.youtube.com/embed/YukMATMQG54');
INSERT INTO `songs` VALUES (20, '4 Your Eyez Only' , 1 , 4 ,  '2015-08-01' , 512 , 'https://www.youtube.com/embed/g_W9af_CQDs');
INSERT INTO `songs` VALUES (21, 'Better Now' , 2 , 7 ,  '2016-12-11' , 241 , 'https://www.youtube.com/embed/UYwF-jdcVjY');
INSERT INTO `songs` VALUES (22, '92 Explorer' , 2 , 7 ,  '2016-11-30' , 218 , 'https://www.youtube.com/embed/OhqyRJtv3K0');
INSERT INTO `songs` VALUES (23, "Hollywood's Bleeding" , 2 , 8 ,  '2019-02-17' , 180 , 'https://www.youtube.com/embed/w5GrxfjuTTI');
INSERT INTO `songs` VALUES (24, "Circles" , 2 , 8 ,  '2019-02-17' , 211 , 'https://www.youtube.com/embed/wXhTHyIgQ_U');
INSERT INTO `songs` VALUES (25, "Goodbyes" , 2 , 8 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/YgKDE5eYNqc');
INSERT INTO `songs` VALUES (26, "my strange addiction" , 4 , 5 ,  '2018-05-09' , 242 , 'https://www.youtube.com/embed/k1ATPhkVWi0');
INSERT INTO `songs` VALUES (27, "when the party's over" , 4 , 5 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/pbMwTqkKSps');
INSERT INTO `songs` VALUES (28, "ATM" , 1 , 6 ,  '2018-02-17' , 202 , 'https://www.youtube.com/embed/ew7qhDBQcU4');
INSERT INTO `songs` VALUES (29, "1985" , 1 , 6 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/ii6u1wSAu90');
INSERT INTO `songs` VALUES (30, "motiv8" , 1 , 6 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/2hMy0rnHQv0');
INSERT INTO `songs` VALUES (31, "Kamikaze" , 9 , 2 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/FhF9RwkHAJw');
INSERT INTO `songs` VALUES (32, "Greatest" , 9 , 2 ,  '2019-02-17' , 202 , 'https://www.youtube.com/embed/QdS60of43qA');
INSERT INTO `songs` VALUES (33, "nevermind" , 17 , null ,  '2017-10-01' , 213 , 'https://www.youtube.com/embed/kCfVv3RsGw4');
INSERT INTO `songs` VALUES (34, "playa" , 17 , null ,  '2016-06-01' , 218 , 'https://www.youtube.com/embed/vVVQHN7MH8w');
INSERT INTO `songs` VALUES (35, "FIRE" , 13 , null ,  '2016-06-30' , 218 , 'https://www.youtube.com/embed/ALj5MKjy2BU');
INSERT INTO `songs` VALUES (36, "Bad Boy" , 20 , null ,  '2019-06-30' , 218 , 'https://www.youtube.com/embed/xc6BnDajozw');
INSERT INTO `songs` VALUES (37, "Gin and Juice" , 18 , null ,  '2013-01-11' , 213 , 'https://www.youtube.com/embed/OKGJOtRaqMg');
INSERT INTO `songs` VALUES (38, "Vato" , 18 , null ,  '2012-09-22' , 222 , 'https://www.youtube.com/embed/Inw7B2F6_Hc');
INSERT INTO `songs` VALUES (39, "Radioactive" , 16 , null ,  '2012-09-22' , 222 , 'https://www.youtube.com/embed/CAEUnn0HNLM');
INSERT INTO `songs` VALUES (40, "Believer" , 16 , null ,  '2017-09-22' , 253 , 'https://www.youtube.com/embed/7wtfhZwyrcc');
INSERT INTO `songs` VALUES (41, "Adventure Of A Lifetime" , 6 , null ,  '2016-03-23' , 223 , 'https://www.youtube.com/embed/nJtK14ffgEM');
INSERT INTO `songs` VALUES (42, "Hit 'Em Up" , 15 , null ,  '2012-03-16' , 303 , 'https://www.youtube.com/embed/41qC3w3UUkU');




CREATE TABLE `interactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `song_id` int NOT NULL,
  `play_count` int NOT NULL  check (`play_count` > 0),
  `is_liked` boolean NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`)
);

INSERT INTO `interactions` VALUES (1, 3, 1, 1, true);
INSERT INTO `interactions` VALUES (2, 2, 2, 4, true);
INSERT INTO `interactions` VALUES (3, 12, 10, 1, false);
INSERT INTO `interactions` VALUES (4, 9, 5, 2, true);
INSERT INTO `interactions` VALUES (5, 1, 10, 6, false);
INSERT INTO `interactions` VALUES (6, 4, 2, 1, false);
INSERT INTO `interactions` VALUES (7, 3, 7, 3, false);
INSERT INTO `interactions` VALUES (8, 2, 5, 2, false);
INSERT INTO `interactions` VALUES (9, 8, 1, 6, true);
INSERT INTO `interactions` VALUES (10, 11, 9, 8, true);
INSERT INTO `interactions` VALUES (11, 15, 1, 2, false);
INSERT INTO `interactions` VALUES (12, 15, 6, 4, true);
INSERT INTO `interactions` VALUES (13, 14, 10, 4, true);
INSERT INTO `interactions` VALUES (14, 13, 8, 1, false);
INSERT INTO `interactions` VALUES (15, 13, 3, 3, false);
INSERT INTO `interactions` VALUES (16, 13, 5, 1, true);


CREATE TABLE `playlistSongs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playlist_id` int NOT NULL,
  `song_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`),
  FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`)
);

INSERT INTO `playlistSongs` VALUES (1, 1, 5);
INSERT INTO `playlistSongs` VALUES (2, 1, 21);
INSERT INTO `playlistSongs` VALUES (3, 1, 13);
INSERT INTO `playlistSongs` VALUES (4, 1, 12);
INSERT INTO `playlistSongs` VALUES (5, 1, 8);
INSERT INTO `playlistSongs` VALUES (6, 1, 1);
INSERT INTO `playlistSongs` VALUES (7, 1, 19);
INSERT INTO `playlistSongs` VALUES (8, 1, 11);
INSERT INTO `playlistSongs` VALUES (9, 1, 16);
INSERT INTO `playlistSongs` VALUES (10, 2, 1);
INSERT INTO `playlistSongs` VALUES (11, 2, 15);
INSERT INTO `playlistSongs` VALUES (12, 2, 22);
INSERT INTO `playlistSongs` VALUES (13, 2, 7);
INSERT INTO `playlistSongs` VALUES (14, 2, 4);
INSERT INTO `playlistSongs` VALUES (15, 3, 9);
INSERT INTO `playlistSongs` VALUES (16, 3, 4);
INSERT INTO `playlistSongs` VALUES (17, 3, 15);
INSERT INTO `playlistSongs` VALUES (18, 4, 14);
INSERT INTO `playlistSongs` VALUES (19, 4, 18);
INSERT INTO `playlistSongs` VALUES (20, 4, 17);
INSERT INTO `playlistSongs` VALUES (21, 4, 20);
INSERT INTO `playlistSongs` VALUES (22, 4, 2);
INSERT INTO `playlistSongs` VALUES (23, 4, 3);
INSERT INTO `playlistSongs` VALUES (24, 5, 3);
INSERT INTO `playlistSongs` VALUES (25, 5, 11);
INSERT INTO `playlistSongs` VALUES (26, 5, 19);
INSERT INTO `playlistSongs` VALUES (27, 6, 1);
INSERT INTO `playlistSongs` VALUES (28, 6, 2);
INSERT INTO `playlistSongs` VALUES (29, 6, 3);
INSERT INTO `playlistSongs` VALUES (30, 7, 31);
INSERT INTO `playlistSongs` VALUES (31, 7, 28);
INSERT INTO `playlistSongs` VALUES (32, 7, 14);
INSERT INTO `playlistSongs` VALUES (33, 7, 25);
INSERT INTO `playlistSongs` VALUES (34, 7, 19);
INSERT INTO `playlistSongs` VALUES (35, 7, 24);
INSERT INTO `playlistSongs` VALUES (36, 8, 32);
INSERT INTO `playlistSongs` VALUES (37, 8, 5);
INSERT INTO `playlistSongs` VALUES (38, 8, 22);
INSERT INTO `playlistSongs` VALUES (39, 8, 30);
