// // 1st attempt
// document.getElementById('overlayButton').addEventListener('click', overlayFrame);
// document.getElementById('downloadButton').addEventListener('click', downloadImage);

// let userImage;
// let frameImage;
// let dragStartY = 0;
// let offsetY = 0;

// function overlayFrame() {
//     const userImageInput = document.getElementById('userImageInput');
//     if (userImageInput.files.length === 0) {
//         alert('Please upload a user image.');
//         return;
//     }

//     const userImageFile = userImageInput.files[0];

//     const userImageReader = new FileReader();
//     userImageReader.onload = function () {
//         const userImg = new Image();
//         userImg.onload = function () {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');

//             // Set canvas size to match user image dimensions
//             canvas.width = userImg.width;
//             canvas.height = userImg.height;

//             // Draw the user image onto the canvas
//             ctx.drawImage(userImg, 0, 0);

//             // Draw the frame image on top
//             if (frameImage) {
//                 const frameImg = new Image();
//                 frameImg.onload = function () {
//                     ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

//                     // Display the result
//                     const output = document.getElementById('output');
//                     output.innerHTML = '';
//                     output.appendChild(canvas);

//                     // Show download button
//                     document.getElementById('downloadButton').style.display = 'block';
//                 };
//                 // frameImg.src = frameImage;
//                 frameImg.src = 'src/Photo frame1.png';
//             } else {
//                 // Display the user image only if no frame image is selected
//                 const output = document.getElementById('output');
//                 output.innerHTML = '';
//                 output.appendChild(canvas);

//                 // Show download button
//                 document.getElementById('downloadButton').style.display = 'block';
//             }
//         };
//         userImg.src = userImageReader.result;
//     };

//     userImageReader.readAsDataURL(userImageFile);

//     userImage = userImageFile;
// }

// function downloadImage() {
//     const canvas = document.querySelector('canvas');
//     const downloadLink = document.createElement('a');
//     downloadLink.href = canvas.toDataURL("image/png");
//     downloadLink.download = 'profile_image_with_frame.png';
//     downloadLink.click();
// }

// 2nd attempt
// // Preload the frame image
// const frameImg = new Image();
// frameImg.onload = function() {
//     // Once the frame image is loaded, proceed with other operations
//     document.getElementById('overlayButton').addEventListener('click', overlayFrame);
//     document.getElementById('downloadButton').addEventListener('click', downloadImage);
// };
// frameImg.src = 'src/Photo frame1.png'; // Adjust the path according to the location of your frame image

// let userImage;
// let dragStartY = 0;
// let offsetY = 0;

// function overlayFrame() {
//     const userImageInput = document.getElementById('userImageInput');
//     if (userImageInput.files.length === 0) {
//         alert('Please upload a user image.');
//         return;
//     }

//     const userImageFile = userImageInput.files[0];
//     const userImageReader = new FileReader();
//     userImageReader.onload = function () {
//         const userImg = new Image();
//         userImg.onload = function () {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');

//             // Set canvas size to match the user image dimensions
//             // canvas.width = userImg.width;
//             // canvas.height = userImg.height;
//             canvas.width = 600;
//             canvas.height = 600;
//             // Draw the user image onto the canvas
//             ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height);

//             // Draw the frame image on top
//             ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

//             // Display the result
//             const output = document.getElementById('output');
//             output.innerHTML = '';
//             output.appendChild(canvas);

//             // Show download button
//             document.getElementById('downloadButton').style.display = 'block';

//             // Enable image dragging
//             canvas.addEventListener('mousedown', startDrag);
//             canvas.addEventListener('mousemove', drag);
//             canvas.addEventListener('mouseup', endDrag);
//             canvas.addEventListener('mouseleave', endDrag);
//         };
//         userImg.src = userImageReader.result;
//     };
//     userImageReader.readAsDataURL(userImageFile);

//     userImage = userImageFile;
// }

// // The rest of your functions remain unchanged
// function downloadImage() {
//     const canvas = document.querySelector('canvas');
//     const downloadLink = document.createElement('a');
//     downloadLink.href = canvas.toDataURL("image/png");
//     downloadLink.download = 'profile_image_with_frame.png';
//     downloadLink.click();
// }

// 3rd attempt 

// document.getElementById('overlayButton').addEventListener('click', overlayFrame);
// document.getElementById('downloadButton').addEventListener('click', downloadImage);

// let userImage;
// let frameImage;
// let dragStartY = 0;
// let offsetY = 0;

// // Function to handle overlaying frame
// function overlayFrame() {
//     const userImageInput = document.getElementById('userImageInput');
//     if (userImageInput.files.length === 0) {
//         alert('Please upload a user image.');
//         return;
//     }

//     const userImageFile = userImageInput.files[0];

//     const userImageReader = new FileReader();
//     userImageReader.onload = function () {
//         const userImg = new Image();
//         userImg.onload = function () {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');

//             // Set canvas size to match user image dimensions
//             canvas.width = userImg.width;
//             canvas.height = userImg.height;

//             // Draw the user image onto the canvas
//             ctx.drawImage(userImg, 0, 0);

//             // Draw the frame image on top
//             if (frameImage) {
//                 const frameImg = new Image();
//                 frameImg.onload = function () {
//                     ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

//                     // Display the result
//                     const output = document.getElementById('output');
//                     output.innerHTML = '';
//                     output.appendChild(canvas);

