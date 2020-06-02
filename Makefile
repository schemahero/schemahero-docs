
.PHONY: publish
publish: deps clean build
publish:
	mkdir -p public

	mkdir -p public/docs
	cp -r docs/public/* public/docs

	mkdir -p public/learn
	cp -r learn/public/* public/learn

	mkdir -p public/cli
	cp -r cli/public/* public/cli

	mkdir -p public/reference
	cp -r reference/public/* public/reference

	mkdir -p public/databases
	cp -r databases/public/* public/databases

	mkdir -p public/community
	cp -r community/public/* public/community

.PHONY: build
build:
	yarn workspace docs build --prefix-paths
	yarn workspace learn build --prefix-paths
	yarn workspace cli build --prefix-paths
	yarn workspace reference build --prefix-paths
	yarn workspace databases build --prefix-paths
	yarn workspace community build --prefix-paths

.PHONY: deps
deps:
	yarn

.PHONY: clean
clean:
	rm -rf public
	yarn workspace docs clean
	yarn workspace learn clean
	yarn workspace cli clean
	yarn workspace reference clean
	yarn workspace databases clean
	yarn workspace community clean
