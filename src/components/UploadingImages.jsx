// import React, { useEffect } from "react";
// import { storage, db } from "../firebase"; // Adjust the path to your firebase.js
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

// // Function to upload an image
// const uploadImage = async (filePath, fileName, projectId) => {
//   const storageRef = ref(storage, `project_photos/${projectId}/${fileName}`);

//   try {
//     const response = await fetch(filePath); // Fetch the image file from the given path
//     const blob = await response.blob(); // Convert to a Blob object

//     // Upload the file to Firebase Storage
//     const snapshot = await uploadBytes(storageRef, blob);
//     const downloadURL = await getDownloadURL(snapshot.ref);

//     // Save the URL and metadata to Firestore
//     await addDoc(collection(db, "project_photos"), {
//       projectId: projectId,
//       url: downloadURL,
//       name: fileName,
//       createdAt: new Date(),
//     });

//     console.log(`Image "${fileName}" uploaded successfully for Project ${projectId}: ${downloadURL}`);
//   } catch (error) {
//     console.error(`Error uploading image "${fileName}" for Project ${projectId}:`, error);
//   }
// };

// const UploadImages = () => {
//   useEffect(() => {
//     const projects = [
//       {
//         projectId: "1", // Project 1
//         images: [
//           { filePath: "/p1-1.jpg", fileName: "project1_image1.jpg" },
//           { filePath: "/p1-2.jpg", fileName: "project1_image2.jpg" },
//         ],
//       },
//       {
//         projectId: "2", // Project 2
//         images: [
//           { filePath: "./images/project2_image1.jpg", fileName: "project2_image1.jpg" },
//           { filePath: "./images/project2_image2.jpg", fileName: "project2_image2.jpg" },
//         ],
//       },
//       {
//         projectId: "3", // Project 3
//         images: [
//           { filePath: "./images/project3_image1.jpg", fileName: "project3_image1.jpg" },
//           { filePath: "./images/project3_image2.jpg", fileName: "project3_image2.jpg" },
//         ],
//       },
//     ];

//     const uploadAllProjectImages = async () => {
//       for (const project of projects) {
//         const { projectId, images } = project;
//         for (const image of images) {
//           await uploadImage(image.filePath, image.fileName, projectId);
//         }
//       }
//       console.log("All project images uploaded!");
//     };

//     uploadAllProjectImages();
//   }, []);

//   return <div>Uploading images for all projects...</div>;
// };

// export default UploadImages;
