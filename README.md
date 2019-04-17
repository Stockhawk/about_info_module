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
| /api/quotes/ | POST | Create a new symbol entry with all data in the request body |
| /api/quotes/:symbol | PUT | Update an existing symbol with the data in the request body |
| /api/quotes/:symbol | DELETE | Delete a symbol and all data pertaining to that symbol from the server |
| /stocks/tags/:tag | GET | Queries database for tags pertaining to given stock symbol |
| /stocks/tags/ | POST | Create a new tag entry with all data in the request body |
| /stocks/tags/:tag | PUT | Update an existing tag with the data in the request body |
| /stocks/tags/:tag | DELETE | Delete a tag and all data pertaining to that tag from the server |

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

