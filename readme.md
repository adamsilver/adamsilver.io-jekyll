# Readme

## Run in dev mode

	jekyll serve . --config _config.yml,configdev.yml

## Run in product mode

	jekyll serve .

## Build and run in prod mode

	jekyll build && grunt && jekyll serve . --skip-initial-build

## Deploy

	jekyll build && grunt
	git-directory-deploy --directory _site --branch gh-pages