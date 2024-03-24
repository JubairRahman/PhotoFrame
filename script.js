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
//                 frameImg.src = frameImage;
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
// Preload the frame image
const frameImg = new Image();
frameImg.onload = function() {
    // Once the frame image is loaded, proceed with other operations
    document.getElementById('overlayButton').addEventListener('click', overlayFrame);
    document.getElementById('downloadButton').addEventListener('click', downloadImage);
};
frameImg.src = 'src/PhotoFrame.png'; // Adjust the path according to the location of your frame image

let userImage;
let dragStartY = 0;
let offsetY = 0;

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

            // Set canvas size to match the user image dimensions
            canvas.width = userImg.width;
            canvas.height = userImg.height;

            // Draw the user image onto the canvas
            ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height);

            // Draw the frame image on top
            ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

            // Display the result
            const output = document.getElementById('output');
            output.innerHTML = '';
            output.appendChild(canvas);

            // Show download button
            document.getElementById('downloadButton').style.display = 'block';

            // Enable image dragging
            canvas.addEventListener('mousedown', startDrag);
            canvas.addEventListener('mousemove', drag);
            canvas.addEventListener('mouseup', endDrag);
            canvas.addEventListener('mouseleave', endDrag);
        };
        userImg.src = userImageReader.result;
    };
    userImageReader.readAsDataURL(userImageFile);

    userImage = userImageFile;
}

// The rest of your functions remain unchanged
function downloadImage() {
    const canvas = document.querySelector('canvas');
    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = 'profile_image_with_frame.png';
    downloadLink.click();
}