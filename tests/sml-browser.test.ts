import { SmlDocument } from "@stenway/sml"
import { SmlDownload } from "../src"

test("SmlDocument.getDownloadUrl", () => {
	const document = SmlDocument.parse("Test\nEnd")
	SmlDownload.getDownloadUrl(document)
})

test("SmlDocument.download", () => {
	const document = SmlDocument.parse("Test\nEnd")
	expect(() => SmlDownload.download(document, "File.sml")).toThrowError()
})