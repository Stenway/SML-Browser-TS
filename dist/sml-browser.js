"use strict";
/* (C) Stefan John / Stenway / SimpleML.com / 2022 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmlDownload = void 0;
// ----------------------------------------------------------------------
class SmlDownload {
    static getDownloadUrl(document) {
        let bytes = document.getBytes();
        let blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(wsvDocument, fileName) {
        const url = SmlDownload.getDownloadUrl(wsvDocument);
        let element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
exports.SmlDownload = SmlDownload;
