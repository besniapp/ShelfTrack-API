# ShelfTrack API

Reference implementation for the English ShelfTrack edition of *Node.js Backend Development*.

## Requirements
- Node.js 20+
- MongoDB Atlas or a compatible MongoDB deployment

## Setup
```bash
cp .env.example .env
npm install
npm run dev
```
Fill in `MONGODB_URI` before starting.

Book shelf locations use an embedded object such as `{ "floor": 1, "code": "A-10" }`, matching the modeling examples in the manuscript.

## Architecture
`router -> validation middleware -> controller -> service -> Mongoose model -> MongoDB`

Cross-cutting middleware provides structured request logging, Helmet headers, CORS and rate limiting. Errors converge on one centralized handler.

## Endpoints
- `GET /health`
- `GET|POST /api/books`
- `GET|PATCH|DELETE /api/books/:bookId`
- `GET|POST /api/members`
- `GET|PATCH /api/members/:memberId`
- `GET|POST /api/loans`
- `GET /api/loans/:loanId`
- `PATCH /api/loans/:loanId/return`

The book checkout flow conditionally decrements inventory and compensates if loan creation fails. For systems that require strict multi-document atomicity under all failures, use MongoDB transactions; that topic is intentionally left for a later-level book.

## API contract and acceptance checks
- OpenAPI: `docs/openapi.yaml`
- Postman collection: `postman/ShelfTrack.postman_collection.json`
- Local/Production Postman environments are in the same folder.

## Security
Never commit `.env`. Do not log authorization headers or secrets. Treat CORS, Helmet and rate limiting as layers, not as substitutes for authentication/authorization.
