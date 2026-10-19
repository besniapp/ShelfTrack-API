# Chapter 70 — Final Project: ShelfTrack API

`code/shelftrack-api/` contains the complete runnable reference project, including Books, Members, Loans, OpenAPI and Postman files.

## Run the complete project

```bash
cd 08_Test_Documentation_Deployment/70_Final_Project_Proving_ShelfTrack_From_a_Clean_Machine_to_a_Live_API/code/shelftrack-api
npm install
cp .env.example .env
npm start
```

On Windows Command Prompt, use `copy .env.example .env` instead of `cp`. Fill in your own `MONGODB_URI` before starting. See the project README for endpoint details.

This is the final integration checkpoint. It includes the complete member and loan workflows discussed by the final chapter; the earlier reference folders intentionally contain only the files relevant to their chapter.

[Repository guide](../../README.md)
