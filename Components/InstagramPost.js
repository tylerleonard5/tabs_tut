import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

function InstagramPost({ username, profImageUrl, imageUrl, likes, comments }) {
  return (
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
        <TouchableOpacity>
            <MaterialCommunityIcons name="comment-outline" size={26}/>
        </TouchableOpacity>
      </View>

      {/* Likes Count */}
      <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{likes} likes</Text>

      {/* Comments */}
      {comments.map((comment, index) => (
        <View key={index} style={{ marginTop: 5 }}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>{comment.username}</Text> {comment.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default InstagramPost;