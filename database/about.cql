DROP KEYSPACE about;

CREATE KEYSPACE IF NOT EXISTS about
  WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 3 };

USE about;

CREATE TABLE IF NOT EXISTS stocks (
  prefix1 varchar,
  prefix2 varchar,
  suffix varchar,
  symbol varchar,
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
  tags list<varchar>,
  PRIMARY KEY ((prefix1, prefix2), suffix)
) WITH CLUSTERING ORDER BY (suffix DESC);

CREATE TABLE IF NOT EXISTS tags (
  tag varchar PRIMARY KEY,
  symbols list<varchar>,
  prices list<varchar>
);

COPY tags FROM '../generation/data/temp/tags.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-0.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-1.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-2.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-3.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-4.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-5.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-6.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-7.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-8.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;

COPY stocks FROM '../generation/data/temp/stocks-9.csv'
  WITH DELIMITER='|' AND HEADER=TRUE;
