const minifaker = require('minifaker');
const Post = require('../models/post');

require('minifaker/locales/en');


exports.read = async (req, res) => {
    const skip = req.query.skip ? Number(req.query.skip) : 0;
    const DEFAULT_LIMIT = 30; 

    try{
        const posts = await Post.find({}).skip(skip).limit(DEFAULT_LIMIT);

        res.status(200).json({
            success: true,
            data: posts,
        });
    }
    catch(err){
        res.status(400).json({
            error: `Error getting posts: ${err.message}`,
        })
    }

}

exports.create = async (req, res) => {
    const {total} = req.body;
    const posts = [];
    console.log("total",total);
    try{
        const compilePosts = async (_) =>{
            for(let index = 0; index < total; index++){
                const randamAvatorNum = Math.floor(Math.random() * 70 )+ 1;
                const randomImageNum = Math.floor(Math.random() * 70) + 1;

                const post = new Post({
                    username: minifaker.username(),
                    avatar: `https://i.pravatar.cc/150?img=${randamAvatorNum}`, 
                    image: `https://i.pravatar.cc/600?img=${randomImageNum}`,
					caption: `${minifaker.word()} ${minifaker.word()} ${minifaker.cityName()}`,

                });
                posts.push(post);
            }
        };

        await compilePosts();
        console.log(posts);
        await Post.insertMany(posts);

        res.status(201).json({
            success: true,
            total_: total,
            data: posts,
            
        });

    }catch(err){
        res.status(400).json({
            error: `Error create posts: ${err.message}`,
        })
    }
}