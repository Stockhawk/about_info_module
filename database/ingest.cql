USE about;

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