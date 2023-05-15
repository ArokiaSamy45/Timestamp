# Timestamp

Render URL: https://timestamp-6m83.onrender.com/
Creating New File:
Endpoint Description
This endpoint creates a text file in a specified folder. The content of the file will be the current timestamp, and the filename will be in the format: .txt.

Request

Method: POST
Endpoint: /createFile
Request Body
This endpoint does not require a request body.

Response

Success:
HTTP Status Code: 200
Response Body: "File created successfully"
Error:
HTTP Status Code: 500
Response Body: "Internal Server Error"

Getting the File:
Endpoint Description
This endpoint retrieves all the text files in a specified folder.

Request

Method: GET
Endpoint: /getAllFiles
Response

Success:
HTTP Status Code: 200
Response Body: An array of text file names in the specified folder
Error:
HTTP Status Code: 500
Response Body: "Internal Server Error"
