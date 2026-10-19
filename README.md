# ShelfTrack API — Chapter Companion

Companion code for *Node.js Backend Development* by Yasin Besni.

Repository: https://github.com/besniapp/ShelfTrack-API

## How to use this repository

The eight part folders follow the English book's 70 chapters. Read a chapter and apply its `code/` files to your working project. These folders contain chapter-end additions or replacements, not 70 separately installable applications. Unlisted files remain from the preceding chapters. Conceptual chapters have a README without unnecessary source files. Examples under `examples/` are separate exercises; call exported helpers from a database-connected script when indicated.

Do not copy every `code/` folder together at once. Work in chapter order. Replace `package.json` when its chapter introduces new dependencies or changes the entry point, then run `npm install` in your working project. Generate and retain your own `package-lock.json`. Neither dependency installation nor a MongoDB connection is needed just to read the examples.

## Run the final application

```bash
git clone https://github.com/besniapp/ShelfTrack-API.git
cd ShelfTrack-API/08_Test_Documentation_Deployment/70_Final_Project_Proving_ShelfTrack_From_a_Clean_Machine_to_a_Live_API/code/shelftrack-api
npm install
cp .env.example .env
npm start
```

Set `MONGODB_URI` in `.env` before starting. Windows Command Prompt: use `copy .env.example .env`. The final project README lists requirements, endpoints and database considerations. `/health` confirms that the HTTP process responds; it is not a complete database acceptance test.

## Chapter index

