const mongoose = require('mongoose');
const Blog = require('./model/Blog');

let initialBlogs = [
    {
        img : 'https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZyUyMGd0fGVufDB8fDB8fHww',
        content : 'The Mustang, an iconic American muscle car, boasts powerful performance and classic design. With its roaring engine and sleek lines, it remains a symbol of freedom and speed on the open road.',
        likes : 0,
        dislikes : 0,
        comment : [
            `The Mustang's design truly embodies classic American muscle!` ,
            `Love the Mustang's combination of power and style` ,
            `Nothing beats the thrill of driving a Mustang!`
        ] 
    } ,
    {
        img : `https://images.unsplash.com/photo-1606101204735-85ad3a8bfd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFuYW5hJTIwQnJlYWQlMjBSZWNpcGV8ZW58MHx8MHx8fDA%3D`,
        content : `This moist and delicious banana bread is perfect for breakfast or a snack. With ripe bananas, a hint of cinnamon, and a touch of vanilla, it's a family favorite` ,
        likes : 0,
        dislikes : 0,
        comment : [
            `Tried this recipe, and it turned out amazing!`,
            `Perfectly moist and flavorful banana bread. Highly recommend!`,
            `Easy to make and absolutely delicious. Loved it!`
        ] 
    } ,
    {
        img : `https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2VuJTIwYWl8ZW58MHx8MHx8fDA%3D` ,
        content : `Generative AI creates content like text, images, and music. It uses advanced algorithms to produce realistic and creative outputs, transforming industries and enhancing human creativity.`,
        likes : 0,
        dislikes : 0,
        comment : [
            `Generative AI is revolutionizing content creation across fields! `,
            `Amazing how AI can generate realistic and creative outputs!`,
            `Generative AI's impact on industries is truly transformative!`,
        ] 
    } ,
    {
        img : `https://plus.unsplash.com/premium_photo-1661904091340-771549e98bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww`,
        content : `Explore Jaipur's rich heritage with its stunning palaces, vibrant markets, and colorful festivals. The Pink City offers a perfect blend of history, culture, and modern charm.`,
        likes : 0,
        dislikes : 0,
        comment : [
            `Jaipur's palaces are a must-see for any traveler`,
            `Loved the vibrant markets and colorful festivals in Jaipur!`,
            `Jaipur's rich heritage and culture are truly captivating!`
        ] 
    } ,
    {
        img : `https://plus.unsplash.com/premium_photo-1663047551367-a47365e55907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWR1Y2F0aW9uJTIwc3lzdGVtJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D`,
        content : `The Indian education system faces significant challenges, including rote learning, outdated curricula, and excessive emphasis on exams. Limited access to quality education and inadequate infrastructure further hinder progress. A shift towards holistic education, critical thinking, and skill development is essential for nurturing well-rounded and innovative future leaders.`,
        likes : 0,
        dislikes : 0,
        comment : [
            `Need more focus on critical thinking and creativity!` ,
            `Infrastructure improvements are crucial for better education outcomes.` ,
            `Holistic education can transform India's future generations positively.`
        ] 
    } ,
    {
        img : `https://images.unsplash.com/photo-1656420731611-ffae337fab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm95YWwlMjBlbmZpZWxkJTIwZ3QlMjA2NTB8ZW58MHx8MHx8fDA%3D`,
        content : `The Royal Enfield GT650 combines classic design with modern performance. Its powerful 650cc engine, comfortable ride, and retro styling make it a favorite among motorcycle enthusiasts.`,
        likes : 0,
        dislikes : 0,
        comment : [
            `Love the blend of classic design and modern performance!`,
            `GT650 offers a powerful and smooth riding experience!`,
            `Royal Enfield GT650 is a must-have for bike lovers!`
        ] 
    } ,
]

async function seedData(){
    await Blog.insertMany(initialBlogs);
}

module.exports = seedData;