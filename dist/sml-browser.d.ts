import { SmlDocument } from "@stenway/sml";
export declare abstract class SmlDownload {
    static getDownloadUrl(document: SmlDocument): string;
    static download(wsvDocument: SmlDocument, fileName: string): void;
}
