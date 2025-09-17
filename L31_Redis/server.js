const client = require('./client');


async function server() {
    // const res1 = await client.set("bike:1", "Deimos");
    // console.log(res1);  // OK
    // const res2 = await client.get("bike:1");
    // console.log(res2);  // Deimos


    // const res3 = await client.set("bike:1", "bike","NX");
    // console.log(res3);  // null
    // console.log(await client.get("bike:1"));  // Deimos
    // const res4 = await client.set("bike:1", "bike", "XX");
    // console.log(res4);  // OK

    // const user = {
    //     name: "Bob",
    //     // The value of a Redis key can not be a number.
    //     // We can write `age: 20` here but ioredis will convert it to a string anyway.
    //     age: "20",
    //     description: "I am a programmer",
    // };

    // await client.mset(user);

    // const name = await client.get("name");
    // console.log(name); // "Bob"

    // const age = await client.get("age");
    // console.log(age); // "20"

    // const all = await client.mget("name", "age", "description");
    // console.log(all); // [ 'Bob', '20', 'I am a programmer' ]

    // // or `await redis.del("name", "description")`;
    // await client.del(["name", "description"]);

    // const exists = await client.exists("name");
    // console.log(exists); // 0 (means false, and if it's 1, it means true)

    // await client.incrby("age", 1);
    // const newAge = await client.get("age");
    // console.log(newAge); // 21

    // await client.set("key_with_ttl", "hey", "EX", 1000);
    // const ttl = await client.ttl("key_with_ttl");
    // console.log(ttl); // a number smaller or equal to 1000

        const numbers = [1, 3, 5, 7, 9];
        await client.lpush("user-list", numbers);

        const popped = await client.lpop("user-list");
        console.log(popped); // 9

        const all = await client.lrange("user-list", 0, -1);
        console.log(all); // [ '7', '5', '3', '1' ]

        const position = await client.lpos("user-list", 5);
        console.log(position); // 1

        setTimeout(() => {
            // `redis` is in the block mode due to `redis.blpop()`,
            // so we duplicate a new connection to invoke LPUSH command.
            client.duplicate().lpush("block-list", "hello");
        }, 1200);
        const blockPopped = await client.blpop("block-list", 0); // Resolved after 1200ms.
        console.log(blockPopped); // [ 'block-list', 'hello' ]
    

}
server();
