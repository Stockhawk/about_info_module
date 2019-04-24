CREATE DATABASE IF NOT EXISTS about;

USE about;

DROP TABLE IF EXISTS stocks;
DROP TABLE IF EXISTS tags;

CREATE TABLE IF NOT EXISTS stocks (
  symbol text,
  av numeric(2),
  ceo text,
  cost numeric(2),
  description text,
  employees integer,
  equity numeric(2),
  founded integer,
  high numeric(2),
  hqc text,
  hqs text,
  low numeric(2),
  mc numeric(2),
  open numeric(2),
  pd numeric(2),
  per numeric(2),
  shares integer,
  tags text[],
  tr numeric(2),
  volume numeric(2),
  yearhigh numeric(2),
  yearlow numeric(2),
  PRIMARY KEY (symbol)
);

CREATE TABLE IF NOT EXISTS tags (
  tag text,
  symbols text[5],
  prices numeric(2)[],
  PRIMARY KEY (tag)
);

COPY tags FROM '/home/krise3/Project/about_info_module/generation/data/tags.csv'
  WITH (FORMAT csv, DELIMITER '|', HEADER true);