import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
 
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
 
const VideoPlayer = () => {
 const videoRef = useRef(null);
 
 return (
   <Video 
    // Can be a URL or a local file.
    source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
    // Store reference
    // ref={videoRef}
    style={styles.backgroundVideo}
    controls={true}
    // resizeMode="contain"
   />
 )
}
 
// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
});

export default VideoPlayer;