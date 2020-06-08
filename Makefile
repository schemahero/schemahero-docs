
.PHONY: publish
publish: deps clean build
publish:
	mkdir -p public

	mkdir -p public/docs
	cp -r docs/public/* public/docs
	rm -rf public/docs/social-cards

	mkdir -p public/learn
	cp -r learn/public/* public/learn
	rm -rf public/learn/social-cards

	mkdir -p public/cli
	cp -r cli/public/* public/cli
	rm -rf public/cli/social-cards

	mkdir -p public/reference
	cp -r reference/public/* public/reference
	rm -rf public/reference/social-cards

	mkdir -p public/databases
	cp -r databases/public/* public/databases
	rm -rf public/databases/social-cards

	mkdir -p public/community
	cp -r community/public/* public/community
	rm -rf public/community/social-cards

	mkdir -p public/changelog
	cp -r changelog/public/* public/changelog
	rm -rf public/changelog/social-cards

	cp -r home/* public

.PHONY: build
build:
	yarn workspace docs build --prefix-paths
	yarn workspace learn build --prefix-paths
	yarn workspace cli build --prefix-paths
	yarn workspace reference build --prefix-paths
	yarn workspace databases build --prefix-paths
	yarn workspace community build --prefix-paths
	yarn workspace changelog build --prefix-paths

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
	yarn workspace changelog clean
