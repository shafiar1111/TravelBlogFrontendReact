import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './PostPage.css';
import { remote } from '../../Utils/Utils';
import axios from 'axios';

function PostPage()
{
        const [selectedImage, setSelectedImage] = useState(null);
        const [description, setDescription] = useState("ssd");

        const handleImageChange = (event) => {
          const imageFile = event.target.files[0];
          setSelectedImage(imageFile);
        };
    
        const handleImageUpload = async () => {
            try {
                const formData = new FormData();
                formData.append('image', selectedImage);
                formData.append('description', description);
          
                const response = await axios.post(`${remote}/image/upload`, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  },
                  withCredentials:true
                });
          
                console.log('Image uploaded successfully:', response.data);
                // You can update UI to display the uploaded image using response.data
              } catch (error) {
                console.error('Error uploading image:', error);
              }
          };

    return(
        <div >
             <Header/>
             <div className="PostPageContainer">
             <div className='PostPage'>
                <label>Upload Image</label>
                <input type='file' onChange={handleImageChange}/>
                <input type='text' placeholder='Enter Description' onChange={(e)=>{setDescription(e.target.value)}}/>
                <button onClick={()=>handleImageUpload()}>Post Details</button>
             </div>
             </div>
             <Footer/>
        </div>
    )
}

export default PostPage;