/**
 * Solution found here: 
 * https://stackoverflow.com/questions/62124572/import-es6-module-from-http-url-in-typescript
 */

declare module 'https://cdn.skypack.dev/lodash' {
    export {default} from 'lodash'; 
}