// This is a first aproximation of the relational schema.


userAr = [];
userAr.push(
  { id      : userAr.length
  , username: 'loqi'
  , fullName: 'Park Loqi Tamaroon'
  , imgUrl  : 'http://givingbranch.com/public/avatar/loqi.png'
  });
userAr.push(
  { id      : userAr.length
  , username: 'frank'
  , name    : 'Jose "Frank" Reyna'
  , imgUrl  : 'http://givingbranch.com/public/avatar/frank.png'
  });
userAr.push(
  { id      : userAr.length
  , username: 'schmoe'
  , name    : 'Joe Schmoe'
  , imgUrl  : 'http://givingbranch.com/public/avatar/schmoe.png'
  });


branchAr = [];
branchAr.push(
  { id        : branchAr.length
  , author    : userAr.filter(function(el){/\sReyna$/.test(el.name)})[0]
  , getGoal   : 15000
  , deposit   : 5000
  , sunset    : new Date(2016, 4, 10, 17, 0, 0);
  , title     : "$10K tuition shortfall at Hack Reactor"
  , subtitle  : "$10K boost for me becomes $15K boost for others within a year"
  , narrative : "I am switching my carrer from deisel mechanic to software engineer. After saving as much money as I could....."
  , videoUrl  : "http://youtube.com/"
  , imgUrl    : 'http://givingbranch.com/public/avatar/user' + userAr.length + '.png'
  });

