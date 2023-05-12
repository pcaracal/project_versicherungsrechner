# Projekt Versicherungsrechner
Git-Repo zum Projekt

## How to use
`./documentation/` - Markdown Dokumentation für Projekt


## After clone
`cd versicherungsrechner && npm install`

## After install
`npm start`

## Dockerfile usage
Create Image
`docker build -t versicherungsrechner ./versicherungsrechner/`
Create Container
`docker run -d -p 3000:3000 --name versicherungsrechner versicherungsrechner`