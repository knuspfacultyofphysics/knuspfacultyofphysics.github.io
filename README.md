# UNIV_SURVEYS
These web pages were written to perform simple surveys on education quality for students of my alma mater.

These don't have some sort of database, in fact, they were intended to be deplayed on Github Pages. To allow actual response recording please followe these steps:
1. Follow [this tutorial](https://dev.to/kromate/connecting-your-html-forms-to-a-google-spreadsheet-p9h) to create google spreadsheet for results of the survey.
2. Remove ".template" suffix from a "config.json.template" file.
3. Substitute <SCRIPT URL GOES HERE> for your scriptURL you've created during the tutorial.
4. If you want for a feedback to be separated from actual survey results, go through a tutorial once more to create a feedback spreadsheet.
5. Look through "study_data.json" and "questions_data.json" files and figure out a format for year-group-discipline-teacher mappings and question formats. These are not so hard to grasp, but I may update this file to concrete descriptions in the future.
6. After pages deplayment, share a link to "page1.html" whereever it is on the web.
  
Hope someone would find this repo useful.
