require("dotenv").config();
let express =require("express");
let app =express();
let port =3000;
const githubdata= {//obtained from https://api.github.com/users/anuragghosh
    "login": "anuragghosh",
    "id": 6097368,
    "node_id": "MDQ6VXNlcjYwOTczNjg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6097368?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anuragghosh",
    "html_url": "https://github.com/anuragghosh",
    "followers_url": "https://api.github.com/users/anuragghosh/followers",
    "following_url": "https://api.github.com/users/anuragghosh/following{/other_user}",
    "gists_url": "https://api.github.com/users/anuragghosh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anuragghosh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anuragghosh/subscriptions",
    "organizations_url": "https://api.github.com/users/anuragghosh/orgs",
    "repos_url": "https://api.github.com/users/anuragghosh/repos",
    "events_url": "https://api.github.com/users/anuragghosh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anuragghosh/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2013-12-03T16:58:16Z",
    "updated_at": "2016-02-27T12:41:07Z"
  };
app.get('/',(req,res)=>{
res.send("hellow world");

});
app.get('/twitter',(req,res)=>{
    res.send("ami champion");

});
app.get('/login',(req,res)=>{
res.send("ami khub bhalo");//eikhane amra html code o send korte pari
})
app.get("/github",(req,res)=>{
    res.send(githubdata);
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening to port ${port} `);
});