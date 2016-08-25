import { execute as commonExecute, expandReferences } from 'language-common';
import { post } from './Client';
import { resolve as resolveUrl } from 'url';
var jsonSql = require('json-sql')();

/**
 * Execute a sequence of operations.
 * Wraps `language-common/execute`, and prepends initial state for cartodb.
 * @example
 * execute(
 *   create('foo'),
 *   delete('bar')
 * )(state)
 * @constructor
 * @param {Operations} operations - Operations to be performed.
 * @returns {Operation}
 */
export function execute(...operations) {
  const initialState = {
    references: [],
    data: null
  }

  return state => {
    return commonExecute(...operations)({ ...initialState, ...state })
  };

}

/**
 * Execute an SQL statement
 * @example
 * execute(
 *   sql(sqlQuery)
 * )(state)
 * @constructor
 * @param {object} sqlQuery - Payload data for the message
 * @returns {Operation}
 */
export function sql(sqlQuery) {

  return state => {

    const body = sqlQuery(state);

    const { account, apiKey } = state.configuration;

    const url = 'https://'.concat(account, '.cartodb.com/api/v2/sql')

    console.log(url)
    console.log("Executing SQL query:");
    console.log(body)

    return post({ apiKey, body, account, url })
    .then((result) => {
      console.log("Success:", result);
      return { ...state, references: [ result, ...state.references ] }
    })

  }
}

/**
 * Add rows to a table
 * @example
 * execute(
 *   addRow(table, rowData)
 * )(state)
 * @constructor
 * @param {object} sqlQuery - Payload data for the message
 * @returns {Operation}
 */
export function addRow(table, rowData) {

  return state => {

    const dataObject = expandReferences(rowData)(state);

    const sql = jsonSql.build({
        type: 'insert',
        table: 'users',
        values: dataObject
    });

    const body = sql.query

    const { account, apiKey } = state.configuration;

    const url = 'https://'.concat(account, '.cartodb.com/api/v2/sql')

    console.log(url)
    console.log("Executing SQL query:");
    console.log(body)

    // return post({ apiKey, body, account, url })
    // .then((result) => {
    //   console.log("Success:", result);
    //   return { ...state, references: [ result, ...state.references ] }
    // })

  }
}

export {
  field, fields, sourceValue,
  merge, dataPath, dataValue, lastReferenceValue
} from 'language-common';