| Chapter | Reference folder |
| --- | --- |
| 01 | [A Reservation Click and the System Behind It](01_Web_Foundations/01_A_Reservation_Click_and_the_System_Behind_It/README.md) |
| 02 | [Why the Browser Cannot Be the Whole Application](01_Web_Foundations/02_Why_the_Browser_Cannot_Be_the_Whole_Application/README.md) |
| 03 | [HTTP as a Conversation Between Separate Programs](01_Web_Foundations/03_HTTP_as_a_Conversation_Between_Separate_Programs/README.md) |
| 04 | [Requests Ask Responses Answer](01_Web_Foundations/04_Requests_Ask_Responses_Answer/README.md) |
| 05 | [Reading the Anatomy of an HTTP Request](01_Web_Foundations/05_Reading_the_Anatomy_of_an_HTTP_Request/README.md) |
| 06 | [What the Server Does With an Incoming Request](01_Web_Foundations/06_What_the_Server_Does_With_an_Incoming_Request/README.md) |
| 07 | [A Response Is More Than Returned Data](01_Web_Foundations/07_A_Response_Is_More_Than_Returned_Data/README.md) |
| 08 | [JavaScript Leaves the Browser Meet Node js](02_NodeJS/08_JavaScript_Leaves_the_Browser_Meet_Node_js/README.md) |
| 09 | [Running the First ShelfTrack Program](02_NodeJS/09_Running_the_First_ShelfTrack_Program/README.md) |
| 10 | [Turning a Folder Into a Managed npm Project](02_NodeJS/10_Turning_a_Folder_Into_a_Managed_npm_Project/README.md) |
| 11 | [Modules Giving Each File One Clear Job](02_NodeJS/11_Modules_Giving_Each_File_One_Clear_Job/README.md) |
| 12 | [Express A Small Layer Around HTTP Work](03_Express/12_Express_A_Small_Layer_Around_HTTP_Work/README.md) |
| 13 | [Creating the ShelfTrack API Project](03_Express/13_Creating_the_ShelfTrack_API_Project/README.md) |
| 14 | [Building the Smallest Useful Express Application](03_Express/14_Building_the_Smallest_Useful_Express_Application/README.md) |
| 15 | [Routes as Doors Into a Resource](03_Express/15_Routes_as_Doors_Into_a_Resource/README.md) |
| 16 | [Using HTTP Methods to Express CRUD Intent](03_Express/16_Using_HTTP_Methods_to_Express_CRUD_Intent/README.md) |
| 17 | [Postman Inspecting the API Without a Frontend](03_Express/17_Postman_Inspecting_the_API_Without_a_Frontend/README.md) |
| 18 | [Receiving JSON From the Request Body](03_Express/18_Receiving_JSON_From_the_Request_Body/README.md) |
| 19 | [Middleware Work That Happens on the Way to a Handler](03_Express/19_Middleware_Work_That_Happens_on_the_Way_to_a_Handler/README.md) |
| 20 | [The Moment In Memory Data Stops Being Enough](04_MongoDB/20_The_Moment_In_Memory_Data_Stops_Being_Enough/README.md) |
| 21 | [Choosing a Data Model SQL and NoSQL](04_MongoDB/21_Choosing_a_Data_Model_SQL_and_NoSQL/README.md) |
| 22 | [From JSON Thinking to BSON Storage](04_MongoDB/22_From_JSON_Thinking_to_BSON_Storage/README.md) |
| 23 | [Collections Grouping Documents by Responsibility](04_MongoDB/23_Collections_Grouping_Documents_by_Responsibility/README.md) |
| 24 | [Documents One Stored Record With Its Own Shape](04_MongoDB/24_Documents_One_Stored_Record_With_Its_Own_Shape/README.md) |
| 25 | [Identity How One Document Stays Distinguishable](04_MongoDB/25_Identity_How_One_Document_Stays_Distinguishable/README.md) |
| 26 | [ObjectId MongoDB s Default Document Identifier](04_MongoDB/26_ObjectId_MongoDB_s_Default_Document_Identifier/README.md) |
| 27 | [Where Should MongoDB Run](04_MongoDB/27_Where_Should_MongoDB_Run/README.md) |
| 28 | [Creating a Safe MongoDB Atlas Workspace](04_MongoDB/28_Creating_a_Safe_MongoDB_Atlas_Workspace/README.md) |
| 29 | [Connecting ShelfTrack to MongoDB With Mongoose](04_MongoDB/29_Connecting_ShelfTrack_to_MongoDB_With_Mongoose/README.md) |
| 30 | [Schema and Model Turning Domain Rules Into Code](05_Mongoose/30_Schema_and_Model_Turning_Domain_Rules_Into_Code/README.md) |
| 31 | [A Mongoose Document Saving the First Book](05_Mongoose/31_A_Mongoose_Document_Saving_the_First_Book/README.md) |
| 32 | [POST books Persisting Client Input](05_Mongoose/32_POST_books_Persisting_Client_Input/README.md) |
| 33 | [GET books Reading the Catalogue From MongoDB](05_Mongoose/33_GET_books_Reading_the_Catalogue_From_MongoDB/README.md) |
| 34 | [GET books bookId Finding Exactly One Book](05_Mongoose/34_GET_books_bookId_Finding_Exactly_One_Book/README.md) |
| 35 | [PATCH books bookId Updating Only What Changed](05_Mongoose/35_PATCH_books_bookId_Updating_Only_What_Changed/README.md) |
| 36 | [DELETE books bookId Removing a Resource Carefully](05_Mongoose/36_DELETE_books_bookId_Removing_a_Resource_Carefully/README.md) |
| 37 | [When server js Gets Crowded Introducing Routers and Controllers](06_Express_Architecture/37_When_server_js_Gets_Crowded_Introducing_Routers_and_Controllers/README.md) |
| 38 | [Placing Middleware Where Its Responsibility Is Clear](06_Express_Architecture/38_Placing_Middleware_Where_Its_Responsibility_Is_Clear/README.md) |
| 39 | [Centralized Error Handling Without Hiding Failures](06_Express_Architecture/39_Centralized_Error_Handling_Without_Hiding_Failures/README.md) |
| 40 | [Mongoose Validation Protecting the Database Boundary](06_Express_Architecture/40_Mongoose_Validation_Protecting_the_Database_Boundary/README.md) |
| 41 | [strict Mode What Happens to Fields the Schema Does Not Know](06_Express_Architecture/41_strict_Mode_What_Happens_to_Fields_the_Schema_Does_Not_Know/README.md) |
| 42 | [timestamps Letting Mongoose Track Time Consistently](06_Express_Architecture/42_timestamps_Letting_Mongoose_Track_Time_Consistently/README.md) |
| 43 | [versionKey and v What Mongoose Is Tracking](06_Express_Architecture/43_versionKey_and_v_What_Mongoose_Is_Tracking/README.md) |
| 44 | [Unique ISBNs Database Constraints and Friendly Errors](06_Express_Architecture/44_Unique_ISBNs_Database_Constraints_and_Friendly_Errors/README.md) |
| 45 | [Indexes Paying Storage to Save Query Work](06_Express_Architecture/45_Indexes_Paying_Storage_to_Save_Query_Work/README.md) |
| 46 | [Sorting Results and Designing an Index to Match](06_Express_Architecture/46_Sorting_Results_and_Designing_an_Index_to_Match/README.md) |
| 47 | [Pagination Returning a Window Instead of the Entire Catalogue](06_Express_Architecture/47_Pagination_Returning_a_Window_Instead_of_the_Entire_Catalogue/README.md) |
| 48 | [Turning req query Into Safe Pagination Controls](06_Express_Architecture/48_Turning_req_query_Into_Safe_Pagination_Controls/README.md) |
| 49 | [Pagination Metadata With countDocuments](06_Express_Architecture/49_Pagination_Metadata_With_countDocuments/README.md) |
| 50 | [Filtering the Catalogue Without Building Dozens of Endpoints](06_Express_Architecture/50_Filtering_the_Catalogue_Without_Building_Dozens_of_Endpoints/README.md) |
| 51 | [Search Turning Human Text Into a Database Query](06_Express_Architecture/51_Search_Turning_Human_Text_Into_a_Database_Query/README.md) |
| 52 | [Projection select and lean Returning Only What the Client Needs](06_Express_Architecture/52_Projection_select_and_lean_Returning_Only_What_the_Client_Needs/README.md) |
| 53 | [Atomic Updates Changing Copy Counts Without Read Modify Write Races](06_Express_Architecture/53_Atomic_Updates_Changing_Copy_Counts_Without_Read_Modify_Write_Races/README.md) |
| 54 | [Query Helpers and Middleware for Repeated Query Rules](06_Express_Architecture/54_Query_Helpers_and_Middleware_for_Repeated_Query_Rules/README.md) |
| 55 | [Embedding or Referencing Modeling Data by How It Changes](06_Express_Architecture/55_Embedding_or_Referencing_Modeling_Data_by_How_It_Changes/README.md) |
| 56 | [populate Resolving Book and Member References in a Loan](06_Express_Architecture/56_populate_Resolving_Book_and_Member_References_in_a_Loan/README.md) |
| 57 | [Virtuals Useful Values That Do Not Need Storage](06_Express_Architecture/57_Virtuals_Useful_Values_That_Do_Not_Need_Storage/README.md) |
| 58 | [Instance and Static Methods Behavior Belongs Near the Model When It Fits](06_Express_Architecture/58_Instance_and_Static_Methods_Behavior_Belongs_Near_the_Model_When_It_Fits/README.md) |
| 59 | [Joi Rejecting Bad Requests Before They Reach the Database](07_Professional_API/59_Joi_Rejecting_Bad_Requests_Before_They_Reach_the_Database/README.md) |
| 60 | [Validation Middleware Keeping Controllers Focused on Coordination](07_Professional_API/60_Validation_Middleware_Keeping_Controllers_Focused_on_Coordination/README.md) |
| 61 | [Designing One Response Language for the Entire API](07_Professional_API/61_Designing_One_Response_Language_for_the_Entire_API/README.md) |
| 62 | [Service Layer Moving Business Work Out of HTTP Controllers](07_Professional_API/62_Service_Layer_Moving_Business_Work_Out_of_HTTP_Controllers/README.md) |
| 63 | [Environment Variables and a Central Configuration Boundary](07_Professional_API/63_Environment_Variables_and_a_Central_Configuration_Boundary/README.md) |
| 64 | [CORS Deciding Which Browser Origins May Read the API](07_Professional_API/64_CORS_Deciding_Which_Browser_Origins_May_Read_the_API/README.md) |
| 65 | [Helmet and Rate Limiting Sensible HTTP Defenses by Default](07_Professional_API/65_Helmet_and_Rate_Limiting_Sensible_HTTP_Defenses_by_Default/README.md) |
| 66 | [Logging Reconstructing What the Server Actually Did](07_Professional_API/66_Logging_Reconstructing_What_the_Server_Actually_Did/README.md) |
| 67 | [Postman Collections Environments and Tests](08_Test_Documentation_Deployment/67_Postman_Collections_Environments_and_Tests/README.md) |
| 68 | [OpenAPI Making the Contract Readable by Humans and Tools](08_Test_Documentation_Deployment/68_OpenAPI_Making_the_Contract_Readable_by_Humans_and_Tools/README.md) |
| 69 | [Deployment Moving the API Without Moving Its Assumptions](08_Test_Documentation_Deployment/69_Deployment_Moving_the_API_Without_Moving_Its_Assumptions/README.md) |
| 70 | [Final Project Proving ShelfTrack From a Clean Machine to a Live API](08_Test_Documentation_Deployment/70_Final_Project_Proving_ShelfTrack_From_a_Clean_Machine_to_a_Live_API/README.md) |
