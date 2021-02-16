CREATE TABLE IF NOT EXISTS BOOKS
  (
     ID            SERIAL NOT NULL PRIMARY KEY,
     NAME          VARCHAR(200) NOT NULL,
     AUTHOR        VARCHAR(100) NOT NULL,
     DESCRIPTION   VARCHAR(5000),
     COVER_PICTURE VARCHAR(500),
     CATEGORY      VARCHAR(300) NOT NULL,
     STOCK         INTEGER NOT NULL DEFAULT 0,
     USER_WHO_LIKED TEXT[]
  ); 