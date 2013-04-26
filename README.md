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