/*
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
*/
const whosOnline = (friends) => {
  // ____________  Формирую объект который буду возвращать
  let result = {
      online: [],
      offline: [],
      away: []
  }
  // ____________  В соответствии с условиями задачи распределяю данные по полям
  for (let inputElement of friends) {
      if (inputElement.status === 'online' && inputElement.lastActivity > 10) {
          result.away.push(inputElement.username)
      }
      if (inputElement.status === 'online' && inputElement.lastActivity <= 10) {
          result.online.push(inputElement.username)
      } else if (inputElement.status === 'offline') {
          result.offline.push(inputElement.username)
      }
  }

  // ____________ Удаляю пустое поле объекта после того как распределил данные 

  // ____________  1 способ 'в лоб'

  //     if (result.online.length === 0) {
  //         delete result.online
  //     }
  //     if (result.offline.length === 0) {
  //         delete result.offline
  //     }
  //     if (result.away.length === 0) {
  //         delete result.away
  //     }

  // ____________  2 способ используя for in

  //       for (let prop in result) {
  //       if (result[prop].length === 0) {
  //           delete result[prop];
  //       }
  //     }  

  // ____________  3 способ используя Object.entries 

  Object.entries(result).forEach(([prop, value]) => {
    if (value.length === 0) {
        delete result[prop];
    }
  });

  return result
}