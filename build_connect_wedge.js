let fs = require("fs");

let css_files = fs.readdirSync("build/static/css").filter((i) => i.endsWith("css"));
let js_files = fs.readdirSync("build/static/js").filter((i) => i.endsWith("js"));

let wedge_script = fs.readFileSync("wedge_template.js").toString()
    .replace("%%STYLESHEET%%", css_files[0])
    .replace("%%JS%%", js_files[0]);

fs.writeFileSync("build/wedge.js", wedge_script);
