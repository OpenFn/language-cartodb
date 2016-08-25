Language cartodb
==============

Language Pack for sending messages using the [cartodb API](http://docs.cartodb.com/cartodb-platform/sql-api/).

Documentation
-------------

```js
addRow("table", fields(
  field("lat", dataValue("gps-Lattitude")),
  field("long", dataValue("gps-Longitude"))
))
```

```js
sql(
  function(state) {
    return (
      `INSERT INTO untitled_table (name, the_geom) VALUES ('`
      + dataValue("form.first_name")(state)
      + `', ST_SetSRID(ST_Point(`
        + dataValue("lat")(state) + `, `
        + dataValue("long")(state) + `),4326))`
    )
  }
)
```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
