# Chapter 69 — Deployment: Moving the API Without Moving Its Assumptions

`code/src/index.js` binds the accumulated API to the platform port and all network interfaces. `code/src/server.js` adds `/health` before the rate limiter. Retain the configuration and other modules from earlier chapters. Configure `MONGODB_URI`, `PORT` when required by your host, and the real frontend `CORS_ORIGIN` through your host environment. Never upload `.env`. Verify `/health` and rerun the appropriate Postman requests after deployment. This folder is not a standalone project.

[Repository guide](../../README.md)
