
.PHONY: publish
publish: deps clean
	yarn workspace docs build
	yarn workspace learn build
	# yarn workspace cli build && mkdir -p public/cli && mv cli/public/* public/cli
	# yarn workspace reference build && mkdir -p public/reference && mv reference/public/* public/reference
	# yarn workspace databases build && mkdir -p public/databases && mv databases/public/* public/databases
	# yarn workspace community build && mkdir -p public/community && mv community/public/* public/community

.PHONY: deps
deps:
	yarn

.PHONY: clean
clean:
	rm -rf public && mkdir -p public
	yarn workspace docs clean
	yarn workspace learn clean
	yarn workspace cli clean
	yarn workspace reference clean
	yarn workspace databases clean
	yarn workspace community clean
