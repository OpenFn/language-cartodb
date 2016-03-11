Language cartodb
==============

Language Pack for sending messages using the [cartodb API](http://docs.cartodb.com/cartodb-platform/sql-api/).

Documentation
-------------

## Desired output:
`https://{account}.cartodb.com/api/v2/sql?q={SQL statement}&api_key={Your API key}`

Expression returns body = `INSERT INTO untitled_table (name, the_geom) VALUES ('openFn test', ST_SetSRID(ST_Point(-110, 43),4326))`

## insert row

#### Current `insert` expression:
```js
sql("table", fields(
  field("to_number", dataValue("recipient_number")),
  field("content", dataValue("recipient_text")),
  // Lots of optional parameters...
  field("message_type", "sms"),
  field("route_id", dataValue("some_route")
))
```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
