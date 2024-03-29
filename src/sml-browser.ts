﻿/* (C) Stefan John / Stenway / SimpleML.com / 2022 */

import { SmlDocument } from "@stenway/sml"

// ----------------------------------------------------------------------

export abstract class SmlDownload {
	static getDownloadUrl(document: SmlDocument): string {
		const bytes: Uint8Array = document.toBytes()
		const blob: Blob = new Blob([bytes], { type: 'application/sml' })
		return URL.createObjectURL(blob)
	}
	
	static download(wsvDocument: SmlDocument, fileName: string) {
		const url = SmlDownload.getDownloadUrl(wsvDocument)
		const element = document.createElement('a')
		element.href = url
		element.download = fileName
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}
}