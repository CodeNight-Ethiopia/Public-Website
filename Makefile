nvm:
	. ${NVM_DIR}/nvm.sh && nvm use

dev:
	npm run dev

build: nvm
	npm run build

start: nvm
	npm run start

lint:
	npm run lint

lint-fix:
	npm run lint --fix

preview:
	npm run build && npm run start

typecheck:
	tsc --noEmit

format-write:
	prettier --write "**/*.{ts,tsx,mdx}" --cache

format-check:
	prettier --check "**/*.{ts,tsx,mdx}" --cache

migrateup:
	npm run migrations:generate

migratedown:
	npm run migrations:drop

migratepush:
	npm run db:push

seed:
	npm run drizzle:seed