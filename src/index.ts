//import {XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser';
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const jObj = {
    'value1': 'aaaa',
    '@_value2': 1,
};

const builder = new XMLBuilder();
const xmlContent = builder.build(jObj);

console.log(xmlContent);


// const parser = new XMLParser();
// let jObj = parser.parse(XMLdata);

// 何をしたかったんだっけ？
// @_とか付けた状態じゃないとXML作れないのか確認する