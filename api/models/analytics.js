var _ = require('underscore');
var uuid = require('hat'); // generates uuids
var Cypher = require('../neo4j/cypher');
var Analytics = require('../models/neo4j/analytics');
var async = require('async');

/**
 *  Result Functions
 *  to be combined with queries using _.partial()
 */

var _TopMemberGroupStatistics = function (results, callback) {
  var analytics = _.map(results, function (result) {
    var thisAnalytics = {};
    thisAnalytics.groupName = result.groupName;
    thisAnalytics.members = result.groupMember;
    return thisAnalytics;
  });

  callback(null, analytics);
};

var _TopEventGroupStatistics = function (results, callback) {
  var analytics = _.map(results, function (result) {
    var thisAnalytics = {};
    thisAnalytics.groupName = result.groupName;
    thisAnalytics.events = result.eventNum;
    return thisAnalytics;
  });

  callback(null, analytics);
};

var _NetworkStatistics = function (results, callback) {
  var analytics = _.map(results, function (result) {
    var thisAnalytics = {};
    thisAnalytics.source = result.source;
    thisAnalytics.target = result.target;
    thisAnalytics.weight = result.weight;
    return thisAnalytics;
  });

  callback(null, analytics);
};

var _EventLocationStatistics = function (results, callback) {
  var analytics = _.map(results, function (result) {
    var thisAnalytics = {};
    thisAnalytics.lon = result.eventLon;
    thisAnalytics.lat = result.eventLat;
    return thisAnalytics;
  });

  callback(null, analytics);
};


/**
 *  Query Functions
 *  to be combined with result functions using _.partial()
 */

var _getTopMemberGroupByTag = function (params, options, callback) {
  var cypher_params = {
    topics: params.topics,
    //numofreturns: params.numofreturns
  };
  var query = [
    'MATCH (topic:Topic)',
    'WHERE topic.topicName in {topics} ',
    'MATCH (group:Group)-[:Has]->(topic)' ,
    'WHERE HAS(group.groupName)',
    'RETURN group.groupName AS groupName, group.groupMember AS groupMember',
    'ORDER BY group.groupMember DESC',
    'LIMIT 5'
  ].join('\n');

  callback(null, query, cypher_params);
};

var _getTopEventGroupByTag = function (params, options, callback) {
  var cypher_params = {
    topics: params.topics,
    //numofreturns: params.numofreturns
  };
  var query = [
    'MATCH (topic:Topic)',
    'WHERE topic.topicName in {topics}  ',
    'MATCH (group:Group)-[:Has]->(topic)' ,
    'WHERE HAS(group.groupName) AND HAS(group.eventNum)',
    'RETURN group.groupName AS groupName, group.eventNum AS eventNum',
    'ORDER BY group.eventNum DESC',
    'LIMIT 5'
  ].join('\n');

  callback(null, query, cypher_params);
};

var _getNetworkByTag = function (params, options, callback) {
  var cypher_params = {
        topics: params.topics
  };
  var query = [
    'MATCH (topic:Topic)',
    'WHERE topic.topicName in {topics}',
    'MATCH (group1:Group)-[:Has]->(topic)<-[:Has]-(group2:Group)' ,
    'WHERE HAS(group1.groupName) AND HAS(group2.groupName)',
    'MATCH (group1:Group)<-[share:Share]->(group2:Group)',
    'RETURN group1.groupID AS source, group2.groupID AS target, share.commonusers AS weight',
    'ORDER BY share.commonusers DESC',
    'LIMIT 200'  
    ].join('\n');

  callback(null, query, cypher_params);
};

var _getEventLocationByTag = function (params, options, callback) {
  var cypher_params = {
            topics: params.topics
  };
  var query = [
  
    'MATCH (topic:Topic)',
    'WHERE topic.topicName in {topics}  ',
    'MATCH (event:Event)<-[:Hold]-(group:Group)-[:Has]->(topic)' ,
    'RETURN event.eventLon AS eventLon,event.eventLat AS eventLat',
    'LIMIT 100'

  
/*
'MATCH (event:Event)',
'RETURN event.eventLon AS eventLon,event.eventLat AS eventLat',
'LIMIT 100'
*/
  ].join('\n');

  callback(null, query, cypher_params);
};




/**
 *  Result Function Wrappers
 *  a wrapper function that combines both the result functions with query functions
 */

var getTopMemberGroupByTag = Cypher(_getTopMemberGroupByTag, _TopMemberGroupStatistics);
var getTopEventGroupByTag = Cypher(_getTopEventGroupByTag, _TopEventGroupStatistics);
var getNetworkByTag = Cypher(_getNetworkByTag, _NetworkStatistics);
var getEventLocationByTag = Cypher(_getEventLocationByTag, _EventLocationStatistics);


// export exposed functions
module.exports = {
  getTopMemberGroupByTag: getTopMemberGroupByTag,
  getTopEventGroupByTag: getTopEventGroupByTag,
  getNetworkByTag: getNetworkByTag,
  getEventLocationByTag: getEventLocationByTag
};
