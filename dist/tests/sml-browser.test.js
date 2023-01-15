"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sml_1 = require("@stenway/sml");
const src_1 = require("../src");
test("SmlDocument.getDownloadUrl", () => {
    const document = sml_1.SmlDocument.parse("Test\nEnd");
    src_1.SmlDownload.getDownloadUrl(document);
});
test("SmlDocument.download", () => {
    const document = sml_1.SmlDocument.parse("Test\nEnd");
    expect(() => src_1.SmlDownload.download(document, "File.sml")).toThrowError();
});
//# sourceMappingURL=sml-browser.test.js.map