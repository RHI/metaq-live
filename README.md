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

###Data

The sequence of events:

1. MetaQ API has a list of significant terms of interest
2. A Live Transcript is run against MetaQ to notify that a term of interest has been mentioned
3. A response, with a relevant Action is delivered to to perform an abitrary task.

####JSON Response

This is an example of the JSON response you could receive.

You can see here that the Action is designed to retrieve season standings for a particular team.  The mentioned team
in this case was the *St. Lous Rams*.  An API url is delivered to retrieve the standings.

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
        }
    ]
}
````
