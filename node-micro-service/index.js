const { send } = require('micro');
const url = require('url');
const level = require('level');
const promiseifly = require('then-levelup');
const db = promiseifly(level('visits.db', {
   
}))

module.exports = async function (request, response) {
   const { pathname } = url.parse(request.url);
   if (pathname.indexOf('.ico') === -1) {
      try {
         const currentVisits = await db.get(pathname);
         console.log(currentVisits);
         await db.put(pathname,+currentVisits + 1)
      } catch (error) {
         if(error) await db.put(pathname,1)
      }
      let text = `now this visits ${pathname} page  ${await db.get(pathname)} conust `
      send(response, 200, text);
   }
  
}