/* (C) Stefan John / Stenway / SimpleML.com / 2022 */
// ----------------------------------------------------------------------
export class SmlDownload {
    static getDownloadUrl(document) {
        const bytes = document.toBytes();
        const blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(wsvDocument, fileName) {
        const url = SmlDownload.getDownloadUrl(wsvDocument);
        const element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
//# sourceMappingURL=sml-browser.js.map