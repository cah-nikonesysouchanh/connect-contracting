const parse = require('csv-parse/lib/sync');
const fs = require("fs");
const assert = require("assert");
const _ = require("lodash");

const ALLOWED_CODE_VERSIONS = ['ICD10', ''];
const ALLOWED_CODE_TYPES = ['Diagnosis', 'Procedure', 'HCPCS'];

const csv_files = fs.readdirSync("data")
    .filter((i) => i.endsWith("csv"))
    .map((file) => `data/${file}`);

console.log("Found these CSV files: ", csv_files);
const file_items = csv_files.map((file) => {
    let contents = parse(fs.readFileSync(file).toString());
    contents.shift();
    return contents.map((row) => {
        return {
            version: row[0],
            type: row[1],
            number: _.trim(row[2]),
            description: row[3]
        };
    });
});
const all_codes = file_items.reduce((memo, codes) => memo.concat(codes), []);

console.log(`Generated ${all_codes.length} codes`);

all_codes.forEach((code) => {
    try {
        assert(_.includes(ALLOWED_CODE_VERSIONS, code.version));
        assert(_.includes(ALLOWED_CODE_TYPES, code.type));
        assert(/[0-9a-zA-Z]+/.test(code.number));
        assert(/[0-9a-zA-Z \.]/.test(code.description));
    } catch(e) {
        console.log('Problem with:', code);
        throw e;
    }
});
console.log("All codes look valid'ish");

let CODES_JSON_FILE = "public/codes.json";
console.log(`Writing to ${CODES_JSON_FILE}`);
const sorted_codes = _.sortBy(all_codes, ['version', 'type', 'code', 'description']);
fs.writeFileSync(CODES_JSON_FILE, JSON.stringify(sorted_codes, null, 2));
