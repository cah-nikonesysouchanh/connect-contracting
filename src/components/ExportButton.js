import React, {Component} from 'react';
import * as _ from "lodash";

let csvOrder = [
    {header: 'Version Number', key: 'version'},
    {header: 'Code Type', key: 'type'},
    {header: 'Code Number', key: 'number'},
    {header: 'Definition', key: 'description'},
];

function buildCsvRow(columns) {
    return _.join(columns.map((c) => `"${c}"`), ',');
}

function downloadFile(file) {
    let encodedUri = "data:text/csv;charset=utf-8," + encodeURI(file);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "medical_codes.csv");
    link.innerHTML = "Click Here to download";

    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
}

export class ExportButton extends Component {
    buildCsvFile() {
        let rows = _.join(this.props.codes.map((c) => buildCsvRow(csvOrder.map((col) => c[col.key]))), "\n");
        let headers = csvOrder.map((col) => col.header);
        return buildCsvRow(headers) + "\n" + rows;
    }

    onExport() {
        downloadFile(this.buildCsvFile());
    }

    render() {
        return <button onClick={() => this.onExport()} className="btn btn-danger">
            Export to Excel
        </button>
    }
}
