test();

async function test() {
  let level_result = await publishLevel(12, {data: true});
  console.log(level_result);
  console.log('called publishLevel!');
}

async function publishLevel(user_id, level_data) {
  var user = await getUser(user_id);
  var can_create = await canCreate(user);

  if (!can_create) {
    return null;
  }

  var level = await saveLevel(user, level_data);

  return level;
}

function getUser(user_id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: user_id,
        nickname: 'tlhunter'
      });
    }, 100);
  });
}

function canCreate(user) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(user.id === 12);
    }, 100);
  });
}

function saveLevel(user, data) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
    }, 100);
  });
}