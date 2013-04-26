MetaQ Live
=====

A library for simplifying access to our live MetaQ API feed.

Usage
---

###Instantiation

````javascript
var metaq = new MetaQ({
	feedID: 1632383,
	duration: 2400,
	fetchInterval: 3000,
	handler: function( data ) {
		console.log( data );
	}
});
````

###Options Hash

| Key | Value |
| ----| ------|
| feedId | Live Feed ID, provided by RAMP |
| duration | How far into the past, in seconds, to check for matches |
| fetchInterval | The interval at which the Live Feed is polled |
| handler | Callback function that takes the Matches response in JSON format as a parameter |

###JSON Response Format

This is an example of the JSON response you could receive.

````JSON
{
    "Matches": [
        {
            "Occurrence": {
                "StartToken": 4,
                "EndToken": 4,
                "StartTime": 24.849,
                "EndTime": 26.884
            },
            "Actions": [
                {
                    "Id": 156,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Standings",
                    "Type": "sportsData_nfl_seasonStandings",
                    "Description": "This method's required params are the season (2012) and season stage (REG, PRE). By default the season is set to 2012, the last full regular season. You are free to change this to get other seasons, pre-season and playoff standings.",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/2012/REG/standings.json?api_key=bapb34fbpf94wmzfdr8xrmnc"
                        },
                        {
                            "Name": "term",
                            "Value": "St. Louis Rams"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 4,
                "EndToken": 4,
                "StartTime": 24.849,
                "EndTime": 26.884
            },
            "Actions": [
                {
                    "Id": 157,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Schedule",
                    "Type": "sportsData_nfl_seasonSchedule",
                    "Description": "The URL attribute returns an object (XML|JSON) with the entire season schedule that includes all teams. You can retrieve the data for a specific team by using the value of the 'id' attribute to search this through the object.",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "St. Louis Rams"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/2012/REG/schedule.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 4,
                "EndToken": 4,
                "StartTime": 24.849,
                "EndTime": 26.884
            },
            "Actions": [
                {
                    "Id": 155,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Team Depth Chart",
                    "Type": "sportsData_nfl_teamDepthChart",
                    "Description": "Required (abbrevName = NE for New England Patriots, team Id are their 2-3 name abbreviation).",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/STL/depthchart.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        },
                        {
                            "Name": "term",
                            "Value": "St. Louis Rams"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 2,
                "EndToken": 2,
                "StartTime": 29.988,
                "EndTime": 32.123
            },
            "Actions": [
                {
                    "Id": 156,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Standings",
                    "Type": "sportsData_nfl_seasonStandings",
                    "Description": "This method's required params are the season (2012) and season stage (REG, PRE). By default the season is set to 2012, the last full regular season. You are free to change this to get other seasons, pre-season and playoff standings.",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/2012/REG/standings.json?api_key=bapb34fbpf94wmzfdr8xrmnc"
                        },
                        {
                            "Name": "term",
                            "Value": "New York Jets"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 2,
                "EndToken": 2,
                "StartTime": 29.988,
                "EndTime": 32.123
            },
            "Actions": [
                {
                    "Id": 157,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Schedule",
                    "Type": "sportsData_nfl_seasonSchedule",
                    "Description": "The URL attribute returns an object (XML|JSON) with the entire season schedule that includes all teams. You can retrieve the data for a specific team by using the value of the 'id' attribute to search this through the object.",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "New York Jets"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/2012/REG/schedule.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 2,
                "EndToken": 2,
                "StartTime": 29.988,
                "EndTime": 32.123
            },
            "Actions": [
                {
                    "Id": 155,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Team Depth Chart",
                    "Type": "sportsData_nfl_teamDepthChart",
                    "Description": "Required (abbrevName = NE for New England Patriots, team Id are their 2-3 name abbreviation).",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/NYJ/depthchart.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        },
                        {
                            "Name": "term",
                            "Value": "New York Jets"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 4,
                "EndToken": 5,
                "StartTime": 62.087,
                "EndTime": 64.49
            },
            "Actions": [
                {
                    "Id": 180,
                    "SiteId": 1346,
                    "Name": "ESPN NFL Action - Player Details",
                    "Type": "espn_nfl_playerDetails",
                    "Description": "description",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "Sam Bradford"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.espn.com/v1/sports/football/nfl/athletes/13197/?apikey=bapb34fbpf94wmzfdr8xrmnc"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 4,
                "EndToken": 5,
                "StartTime": 62.087,
                "EndTime": 64.49
            },
            "Actions": [
                {
                    "Id": 181,
                    "SiteId": 1346,
                    "Name": "ESPN NFL Action - Player Stats",
                    "Type": "espn_nfl_playerStats",
                    "Description": "description",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "Sam Bradford"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.espn.com/v1/sports/football/nfl/athletes/13197/dates/2012?enable=stats,competitors&seasontype=reg&apikey=bapb34fbpf94wmzfdr8xrmnc"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 2,
                "EndToken": 3,
                "StartTime": 88.38,
                "EndTime": 89.514
            },
            "Actions": [
                {
                    "Id": 180,
                    "SiteId": 1346,
                    "Name": "ESPN NFL Action - Player Details",
                    "Type": "espn_nfl_playerDetails",
                    "Description": "description",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "Sam Bradford"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.espn.com/v1/sports/football/nfl/athletes/13197/?apikey=bapb34fbpf94wmzfdr8xrmnc"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 2,
                "EndToken": 3,
                "StartTime": 88.38,
                "EndTime": 89.514
            },
            "Actions": [
                {
                    "Id": 181,
                    "SiteId": 1346,
                    "Name": "ESPN NFL Action - Player Stats",
                    "Type": "espn_nfl_playerStats",
                    "Description": "description",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "Sam Bradford"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://api.espn.com/v1/sports/football/nfl/athletes/13197/dates/2012?enable=stats,competitors&seasontype=reg&apikey=bapb34fbpf94wmzfdr8xrmnc"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 1,
                "EndToken": 1,
                "StartTime": 185.913,
                "EndTime": 188.215
            },
            "Actions": [
                {
                    "Id": 171,
                    "SiteId": 1346,
                    "Name": "TMS Action - TV Show Details",
                    "Type": "tms_tvShowDetails",
                    "Description": "Required (tmsId, lineupId, and ISO datetime). For the moment will not be using this method because it requires a lineupId and I don't know yet how to get these :D",
                    "Attributes": [
                        {
                            "Name": "term",
                            "Value": "Lost"
                        },
                        {
                            "Name": "URL",
                            "Value": "http://data.tmsapi.com/v1/programs/SH013048690000?api_key=zvk55thptk25awz6g2hewf9h"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 0,
                "EndToken": 0,
                "StartTime": 206.934,
                "EndTime": 208.335
            },
            "Actions": [
                {
                    "Id": 156,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Standings",
                    "Type": "sportsData_nfl_seasonStandings",
                    "Description": "This method's required params are the season (2012) and season stage (REG, PRE). By default the season is set to 2012, the last full regular season. You are free to change this to get other seasons, pre-season and playoff standings.",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/2012/REG/standings.json?api_key=bapb34fbpf94wmzfdr8xrmnc"
                        },
                        {
                            "Name": "term",
                            "Value": "Minnesota Vikings"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 0,
                "EndToken": 0,
                "StartTime": 206.934,
                "EndTime": 208.335
            },
            "Actions": [
                {
                    "Id": 157,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Season Schedule",
                    "Type": "sportsData_nfl_seasonSchedule",
                    "Description": "The URL attribute returns an object (XML|JSON) with the entire season schedule that includes all teams. You can retrieve the data for a specific team by using the value of the 'id' attribute to search this through the object.",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/2012/REG/schedule.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        },
                        {
                            "Name": "term",
                            "Value": "Minnesota Vikings"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 0,
                "EndToken": 0,
                "StartTime": 206.934,
                "EndTime": 208.335
            },
            "Actions": [
                {
                    "Id": 155,
                    "SiteId": 1346,
                    "Name": "SportsData NFL Action - Team Depth Chart",
                    "Type": "sportsData_nfl_teamDepthChart",
                    "Description": "Required (abbrevName = NE for New England Patriots, team Id are their 2-3 name abbreviation).",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://api.sportsdatallc.org/nfl-t1/teams/MIN/depthchart.xml?api_key=32wa72bvwsutupbqxek2fqf9"
                        },
                        {
                            "Name": "term",
                            "Value": "Minnesota Vikings"
                        }
                    ]
                }
            ]
        },
        {
            "Occurrence": {
                "StartToken": 0,
                "EndToken": 0,
                "StartTime": 206.934,
                "EndTime": 208.335
            },
            "Actions": [
                {
                    "Id": 171,
                    "SiteId": 1346,
                    "Name": "TMS Action - TV Show Details",
                    "Type": "tms_tvShowDetails",
                    "Description": "Required (tmsId, lineupId, and ISO datetime). For the moment will not be using this method because it requires a lineupId and I don't know yet how to get these :D",
                    "Attributes": [
                        {
                            "Name": "URL",
                            "Value": "http://data.tmsapi.com/v1/programs/EP015468900003?api_key=zvk55thptk25awz6g2hewf9h"
                        },
                        {
                            "Name": "term",
                            "Value": "Vikings"
                        }
                    ]
                }
            ]
        }
    ]
}
````