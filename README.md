# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```

### To Generate Document Version

For every offical release, baselining the document and version to be done.
- First, make sure your content in the docs directory is ready to be frozen as a version. A version always should be based from master.
- Enter a new version number.

```
yarn run docusaurus docs:version 1.1.0
```


### To Generate PDF from the Site

Keep the site hosted in local and run the below.

```
npx docusaurus-pdf http://localhost:3000/Help/docs/greeting/ 3.2.0.pdf
```







