import React from 'react'
import { ScrollView } from 'react-native'
import InstagramPost from '../Components/InstagramPost'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function Home() {
    const post1 = {
        username: 'tleonard5',
        profImageUrl: 'https://play-lh.googleusercontent.com/1RBQdyjMPyy_0ngDN7LaYUpOCkastDXu29VRoe8yQAaErfwl9SgLzUqSiSnZb_3qUQ',
        imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        likes: 100,
        comments: [
          { username: 'nlarocca78', text: 'Great photo!' },
          { username: 'jFaggot9', text: 'Beautiful!' },
          // Add more comments as needed
        ],
    };

    const post2 = {
    username: 'nlarocca78',
    profImageUrl: 'https://static.clubs.nfl.com/image/private/f_auto/patriots/ftuml6gmogyahtnd2neb',
    imageUrl: 'https://www.al.com/resizer/H7F6T_j7zOqiGfUt9DwPJQ6ffnI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/AM4SJNDC6ZFXPO3SBE4H54G3GM.jpg',
    likes: 78,
    comments: [
        { username: 'tleonard5', text: 'Jags are better!' },
        { username: 'jFaggot9', text: 'I am so gay' },
        // Add more comments as needed
    ],
    };

    const post3 = {
    username: 'jFaggot9',
    profImageUrl: 'data:image/jpeg;base64,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',
    imageUrl: 'https://www.washingtonpost.com/resizer/yj1nAESjInzcOJXXX_BXMccdXBQ=/arc-anglerfish-washpost-prod-washpost/public/CJKHOK4DGFTT4JQZO2VHWU36WE.jpg',
    likes: 69,
    comments: [
        { username: 'tleonard5', text: 'Wow I love it!' },
        { username: 'nlarocca78', text: 'How do I block a user on this app?' },
        // Add more comments as needed
    ],
    };

    const posts = [post1, post2, post3];

    // Use the map function to render the components dynamically
    const postComponents = posts.map((post, index) => (
        <InstagramPost
        key={index} // It's important to provide a unique key for each component
        username={post.username}
        profImageUrl={post.profImageUrl}
        imageUrl={post.imageUrl}
        likes={post.likes}
        comments={post.comments}
        />
    ));


    return (
        <KeyboardAwareScrollView>
            {postComponents}
        </KeyboardAwareScrollView>
    );
}
export default Home;