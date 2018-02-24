#!/bin/bash
curl -D- -u khmarbaise -X GET -H "Content-Type: application/json" "https://issues.apache.org/jira/rest/api/2/search?maxResults=99&jql=project%20%3D%20MNG%20AND%20fixVersion%20%3D%203.5.3" -o release.json
