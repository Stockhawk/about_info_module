CREATE DATABASE IF NOT EXISTS about;

USE about;

DROP TABLE IF EXISTS stocks;
DROP TABLE IF EXISTS tags;

CREATE TABLE IF NOT EXISTS stocks (
  symbol text,
  av numeric,
  ceo text,
  cost numeric,
  description text,
  employees integer,
  equity numeric,
  founded integer,
  high numeric,
  hqc text,
  hqs text,
  low numeric,
  mc numeric,
  open numeric,
  pd numeric,
  per numeric,
  shares integer,
  tags text[],
  tr numeric,
  volume numeric,
  yearhigh numeric,
  yearlow numeric,
  PRIMARY KEY (symbol)
);

CREATE TABLE IF NOT EXISTS tags (
  tag text,
  symbols text[5],
  prices numeric[],
  PRIMARY KEY (tag)
);

COPY tags FROM '/home/krise3/Project/about_info_module/generation/data/psql/tags.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-0.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-1.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-2.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-3.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-4.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-5.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-6.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-7.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-8.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);

COPY stocks FROM '/home/krise3/Project/about_info_module/generation/data/psql/stocks-9.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);