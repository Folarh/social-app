import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import PostContent from "./PostContent";
import { GrAdd } from "react-icons/gr";
import "./AddPost.css";

const AddPost: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setDesc(e.target.value);
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
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

    // Clear form
    setText("");
    setDesc("");
    setImage(null);
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
    <>
      <main className="create">
        {/* ------FORM-CONTAINER-------- */}
        <form className="create-post" onSubmit={handleSubmit}>
          <div className="create-post-group">
            <label htmlFor="file">
              <GrAdd className="create-icon" />
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageChange}
              key={image?.name}
            />
            <input
              type="text"
              className="create-input"
              placeholder="Title"
              // autoFocus="true"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="create-post-group">
            <textarea
              placeholder="Write Someting..."
              // type="text"
              value={desc}
              // onChange={handleDescChange}
              className="create-input create-text"
            ></textarea>
          </div>
          <button className="create-btn" type="submit">
            Post
          </button>
        </form>
      </main>
      {imageUrl.map((url) => {
        return <PostContent url={url} />;
      })}
    </>
  );
};

export default AddPost;
