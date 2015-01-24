var Analytics = require('../models/analytics');
var sw = require("swagger-node-express");
var param = sw.params;
var url = require("url");
var swe = sw.errors;
var _ = require('underscore');

/*
 *  Util Functions
 */

function writeResponse(res, response, start) {
    sw.setHeaders(res);
    res.header('Duration-ms', new Date() - start);
    if (response.neo4j) {
        res.header('Neo4j', JSON.stringify(response.neo4j));
    }
    res.send(JSON.stringify(response.results));
}

function parseUrl(req, key) {
    return url.parse(req.url, true).query[key];
}

function parseBool(req, key) {
    return 'true' == url.parse(req.url, true).query[key];
}



/*
 * API Specs and Functions
 */


  exports.getTopMemberGroupByTag = {
    'spec': {
        "description": "Get the top n groups which have most members filtered by tag",
        "path": "/analytics/getTopMemberGroupByTag",
        "notes": "Returns a set of nodes including the group name and the membership count.",
        "summary": "Get the top n groups which have most members filtered by tag",
        "method": "GET",
        "params": [
            param.query("topics", "A list of topics that a meetup group must have to be returned in the result set. Multiple topic names should be delimited by a comma.", "string", true, true),
            //param.query("numofreturns", "limits the number of the results returned", "integer", true, true),
        ],
        "responseClass": "List[Analytics]",
        "errorResponses": [],
        "nickname": "getTopMemberGroupByTag"
    },
    'action': function (req, res) {
        var options = {
            neo4j: parseBool(req, 'neo4j')
        };
        var topics = _.invoke(parseUrl(req, 'topics').toLowerCase().split(','), 'trim');
        //var numofreturns = parseUrl(req, 'numofreturns');

        var params = {
            topics: topics,
            //numofreturns: numofreturns
        };

        var start = new Date();
        Analytics.getTopMemberGroupByTag(params, options, function (err, response) {
            if (err || !response.results) throw swe.notFound('analytics');
            writeResponse(res, response, start);
        });
    }
};






  exports.getTopEventGroupByTag = {
    'spec': {
        "description": "Get the top n groups which have most events filtered by tag",
        "path": "/analytics/getTopEventGroupByTag",
        "notes": "Returns a set of nodes including the group name and the events count.",
        "summary": "Get the top n groups which have most events filtered by tag",
        "method": "GET",
        "params": [
            param.query("topics", "A list of topics that a meetup group must have to be returned in the result set. Multiple topic names should be delimited by a comma.", "string", true, true),
            //param.query("numofreturns", "limits the number of the results returned", "integer", true, true),
        ],
        "responseClass": "List[Analytics]",
        "errorResponses": [],
        "nickname": "getTopEventGroupByTag"
    },
    'action': function (req, res) {
        var options = {
            neo4j: parseBool(req, 'neo4j')
        };
        var topics = _.invoke(parseUrl(req, 'topics').toLowerCase().split(','), 'trim');

        //var topics = _.invoke(parseUrl(req, 'topics').toLowerCase().split(','), 'trim');
        //var numofreturns = parseUrl(req, 'numofreturns');

        var params = {
            topics: topics,
            //numofreturns: numofreturns
        };

        var start = new Date();
        Analytics.getTopEventGroupByTag(params, options, function (err, response) {
            if (err || !response.results) throw swe.notFound('analytics');
            writeResponse(res, response, start);
        });
    }
};





exports.getNetworkByTag = {
    'spec': {
        "description": "Get the clustered group filtered by tag to construct the social network",
        "path": "/analytics/getNetworkByTag",
        "notes": "Returns a set of nodes including the group name and the clustered id and a set of links inlcuding the source target and the weight.",
        "summary": "Get the clustered group filtered by tag to construct the social network",
        "method": "GET",
        "params": [
            param.query("topics", "A list of topics that a meetup group must have to be returned in the result set. Multiple topic names should be delimited by a comma.", "string", true, true),
        ],
        "responseClass": "List[Analytics]",
        "errorResponses": [],
        "nickname": "getNetworkByTag"
    },
    'action': function (req, res) {
        var options = {
            neo4j: parseBool(req, 'neo4j')
        };

        var topics = _.invoke(parseUrl(req, 'topics').toLowerCase().split(','), 'trim');

        var params = {
            topics: topics,
        };

        var start = new Date();
        Analytics.getNetworkByTag(params, options, function (err, response) {
            if (err || !response.results) throw swe.notFound('analytics');
            writeResponse(res, response, start);
        });
    }
};




exports.getEventLocationByTag = {
    'spec': {
        "description": "Get the location of the events filtered by to display on the map",
        "path": "/analytics/getEventLocationByTag",
        "notes": "Returns a set of nodes including the eventname and the lontitude and the latitude of the event",
        "summary": "Get the location of the events to display on the map",
        "method": "GET",
        "params": [
            param.query("topics", "A list of topics that a meetup group must have to be returned in the result set. Multiple topic names should be delimited by a comma.", "string", true, true),
        ],
        "responseClass": "List[Analytics]",
        "errorResponses": [],
        "nickname": "getEventLocationByTag"
    },
    'action': function (req, res) {
        var options = {
            neo4j: parseBool(req, 'neo4j')
        };

        var topics = _.invoke(parseUrl(req, 'topics').toLowerCase().split(','), 'trim');

        var params = {
            topics: topics,
        };

        var start = new Date();
        Analytics.getEventLocationByTag(params, options, function (err, response) {
            if (err || !response.results) throw swe.notFound('analytics');
            writeResponse(res, response, start);
        });
    }
};


