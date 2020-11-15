const express = require('express');
const mysql = require('mysql');
require('dotenv').config({path: './.env'});
const app = express();

app.use(express.static('./'));
app.use(express.json());

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
}

const errorHandle = (error , result, fields) => {
    if (error) {
        res.send(err.message);
        throw error;
    };
    res.send(results);
};

const dataBase = mysql.createConnection({
    host: "localhost",
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATA_BASE,
    multipleStatements: true
});

dataBase.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ 
  cloud: {
    id: 'name:ZWFzdHVzMi5henVyZS5lbGFzdGljLWNsb3VkLmNvbTo5MjQzJGY5ZjU4NTkzNDUxMjQzNzNiMjRiNTcwNmNkZDBhODJmJDYzZGE0NzQ1MWIwYzRiYTdhMWRlMTIyY2FiYjZkZGUx',
  },
  auth: {
    username: 'elastic',
    password: 'uoW5qEe9Qb6UTQsF29QUlc6N'
  } });

//require('array.prototype.flatmap').shim();

app.get('/elastic/songs', async (req, res) => {
    client.search({
        index: 'songs',
        body: {
          query: {
            //match: { "name": "Bad Guy" }
            "match_all": {}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else 
        {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

app.get('/elastic/artists', async (req, res) => {
    client.search({
        index: 'artists',
        body: {
          query: {
            //match: { "name": "Bad Guy" }
            "match_all": {}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else 
        {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

app.post('/elastic/songs', async (req, res) => {
    await client.indices.create({
      index: 'songs',
      body: {
        mappings: {
          properties: {
            id: { type: 'integer' },
            link: { type: 'text' },
            name: { type: 'text' }
          }
        }
      }
    }, { ignore: [400] })
    
    const dataset = [ 
    // {
    //   id: 1,
    //   link: 'https://www.youtube.com/embed/k-VcA7C6meg',
    //   name: 'No Role Modelz'
    // },
    // {
    //   id: 2,
    //   link: 'https://www.youtube.com/embed/H4RELGc9su8',
    //   name: 'HUMBLE.'
    // },
    // {
    //   id: 3,
    //   link: 'https://www.youtube.com/embed/4GFAZBKZVJY',
    //   name: 'Rockstar'
    // },
    // {
    //   id: 4,
    //   link: 'https://www.youtube.com/embed/DyDfgMOUjCI',
    //   name: 'Bad Guy'
    // },
    // {
    //   id: 5,
    //   link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
    //   name: 'Lose Yourself'
    // },
    // {
    //   id: 6,
    //   link: 'https://www.youtube.com/embed/ciya_AQu25o',
    //   name: 'KOD'
    // },
    // {
    //   id: 7,
    //   link: 'https://www.youtube.com/embed/ifXalt3MJtM',
    //   name: 'Snow'
    // },
    // {
    //   id: 8,
    //   link: 'https://www.youtube.com/embed/8ELbX5CMomE',
    //   name: 'Sorry'
    // },
    // {
    //   id: 9,
    //   link: 'https://www.youtube.com/embed/QYh6mYIJG2Y',
    //   name: '7 Rings'
    // },
    // {
    //   id: 10,
    //   link: 'https://www.youtube.com/embed/g0NVaX8DRN4',
    //   name: 'King Kunta'
    // }
    // {
    //     id: 11,
    //     link: 'https://www.youtube.com/embed/kyHzJM1ucr4',
    //     name: 'For Whom the Bell Tolls'
    // },
    // {
    //     id: 12,
    //     link: 'https://www.youtube.com/embed/4ZxVZaYd1Fs',
    //     name: 'Immortal'
    // },
    // {
    //     id: 13,
    //     link: 'https://www.youtube.com/embed/oigcRpBOoZk',
    //     name: 'Deja Vu'
    // },
    // {
    //     id: 14,
    //     link: 'https://www.youtube.com/embed/7OQcrUcw47k',
    //     name: 'Ville Mentality'
    // },
    // {
    //     id: 15,
    //     link: 'https://www.youtube.com/embed/VB0e6fyI-Q0',
    //     name: 'She\'s Mine Pt. 1'
    // },
    // {
    //     id: 16,
    //     link: 'https://www.youtube.com/embed/ZN6RBOAyRhE',
    //     name: 'Change'
    // },
    // {
    //     id: 17,
    //     link: 'https://www.youtube.com/embed/X5Z5UOLP7js',
    //     name: 'Neighbors'
    // },
    // {
    //     id: 18,
    //     link: 'https://www.youtube.com/embed/t3x9IcFVPAI',
    //     name: 'Foldin Clothes'
    // },
    // {
    //     id: 19,
    //     link: 'https://www.youtube.com/embed/YukMATMQG54',
    //     name: 'She\'s Mine Pt. 2'
    // },
    // {
    //     id: 20,
    //     link: 'https://www.youtube.com/embed/g_W9af_CQDs',
    //     name: '4 Your Eyez Only'
    // },
    // {
    //     id: 21,
    //     link: 'https://www.youtube.com/embed/UYwF-jdcVjY',
    //     name: 'Better Now'
    // },
    // {
    //     id: 22,
    //     link: 'https://www.youtube.com/embed/OhqyRJtv3K0',
    //     name: '92 Explorer'
    // },
    // {
    //     id: 23,
    //     link: 'https://www.youtube.com/embed/w5GrxfjuTTI',
    //     name: 'Hollywood\'s Bleeding'
    // },
    // {
    //     id: 24,
    //     link: 'https://www.youtube.com/embed/wXhTHyIgQ_U',
    //     name: 'Circles'
    // },
    // {
    //     id: 25,
    //     link: 'https://www.youtube.com/embed/YgKDE5eYNqc',
    //     name: 'Goodbyes'
    // },
    // {
    //     id: 26,
    //     link: 'https://www.youtube.com/embed/k1ATPhkVWi0',
    //     name: 'my strange addiction'
    // },
    // {
    //     id: 27,
    //     link: 'https://www.youtube.com/embed/pbMwTqkKSps',
    //     name: 'when the party\'s over'
    // },
    // {
    //     id: 28,
    //     link: 'https://www.youtube.com/embed/ew7qhDBQcU4',
    //     name: 'ATM'
    // },
    // {
    //     id: 29,
    //     link: 'https://www.youtube.com/embed/ii6u1wSAu90',
    //     name: '1985'
    // },
    // {
    //     id: 30,
    //     link: 'https://www.youtube.com/embed/2hMy0rnHQv0',
    //     name: 'motiv8'
    // },
    // {
    //     id: 31,
    //     link: 'https://www.youtube.com/embed/FhF9RwkHAJw',
    //     name: 'Kamikaze'
    // },
    // {
    //     id: 32,
    //     link: 'https://www.youtube.com/embed/QdS60of43qA',
    //     name: 'Greatest'
    // },
    // {
    //     id: 33,
    //     link: 'https://www.youtube.com/embed/kCfVv3RsGw4',
    //     name: 'nevermind'
    // },
    // {
    //     id: 34,
    //     link: 'https://www.youtube.com/embed/vVVQHN7MH8w',
    //     name: 'playa'
    // },
    // {
    //     id: 35,
    //     link: 'https://www.youtube.com/embed/ALj5MKjy2BU',
    //     name: 'FIRE'
    // },
    // {
    //     id: 36,
    //     link: 'https://www.youtube.com/embed/xc6BnDajozw',
    //     name: 'Bad Boy'
    // },
    // {
    //     id: 37,
    //     link: 'https://www.youtube.com/embed/OKGJOtRaqMg',
    //     name: 'Gin and Juice'
    // },
    // {
    //     id: 38,
    //     link: 'https://www.youtube.com/embed/Inw7B2F6_Hc',
    //     name: 'Vato'
    // },
    // {
    //     id: 39,
    //     link: 'https://www.youtube.com/embed/CAEUnn0HNLM',
    //     name: 'Radioactive'
    // },
    // {
    //     id: 40,
    //     link: 'https://www.youtube.com/embed/7wtfhZwyrcc',
    //     name: 'Believer'
    // },
    // {
    //     id: 41,
    //     link: 'https://www.youtube.com/embed/nJtK14ffgEM',
    //     name: 'Adventure Of A Lifetime'
    // },
    // {
    //     id: 42,
    //     link: 'https://www.youtube.com/embed/41qC3w3UUkU',
    //     name: 'Hit \'Em Up'
    // }


]
    
    const body = dataset.flatMap(doc => [{ index: { _index: 'songs' } }, doc])
    
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
    
    if (bulkResponse.errors) {
      const erroredDocuments = []
      // The items array has the same order of the dataset we just indexed.
      // The presence of the `error` key indicates that the operation
      // that we did for the document has failed.
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            // If the status is 429 it means that you can retry the document,
            // otherwise it's very likely a mapping error, and you should
            // fix the document before to try it again.
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
      
    const { body: count } = await client.count({ index: 'songs' })
    console.log(count);      
});

app.post('/elastic/artists', async (req, res) => {
    await client.indices.create({
      index: 'artists',
      body: {
        mappings: {
          properties: {
            id: { type: 'integer' },
            link: { type: 'text' },
            name: { type: 'text' }
          }
        }
      }
    }, { ignore: [400] })
    
    const dataset = [
        {
            id: 1,
            link: 'https://pbs.twimg.com/profile_images/1286117233585008640/CBP7O5Xm_400x400.jpg',
            name: 'J. Cole'
        },
        {
            id: 2,
            link: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/02/21/edf6e522-52de-11ea-8948-c9a8d8f9b667_image_hires_045852.jpg?itok=MBGVfIH7&v=1582232343',
            name: 'Post Malone'
        },
        {
            id: 3,
            link: 'https://www.tubefilter.com/wp-content/uploads/2019/02/ariana-grande-1.jpg',
            name: 'Ariana Grande'
        },
        {
            id: 4,
            link: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc45b1830-78ba-11ea-bc41-6517026e24df.jpg?crop=3657%2C2438%2C148%2C1174',
            name: 'Billie Eilish'
        },
        {
            id: 5,
            link: 'https://www.nme.com/wp-content/uploads/2016/11/NME_GREENDAY_269_29482901_144821732.jpg',
            name: 'Green Day'
        },
        {
            id: 6,
            link: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-184033-53049468.jpg',
            name: 'Coldplay'
        },
        {
            id: 7,
            link: 'https://townsquare.media/site/838/files/2019/12/red-hot-chili-peppers.jpg?w=980&q=75',
            name: 'Red Hot Chilly Peppers'
        },
        {
            id: 8,
            link: 'https://thesource.com/wp-content/uploads/2018/03/Kendrick-Lamar.jpeg',
            name: 'Kendrick Lamar'
        },
        {
            id: 9,
            link: 'https://www.rollingstone.com/wp-content/uploads/2020/01/eminem-review.jpg',
            name: 'Eminem'
        },
        {
            id: 10,
            link: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15159/production/_113116368_gettyimages-1202446488.jpg',
            name: 'Justin Biber'
        },
        {
            id: 11,
            link: 'https://thumbor.forbes.com/thumbor/1950x1950/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ceec355142c500008f42068%2F0x0.jpg%3FcropX1%3D32%26cropX2%3D1982%26cropY1%3D257%26cropY2%3D2207',
            name: 'Rihana'
        },
        {
            id: 12,
            link: 'https://pyxis.nymag.com/v1/imgs/43b/76c/88f02dad39322d39ccc09a8fdf2ea40fe9-kanye-west-canidacy.rsquare.w1200.jpg',
            name: 'Kanye West'
        },
        {
            id: 13,
            link: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg',
            name: 'BTS'
        },
        {
            id: 14,
            link: 'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2018/04/03143049/breaking-benjamin-online.jpg',
            name: 'Breaking Benjamin'
        },
        {
            id: 15,
            link: 'https://www.nme.com/wp-content/uploads/2019/12/GettyImages-1125955705-696x442.jpg',
            name: '2pac'
        },
        {
            id: 16,
            link: 'https://pbs.twimg.com/profile_images/1047708254447357957/fvJXTeOY.jpg',
            name: 'imagine dragons'
        },
        {
            id: 17,
            link: 'https://i.ytimg.com/vi/GuLTb9cYHWE/maxresdefault.jpg',
            name: 'Dennis Lloyd'
        },
        {
            id: 18,
            link: 'https://static.billboard.com/files/media/Snoop-Dogg-cr-Kenneth-Cappello-billboard-1548-768x433.jpg',
            name: 'Snoop Dogg'
        },
        {
            id: 19,
            link: 'https://i2.wp.com/hkpub.net/wp-content/uploads/2019/07/Ed-Sheeran-Press-Photo-2-Credit-Mark-Surridge-crop.jpg?fit=1200%2C1068&ssl=1',
            name: 'Ed Sheeran'
        },
        {
            id: 20,
            link: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2020/03/04/D_TNZOBUIAAurqz.jpg',
            name: 'bbno$'
        }
]
    
    const body = dataset.flatMap(doc => [{ index: { _index: 'artists' } }, doc])
    
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
    
    if (bulkResponse.errors) {
      const erroredDocuments = []
      // The items array has the same order of the dataset we just indexed.
      // The presence of the `error` key indicates that the operation
      // that we did for the document has failed.
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            // If the status is 429 it means that you can retry the document,
            // otherwise it's very likely a mapping error, and you should
            // fix the document before to try it again.
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
      
    const { body: count } = await client.count({ index: 'artists' })
    console.log(count);      
});

app.post('/elastic/albums', async (erq, res) => {
    await client.indices.create({
        index: 'albums',
        body: {
          mappings: {
            properties: {
              id: { type: 'integer' },
              link: { type: 'text' },
              name: { type: 'text' }
            }
          }
        }
      }, { ignore: [400] })
      
      const dataset = [
          {
              id: 1,
              link: 'https://upload.wikimedia.org/wikipedia/he/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png',
              name: 'To Pimp A Butterfly'
          },
          {
              id: 2,
              link: 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg',
              name: 'Kamikaze'
          },
          {
              id: 3,
              link: 'https://www.helicon.co.il/wp-content/uploads/2020/02/0602537192267.jpg',
              name: 'Good Kid M.A.A.D City'
          },
          {
              id: 4,
              link: 'https://media.pitchfork.com/photos/5929c00fabf31b7dc71563da/1:1/w_600/6a6268b6.jpg',
              name: '4 Your Eyes Only'
          },
          {
              id: 5,
              link: 'https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png',
              name: 'When We Fall Asleep Where Do We Go'
          },
          {
              id: 6,
              link: 'https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/b/76/b7694a54-4778-11e8-a64a-776834e70253/5adeb487943fd.image.jpg?resize=1200%2C1190',
              name: 'KOD'
          },
          {
              id: 7,
              link: 'https://i.pinimg.com/originals/e6/94/75/e69475741ad8f1a686d8390627630c47.jpg',
              name: 'Beerbongs & Bentleys'
          },
          {
              id: 8,
              link: 'https://images.genius.com/456a385f5f9741e2202331ac8d06e1f2.1000x1000x1.jpg',
              name: 'Hollywood\'s Bleeding'
          },
      ];
      const body = dataset.flatMap(doc => [{ index: { _index: 'albums' } }, doc])
    
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
    
    if (bulkResponse.errors) {
      const erroredDocuments = []
      // The items array has the same order of the dataset we just indexed.
      // The presence of the `error` key indicates that the operation
      // that we did for the document has failed.
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            // If the status is 429 it means that you can retry the document,
            // otherwise it's very likely a mapping error, and you should
            // fix the document before to try it again.
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
      
    const { body: count } = await client.count({ index: 'albums' })
    console.log(count); 
})

app.post('/elastic/playlists', async (erq, res) => {
    await client.indices.create({
        index: 'playlists',
        body: {
          mappings: {
            properties: {
              id: { type: 'integer' },
              link: { type: 'text' },
              name: { type: 'text' }
            }
          }
        }
      }, { ignore: [400] })
      
      const dataset = [
          {
              id: 1,
              link: 'https://eddietrunk.com/wp-content/uploads/2019/09/RockMusic600.jpg',
              name: 'My Rock Music'
          },
          {
              id: 2,
              link: 'https://i.ytimg.com/vi/RLWcYADoV84/maxresdefault.jpg',
              name: 'chill'
          },
          {
              id: 3,
              link: 'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
              name: 'my favorites'
          },
          {
              id: 4,
              link: 'https://image.freepik.com/free-vector/rap-battle-neon-text-hand-holding-microphone_1262-11900.jpg',
              name: 'rap'
          },
          {
              id: 5,
              link: 'https://static.toiimg.com/photo/73045588.cms',
              name: 'parties'
          },
          {
              id: 6,
              link: 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/johnson-169hero-hiphop-shutterstock.jpg',
              name: 'best of hip hop'
          },
          {
              id: 7,
              link: 'https://img.etimg.com/thumb/msid-71477539,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg',
              name: 'music to drive to'
          },
          {
              id: 8,
              link: 'https://lh3.googleusercontent.com/MYWHyzqjk_ByAfgTAaXlWhuGYJJy37JuJg7Cj4PDO-t8C6hLIYMKa8I3R-NOsAZNd20wq5iAzA=w2880-h1619-l90-rj',
              name: 'i love these songs'
          },
          {
              id: 9,
              link: 'https://images-na.ssl-images-amazon.com/images/I/81ySD45ZNbL._SL1500_.jpg',
              name: '90s Hits'
          },
          {
              id: 10,
              link: 'https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg',
              name: 'Workout Music'
          },
          {
              id: 11,
              link: 'https://www.dw.com/image/54667813_303.jpg',
              name: 'Latest Hits'
          },
      ];
      const body = dataset.flatMap(doc => [{ index: { _index: 'playlists' } }, doc])
    
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
    
    if (bulkResponse.errors) {
      const erroredDocuments = []
      // The items array has the same order of the dataset we just indexed.
      // The presence of the `error` key indicates that the operation
      // that we did for the document has failed.
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            // If the status is 429 it means that you can retry the document,
            // otherwise it's very likely a mapping error, and you should
            // fix the document before to try it again.
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
      
    const { body: count } = await client.count({ index: 'playlists' })
    console.log(count); 
})

app.get('/elastic/songs/:search' , async (req, res) => {
    client.search({
        index: 'songs',
        body: {
          query: {
            wildcard: { 
                'name': {
                    value: `*${req.params.search}*`
            }}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

app.get('/elastic/artists/:search' , async (req, res) => {
    client.search({
        index: 'artists',
        body: {
          query: {
            wildcard: { 
                'name': {
                    value: `*${req.params.search}*`
            }}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

app.get('/elastic/albums/:search' , async (req, res) => {
    client.search({
        index: 'albums',
        body: {
          query: {
            wildcard: { 
                'name': {
                    value: `*${req.params.search}*`
            }}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

app.get('/elastic/playlists/:search' , async (req, res) => {
    client.search({
        index: 'playlists',
        body: {
          query: {
            wildcard: { 
                'name': {
                    value: `*${req.params.search}*`
            }}
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        else {
            console.log(result.body.hits.hits);
            res.send(result.body.hits.hits);
        }
      })
});

////  GET requests by id
{
app.get('/songs/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM songs WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/users/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM users WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/artists/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM artists WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/albums/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM albums WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/playlists/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM playlists WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// GET requests to the entire table
{
app.get('/songs', async (req, res) =>{
    if (req.query.search) {
        dataBase.query(`SELECT * FROM songs WHERE name LIKE "%${req.query.search}%"`, (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    }
    
    else 
    {
    dataBase.query('SELECT * FROM songs', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
    }
});

app.get('/users', async (req, res) =>{
    dataBase.query('SELECT * FROM users', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/artists', async (req, res) =>{
    if (req.query.search) {
        dataBase.query(`SELECT * FROM artists WHERE name LIKE "%${req.query.search}%"`, (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    }
    
    else 
    {
    dataBase.query('SELECT * FROM artists', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
    }
});

app.get('/albums', async (req, res) =>{
    if (req.query.search) {
        dataBase.query(`SELECT * FROM albums WHERE name LIKE "%${req.query.search}%"`, (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    }
    
    else 
    {
    dataBase.query('SELECT * FROM albums', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
    }
});

app.get('/playlists', async (req, res) =>{
    if (req.query.search) {
        dataBase.query(`SELECT * FROM playlists WHERE name LIKE "%${req.query.search}%"`, (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    }
    
    else 
    {
    dataBase.query('SELECT * FROM playlists', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
    }
});
}

//// POST requests
{
app.post('/songs', async (req, res) =>{
    dataBase.query('INSERT INTO songs VALUES ?', [req.body.songs], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/artists', async (req, res) =>{
    dataBase.query('INSERT INTO artists VALUES ?', [req.body.artists], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/users', async (req, res) =>{
    dataBase.query('INSERT INTO users VALUES ?', [req.body.users], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/albums', async (req, res) =>{
    dataBase.query('INSERT INTO albums VALUES ?', [req.body.albums], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/playlists', async (req, res) =>{
    dataBase.query('INSERT INTO playlists VALUES ?', [req.body.playlists], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// DELETE requests
{
app.delete('/songs/:id', async (req, res) =>{
    dataBase.query('DELETE FROM songs WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/artists/:id', async (req, res) =>{
    dataBase.query('DELETE FROM artists WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/users/:id', async (req, res) =>{
    dataBase.query('DELETE FROM users WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/albums/:id', async (req, res) =>{
    dataBase.query('DELETE FROM albums WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/playlists/:id', async (req, res) =>{
    dataBase.query('DELETE FROM playlists WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

}

//// PUT requests
{
app.put('/songs/:id', async (req, res) =>{
    dataBase.query('UPDATE songs SET name = ? , artist_id = ? , album_id = ? , uploaded_at = ? , length_seconds = ? , youtube_link = ? WHERE id = ?', [...req.body.songs , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/artists/:id', async (req, res) =>{
    dataBase.query('UPDATE artists SET name = ? , genre = ? , joined_at = ? WHERE id = ?', [...req.body.artists , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/users/:id', async (req, res) =>{
    dataBase.query('UPDATE users SET name = ? , email = ? , country = ? , created_at = ? , premium = ? WHERE id = ?', [...req.body.users , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/albums/:id', async (req, res) =>{
    dataBase.query('UPDATE albums SET name = ? , artist_id = ? , number_of_songs = ? , uploaded_at = ? WHERE id = ?', [...req.body.albums , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/playlists/:id', async (req, res) =>{
    dataBase.query('UPDATE playlists SET name = ? , user_id = ? , created_at = ? , public = ? WHERE id = ?', [...req.body.playlists , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// GET Albums by Artist
app.get('/albums/artist/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM albums WHERE artist_id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

//// GET Songs in Album
app.get('/songs/album/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM songs WHERE album_id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

//// GET All Songs by Artist
app.get('/songs/artist/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM songs WHERE artist_id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});


//// GET Top 10
{
    app.get('/song/top', async (req, res) =>{
        dataBase.query('SELECT * FROM songs LIMIT 10', (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    });

    app.get('/user/top', async (req, res) =>{
        dataBase.query('SELECT * FROM users LIMIT 10', (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    });
    
    app.get('/artist/top', async (req, res) =>{
        dataBase.query('SELECT * FROM artists LIMIT 10', (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    });
    
    app.get('/album/top', async (req, res) =>{
        dataBase.query('SELECT * FROM albums LIMIT 10', (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    });
    
    app.get('/playlist/top', async (req, res) =>{
        dataBase.query('SELECT * FROM playlists LIMIT 10', (error, results, fields) => {
            if (error) {
                res.send(error.message);
                throw error;
            };
            res.send(results);
          });
    });
}

//// GET Songs in playlist
app.get('/playlistSongs/:id', async (req, res) =>{
    dataBase.query('SELECT playlists.id, playlists.name, playlistSongs.song_id, songs.id, songs.name, songs.youtube_link FROM playlists LEFT JOIN playlistSongs ON playlists.id = playlistSongs.playlist_id LEFT JOIN songs ON playlistSongs.song_id = songs.id WHERE playlists.id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});




app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})