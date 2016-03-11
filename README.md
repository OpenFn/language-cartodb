Language cartodb
==============

Language Pack for sending messages using the [cartodb API](http://docs.cartodb.com/cartodb-platform/sql-api/).

Documentation
-------------

## Desired output:
`https://{account}.cartodb.com/api/v2/sql?q={SQL statement}&api_key={Your API key}`

Expression returns body = `INSERT INTO untitled_table (name, the_geom) VALUES ('openFn test', ST_SetSRID(ST_Point(-110, 43),4326))`

## insert row

#### desired `sql` expression:
```js
sql("operation", "table_name", fields(
  field("column_a", dataValue("recipient_number")),
  field("column_b", dataValue("recipient_text"))
))
```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
