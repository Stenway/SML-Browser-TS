# SML-Browser

## About this package

This package is the **browser-specific part** mentioned in the environment-independent **[SML](https://www.npmjs.com/package/@stenway/sml)** package (You will find more information there about SML in general). The package currently just contains a simple helper class to easily create a downloadable file.

## Getting started

First get the **SML-Browser package** installed with a package manager of your choice.
If you are using NPM just run the following command:
```
npm install @stenway/sml-browser
```
Create an SmlDocument and pass it to the static method **download** of the static SmlDownload class. Provide a file name as a second argument:

```ts
SmlDownload.download(SmlDocument.parse("Begin\n\tAttribute 123 #Comment\nEnd"), "Test.sml")
```

You can see a similar package, which is the [wsv-browser](https://www.npmjs.com/package/@stenway/wsv-browser) package, in action in [this video](https://www.youtube.com/watch?v=aKAtPU1Faxk).

## Related packages

The [Stenway Text File Format Stack](https://www.youtube.com/watch?v=m7Z0mrcFeCg) defines a set of formats
that are built upon SML. Check out the following related browser-packages:

* [TBL-Browser](https://www.npmjs.com/package/@stenway/tbl-browser)