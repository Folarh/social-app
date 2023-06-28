import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import PostContent from "./PostContent";

const AddPost: React.FC = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [video, setVideo] = useState<File | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new post document in Firebase Firestore
    await addDoc(collection(db, "posts"), {
      text,
      timestamp: new Date(),
    });
    // Upload image and video to Firebase Storage
    if (image) {
      // Upload image to Firebase Storage and update the document with the image URL
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then(() => {
        alert("image uploaded");
      });
    }
    if (video) {
      // Upload video to Firebase Storage and update the document with the video URL
    }

    // Clear form
    setText("");
    setImage(null);
    setVideo(null);
  };
  const imageListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Write something..."
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        key={image?.name}
      />
      {/* <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        key={video?.name}
      /> */}
      <button type="submit">Submit</button>
      {imageUrl.map((url) => {
        return <PostContent url={url} />;
      })}
    </form>
  );
};

export default AddPost;
