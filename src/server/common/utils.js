import path from 'path';
import fs from 'fs';
import performanceNow from 'performance-now';
import _ from 'lodash';
import {FLOGO_TASK_TYPE} from '../common/constants';

export function btoa(str) {
  var buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), 'binary');
  }

  return buffer.toString('base64');
}

export function atob(str) {
  return new Buffer(str, 'base64').toString('binary');
}

export function isExisted(testedPath){
  try {
    fs.accessSync(testedPath, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

export function isDirectory(testedPath){
  if(isExisted(testedPath)){
    let stats = fs.statSync(testedPath);
    if(stats.isDirectory()){
      return true
    }else{
      return false;
    }
  }else{
    return undefined;
  }
}

export function readDirectoriesSync(dirPath){
  let dirs = fs.readdirSync(dirPath);
  let nDirs = [];
  dirs.forEach((dir)=>{
    if(isDirectory(path.join(dirPath, dir))){
      nDirs.push(dir);
    }
  });

  return nDirs;
}

/**
 * judge whether a string is a valid json string. if i
 * @param  {string}  str - the JSON string
 * @return {object|undefined} if it is a valid json, return json, otherwise return undefined
 */
export function isJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return undefined;
  }
}

/**
 * Read a JSON file
 * @param  {string|Path} jSONPath - the path of JSON file
 * @return {object|undefined} if it is a valid and exist json, return json, otherwise return undefined
 */
export function readJSONFileSync(JSONPath){
  let data = undefined;
  if(isExisted(JSONPath)){
    data = fs.readFileSync(JSONPath, {
      "encoding": "utf8"
    });
    data = isJSON(data);
  }else{
    console.error("[error][utils.js->readJSONFileSync] path doesn't exist. path: ", JSONPath);
  }

  return data;
}

/**
 * Get absoulte path to latest file in a directory. It does not recurse.
 * @param where directory to look in
 * @param name {string|RegExp} name of the file
 * @returns {Promise<String>} resolves to absolute path to file or null if no file found with the provided name
 */
export function findLastCreatedFile(where, name) {

  if (typeof name === 'string') {
    name = new RegExp(name);
  }

  return new Promise((resolve, reject) => {
    fs.readdir(where, function (err, files) {
      if(err) {
        return reject(err);
      }

      let fileStatsCollect = files.
        filter(fileName => name.test(fileName))
        .map(fileName => new Promise((resolve, reject) => {
          let filePath = path.join(where, fileName);
          fs.stat(filePath, (err, stats) => resolve(err ? null : {path: filePath, creation: stats.birthtime.getTime()}));
        }));

      Promise.all(fileStatsCollect)
        .then(files => files.reduce((greatest, current) => current.creation > greatest.creation ? current : greatest, {creation: 0}))
        .then(fileInfo => fileInfo.path || null)
        .then(resolve)

    })
  });

}

/**
 * write a JSON file
 * @param {string|Path} JSONPath - the path of JSON file
 * @param {object} data - the JSON data you want to write
 * @return {boolean} if write successful, return ture, otherwise return false
 */
export function writeJSONFileSync(JSONPath, data){
  try{
    fs.writeFileSync(JSONPath, JSON.stringify(data, null, 2), {
      "encoding": "utf8"
    });
    return true;
  }catch(err){
    console.error("[error][utils.js->writeJSONFileSync] err: ", err);
    return false;
  }
}

export function flogoIDEncode( id){
  return btoa( id )
    .replace( /\+/g, '-' )
    .replace( /\//g, '_' )
    .replace( /=+$/, '' );
}

// URL safe base64 decoding
// reference: https://gist.github.com/jhurliman/1250118
export function flogoIDDecode( encodedId ){

  encodedId = encodedId.replace( /-/g, '+' )
    .replace( /_/g, '/' );

  while ( encodedId.length % 4 ) {
    encodedId += '=';
  }

  return atob( encodedId );
}

export function flogoGenTaskID(items) {
  let taskID;

  // TODO
  //  generate a more meaningful task ID in string format
  if ( items ) {
    let ids = _.keys( items );
    let startPoint = 2; // taskID 1 is reserved for the rootTask

    let taskIDs = _.map( _.filter( ids, id => {
      return items[ id ].type === FLOGO_TASK_TYPE.TASK;
    } ), id => {
      return _.toNumber( flogoIDDecode( id ) );
    } );

    let currentMax = _.max( taskIDs );

    if ( currentMax && _.isFinite(currentMax) ) { // isFinite: _.max coerces values to number in lodash versions < 4
      taskID = '' + ( currentMax + 1);
    } else {
      taskID = '' + startPoint;
    }

  } else {
    // shift the timestamp for avoiding overflow 32 bit system
    taskID = '' + (Date.now() >>> 1);
  }

  return flogoIDEncode( taskID );

}

export function flogoGenTriggerID() {
  return flogoIDEncode( `Flogo::Trigger::${Date.now()}` );
}

export function genNodeID(items)  {


  let id = '';

  if ( performanceNow && _.isFunction( performanceNow ) ) {
    id = `FlogoFlowDiagramNode::${Date.now()}::${performanceNow()}`;
  } else {
    id = `FlogoFlowDiagramNode::${Date.now()}}`;
  }

  return flogoIDEncode( id );
};

/**
 * Convert task ID to integer, which is the currently supported type in engine
 * TODO
 *  taskID should be string in the future, perhaps..
 *
 * @param taskID
 * @returns {number}
 * @private
 */
export function convertTaskID(taskID ) {
  let id = '';

  try {
    id = flogoIDDecode( taskID );

    // get the timestamp
    let parsedID = id.split( '::' );

    if ( parsedID.length >= 2 ) {
      id = parsedID[ 1 ];
    }
  } catch ( e ) {
    console.warn( e );
    id = taskID;
  }

  return parseInt( id );
}