//                     // Show download button
//                     document.getElementById('downloadButton').style.display = 'block';
//                 };
//                 frameImg.src = frameImage; // Use the selected frame image
//             } else {
//                 // Display the user image only if no frame image is selected
//                 const output = document.getElementById('output');
//                 output.innerHTML = '';
//                 output.appendChild(canvas);

//                 // Show download button
//                 document.getElementById('downloadButton').style.display = 'block';
//             }
//         };
//         userImg.src = userImageReader.result;
//     };

//     userImageReader.readAsDataURL(userImageFile);

//     userImage = userImageFile;
// }

// // Function to handle frame image selection
// document.getElementById('frameImageInput').addEventListener('change', function (event) {
//     const frameImageInput = event.target;
//     if (frameImageInput.files.length === 0) {
//         return;
//     }

//     frameImage = URL.createObjectURL(frameImageInput.files[0]);
// });

// // Function to download the composite image
// function downloadImage() {
//     const canvas = document.querySelector('canvas');
//     const downloadLink = document.createElement('a');
//     downloadLink.href = canvas.toDataURL("image/png");
//     downloadLink.download = 'profile_image_with_frame.png';
//     downloadLink.click();
// }


// document.getElementById('overlayButton').addEventListener('click', overlayFrame);
// document.getElementById('downloadButton').addEventListener('click', downloadImage);

// let userImage;
// let frameImage;

// function overlayFrame() {
//     const userImageInput = document.getElementById('userImageInput');
//     if (userImageInput.files.length === 0) {
//         alert('Please upload a user image.');
//         return;
//     }

//     const userImageFile = userImageInput.files[0];

//     const userImageReader = new FileReader();
//     userImageReader.onload = function () {
//         const userImg = new Image();
//         userImg.onload = function () {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');

//             // Set canvas size to match user image dimensions
//             canvas.width = userImg.width;
//             canvas.height = userImg.height;

//             // Draw the user image onto the canvas
//             ctx.drawImage(userImg, 0, 0);

//             // Draw the frame image on top
//             if (frameImage) {
//                 const frameImg = new Image();
//                 frameImg.onload = function () {
//                     ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

//                     // Display the result
//                     const output = document.getElementById('output');
//                     output.innerHTML = '';
//                     output.appendChild(canvas);

//                     // Show download button
//                     document.getElementById('downloadButton').style.display = 'block';
//                 };
//                 frameImg.src = 'src/Photo frame1.png'; // Use the selected frame image
//             } else {
//                 // Display the user image only if no frame image is selected
//                 const output = document.getElementById('output');
//                 output.innerHTML = '';
//                 output.appendChild(canvas);

//                 // Show download button
//                 document.getElementById('downloadButton').style.display = 'block';
//             }
//         };
//         userImg.src = userImageReader.result;
//     };

//     userImageReader.readAsDataURL(userImageFile);

//     userImage = userImageFile;
// }

// document.getElementById('frameImageInput').addEventListener('change', function (event) {
//     const frameImageInput = event.target;
//     if (frameImageInput.files.length === 0) {
//         return;
//     }

//     frameImage = URL.createObjectURL(frameImageInput.files[0]);
// });

// function downloadImage() {
//     const canvas = document.querySelector('canvas');
//     const downloadLink = document.createElement('a');
//     downloadLink.href = canvas.toDataURL("image/png");
//     downloadLink.download = 'profile_image_with_frame.png';
//     downloadLink.click();
// }

document.getElementById('overlayButton').addEventListener('click', overlayFrame);
document.getElementById('downloadButton').addEventListener('click', downloadImage);

let userImage;
let frameImage;

function overlayFrame() {
    const userImageInput = document.getElementById('userImageInput');
    if (userImageInput.files.length === 0) {
        alert('Please upload a user image.');
        return;
    }

    const userImageFile = userImageInput.files[0];

    const userImageReader = new FileReader();
    userImageReader.onload = function () {
        const userImg = new Image();
        userImg.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas size to match user image dimensions
            canvas.width = userImg.width;
            canvas.height = userImg.height;

            // Draw the user image onto the canvas
            ctx.drawImage(userImg, 0, 0);

            // Draw the frame image on top
            // if (frameImage) {
                const frameImg = new Image();
                frameImg.onload = function () {
                    ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

                    // Display the result
                    const output = document.getElementById('output');
                    output.innerHTML = '';
                    output.appendChild(canvas);ad

                    // Show download button
                    document.getElementById('downloadButton').style.display = 'block';
                };
                frameImg.src = 'src/Photo frame1.png'; // Use the selected frame image
                console.log('can not show');
                
            // } else {
            //     // Display the user image only if no frame image is selected
            //     const output = document.getElementById('output');
            //     output.innerHTML = '';
            //     output.appendChild(canvas);
            //     console.log("yoo");

            //     // Show download button
            //     document.getElementById('downloadButton').style.display = 'block';
            // }
        };
        userImg.src = userImageReader.result;
    };

    userImageReader.readAsDataURL(userImageFile);

    userImage = userImageFile;
}

document.getElementById('frameImageInput').addEventListener('change', function (event) {
    const frameImageInput = event.target;
    if (frameImageInput.files.length === 0) {
        return;
    }

    frameImage = URL.createObjectURL(frameImageInput.files[0]);
});

function downloadImage() {
    const canvas = document.querySelector('canvas');
    const imageDataURL = canvas.toDataURL("src/");
    
    // Store the overlayed image data in local storage
    localStorage.setItem('overlayedImage', imageDataURL);
    
    // Optional: You can also display a message to the user indicating that the image has been saved
    alert('Overlayed image has been saved to local storage.');

    // Optional: You can redirect the user or perform any other action
}
