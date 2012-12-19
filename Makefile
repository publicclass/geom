
test:
	node_modules/.bin/mocha test.js

test.html: test.js index.js support/head.html support/foot.html
	node_modules/.bin/mocha $< -R doc | cat support/head.html - support/foot.html > $@

.PHONY: test