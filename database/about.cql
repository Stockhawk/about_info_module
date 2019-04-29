DROP KEYSPACE about;

CREATE KEYSPACE IF NOT EXISTS about
  WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 3 };

USE about;

CREATE TABLE IF NOT EXISTS stocks (
  prefix1 varchar,
  prefix2 varchar,
  prefix3 varchar,
  suffix varchar,
  symbol varchar,
  description text,
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
  high float,
  low float,
  open float,
  volume float,
  yearHigh float,
  yearLow float,
  tags list<varchar>,
  PRIMARY KEY ((prefix1, prefix2, prefix3), suffix)
) WITH compaction = { 'class' : 'LeveledCompactionStrategy' } ;

CREATE TABLE IF NOT EXISTS tags (
  tag varchar PRIMARY KEY,
  symbols list<varchar>,
  prices list<varchar>
);
