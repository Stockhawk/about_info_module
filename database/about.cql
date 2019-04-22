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
  collections varchar PRIMARY KEY,
  symbols list<varchar>,
  prices list<float>
);