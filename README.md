# Project Name

> About/Info module for stock tracking item detail page

## Related Projects

  - [Buy/Sell Module](https://github.com/hrsf113-group-5/buy_sell_module)
  - [Chart Module](https://github.com/hrsf113-group-5/chart_module)
  - [Ratings Module](https://github.com/hrsf113-group-5/ratings_history_module)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### API Routes

| Route | Method | Effect |
| --- | --- | --- |
| /stocks/:symbol | GET | static resource directory |
| /api/quotes/:symbol | GET | Queries database for quotes pertaining to given stock symbol |
| /api/quotes/:symbol | POST |  |
| /api/quotes/:symbol | PUT |  |
| /api/quotes/:symbol | DELETE |  |
| /stocks/tags/:tag | GET | Queries database for tags pertaining to given stock symbol |
| /stocks/tags/:tag | POST |  |
| /stocks/tags/:tag | PUT |  |
| /stocks/tags/:tag | DELETE |  |

Route handling may be found in the [server/index.js file](../master/server/index.js)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

