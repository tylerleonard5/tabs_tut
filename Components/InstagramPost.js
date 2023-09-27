import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



function CommentSection({ comments, onCommentSubmit }) {
    const [newComment, setNewComment] = useState('');
  
    const handleCommentSubmit = () => {
      if (newComment.trim() !== '') {
        onCommentSubmit(newComment); // Pass the new comment to the parent component
        setNewComment('');
      }
    };
  
    return (
        <ScrollView>
                {comments.map((comment, index) => (
                <View key={index} style={{ marginTop: 5 }}>
                    <Text>
                    <Text style={{ fontWeight: 'bold' }}>{comment.username}</Text> {comment.text}
                    </Text>
                </View>
                ))}
                <TextInput
                    placeholder="Add a comment..."
                    value={newComment}
                    onChangeText={(text) => setNewComment(text)}
                    style={{ marginTop: 10 }}
                />
                <KeyboardAwareScrollView>

                <Button title="Post" onPress={handleCommentSubmit} />
                </KeyboardAwareScrollView>
                
        </ScrollView>
    );
  }

function InstagramPost({ username, profImageUrl, imageUrl, likes, comments }) {

    const [showComments, setShowComments] = useState(false);

    const [postComments, setPostComments] = useState(comments); // Local state to store comments

    const handleCommentSubmit = (newComment) => {
        // Add the new comment to the local state
        setPostComments([...postComments, { username: 'YourUsername', text: newComment }]);
    };

    return (
        <ScrollView>
            
            <View style={{ margin: 10, padding: 10 , borderWidth: 1, borderColor: '#ccc', borderRadius: 10, backgroundColor: 'white' }}>
                {/* User Info */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                    source={{ uri: profImageUrl }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 5}}
                    />
                    <Text style={{ marginLeft: 10 }}>{username}</Text>
                </View>

                {/* Post Image */}
                <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 400, borderRadius: 10}} />

                {/* Like and Comment Buttons */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="thumb-up-outline" size={26}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowComments(!showComments)}>
                        <MaterialCommunityIcons name="comment-outline" size={26}/>
                    </TouchableOpacity>
                </View>

                {/* Likes Count */}
                <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{likes} likes</Text>

                {/* Comments */}
                {!showComments && (
                    [...postComments].slice(-2).map((comment, index) => (
                        <View key={index} style={{ marginTop: 5 }}>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>{comment.username}</Text> {comment.text}
                        </Text>
                        </View>
                    ))
                )}
                {/* Comments */}
                
                    {showComments && <CommentSection comments={postComments} onCommentSubmit={handleCommentSubmit} />}
             
            </View>
            
        </ScrollView>
    );
};

export default InstagramPost;