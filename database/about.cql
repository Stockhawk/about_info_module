DROP KEYSPACE about;

CREATE KEYSPACE IF NOT EXISTS about
  WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

USE about;

CREATE TABLE IF NOT EXISTS stocks (
  symbol varchar PRIMARY KEY,
  equity float,
  cost float,
  shares int,
  TR float,
  PD float,
  CEO varchar,
  employees int,
  HQc varchar,
  HQs varchar,
  founded int,
  MC float,
  PER float,
  AV float,
  description text,
  high float,
  low float,
  open float,
  volume float,
  yearHigh float,
  yearLow float,
  tags list<varchar>
);

CREATE TABLE IF NOT EXISTS tags (
  tag varchar PRIMARY KEY,
  symbols list<varchar>,
  prices list<varchar>
);

COPY tags FROM '../generation/data/tags.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;


COPY stocks FROM '../generation/data/stocks-0.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-1.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-2.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-3.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-4.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-5.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-6.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-7.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-8.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/stocks-9.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;