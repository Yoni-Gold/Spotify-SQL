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
  PRIMARY KEY (`id`)
);

INSERT INTO `artists` VALUES (1, 'J. Cole' , 'rap' , '2012-04-10');
INSERT INTO `artists` VALUES (2, 'Post Malone' , 'pop' , '2012-01-19');
INSERT INTO `artists` VALUES (3, 'Ariana Grande' , 'pop' , '2015-11-11');
INSERT INTO `artists` VALUES (4, 'Billie Eilish' , 'pop' , '2014-08-20');
INSERT INTO `artists` VALUES (5, 'Green Day' , 'rock' , '2012-05-10');
INSERT INTO `artists` VALUES (6, 'Cold Play' , 'rock' , '2014-12-23');
INSERT INTO `artists` VALUES (7, 'Red Hot Chilly Peppers' , 'rock' , '2012-12-02');
INSERT INTO `artists` VALUES (8, 'Kendrick Lamar' , 'rap' , '2015-11-17');
INSERT INTO `artists` VALUES (9, 'Eminem' , 'rap' , '2014-11-26');
INSERT INTO `artists` VALUES (10, 'Justin Biber' , 'hip hop' , '2013-03-25');
INSERT INTO `artists` VALUES (11, 'Rihana' , 'pop' , '2016-01-11');



CREATE TABLE `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `user_id` int,
  `created_at` date NOT NULL,
  `public` boolean NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) -- ON DELETE RESTRICT ON UPDATE CASCADE ?
  );
  
INSERT INTO `playlists` VALUES (1, 'My Rock Music' , 8 , '2017-06-14' , true);
INSERT INTO `playlists` VALUES (2, 'chill' , 4 , '2020-01-21' , false);
INSERT INTO `playlists` VALUES (3, 'my favorites' , 1 , '2020-01-22' , true);
INSERT INTO `playlists` VALUES (4, 'rap' , 2 , '2018-11-09' , false);
INSERT INTO `playlists` VALUES (5, 'parties' , 8 , '2019-06-19' , false);
INSERT INTO `playlists` VALUES (6, 'best of hip hop' , 9 , '2018-05-15' , false);
INSERT INTO `playlists` VALUES (7, 'music to drive to' , 4 , '2018-04-30' , false);
INSERT INTO `playlists` VALUES (8, 'i love these songs' , 5 , '2019-08-30' , true);
INSERT INTO `playlists` VALUES (9, '90s Hits' , null , '2016-12-08' , true);
INSERT INTO `playlists` VALUES (10, 'Workout Music' , null , '2017-03-18' , true);
INSERT INTO `playlists` VALUES (11, 'Latest Hits' , null , '2020-07-20' , true);


CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `artist_id` int NOT NULL,
  `number_of_songs` int NOT NULL check (`number_of_songs` > 0),
  `uploaded_at` date NOT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
);

INSERT INTO `albums` VALUES (1, 'To Pimp A Butterfly' , 8 , 12 , '2015-02-20' );
INSERT INTO `albums` VALUES (2, 'Kamikaze' , 9 , 14 , '2018-09-12' );
INSERT INTO `albums` VALUES (3, 'Good Kid M.A.A.D City' , 8 , 11 , '2013-01-12' );
INSERT INTO `albums` VALUES (4, '4 Your Eyes Only' , 1 , 14 , '2015-11-10' );
INSERT INTO `albums` VALUES (5, 'When We Fall Asleep Where Do We Go' , 4 , 13 , '2018-07-06' );


CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `artist_id` int NOT NULL,
  `album_id` int default 0,
  `uploaded_at` date NOT NULL,
  `length_seconds` int NOT NULL,
  `youtube_link` varchar(50),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`)
);

INSERT INTO `songs` VALUES (1, 'No Role Modelz' , 1 , null ,  '2014-08-24' , 212 , null);
INSERT INTO `songs` VALUES (2, 'HUMBLE.' , 8 , null ,  '2016-11-21' , 238 , null);
INSERT INTO `songs` VALUES (3, 'Rockstar' , 2 , null ,  '2014-04-02' , 201 , null);
INSERT INTO `songs` VALUES (4, 'Bad Guy' , 4 , null ,  '2019-01-16' , 250 , null);
INSERT INTO `songs` VALUES (5, 'Lose Yourself' , 9 , null ,  '2015-05-25' , 294 , null);
INSERT INTO `songs` VALUES (6, 'KOD' , 1 , null ,  '2018-11-20' , 198 , null);
INSERT INTO `songs` VALUES (7, 'Snow' , 7 , null ,  '2013-12-23' , 199 , null);
INSERT INTO `songs` VALUES (8, 'Sorry' , 10 , null ,  '2016-03-12' , 214 , null);
INSERT INTO `songs` VALUES (9, '7 Rings' , 3 , null ,  '2017-11-16' , 230 , null);
INSERT INTO `songs` VALUES (10, 'King Kunta' , 8 , null ,  '2014-09-02' , 256 , null);


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