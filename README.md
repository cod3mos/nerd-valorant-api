# Nerd Valorant Api &middot; [![Tests](https://github.com/cod3mos/nerd-valorant-api/actions/workflows/coverage.yml/badge.svg)](https://github.com/cod3mos/nerd-valorant-api/actions/workflows/coverage.yml) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cod3mos/nerd-valorant-api/blob/main/LICENSE)

Nerd Valorant Api.

## Author

[Dione Carlos](https://www.github.com/cod3mos)

## Standardizations

```typescript
// Class Name: Pascal case.
export class PersonalDocument {
	constructor(private params: PersonalDocumentParams)

	// Functions and Methods: Camel case.
	readDocument()
}

// File Name: Kebab case.
personal-document.ts
```

## Commands

Available commands:

```bash
  # Run in Production
  npm start

  # Run in Development
  npm run dev

  # Run Build
  npm build

  # Run Tests
  npm test

  # Run Test Coverage
  npm run coverage
```

## License

This project is [MIT Licensed](https://choosealicense.com/licenses/mit)
