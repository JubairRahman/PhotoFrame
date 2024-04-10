

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
//             // if (frameImage) {
//                 const frameImg = new Image();
//                 frameImg.onload = function () {
//                     ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

//                     // Display the result
//                     const output = document.getElementById('output');
//                     output.innerHTML = '';
//                     output.appendChild(canvas);ad

//                     // Show download button
//                     document.getElementById('downloadButton').style.display = 'block';
//                 };
//                 frameImg.src = 'src/Photo frame1.png'; // Use the selected frame image
//                 console.log('can not show');
                
           
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
//     function downloadImage() {
//         const canvas = document.querySelector('canvas');
//         const downloadLink = document.createElement('a');
//         downloadLink.href = canvas.toDataURL("image/png");
//         downloadLink.download = 'profile_image_with_frame.png';
//         downloadLink.click();
//     }

document.getElementById('overlayButton').addEventListener('click', overlayFrame);
document.getElementById('downloadButton').addEventListener('click', downloadImage);

let userImage;
let frameImage = 'src/Photo frame1.png'; // Directly specify the frame image URL here

function overlayFrame() {
    console.log("Overlay button clicked");
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
            const frameImg = new Image();
            frameImg.onload = function () {
                ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

                // Display the result
                const output = document.getElementById('output');
                output.innerHTML = '';
                output.appendChild(canvas);

                // Show download button
                document.getElementById('downloadButton').style.display = 'block';
            };
            frameImg.src = frameImage; // Use the specified frame image URL
        };
        userImg.src = userImageReader.result;
    };

    userImageReader.readAsDataURL(userImageFile);

    userImage = userImageFile;
}

function downloadImage() {
    const canvas = document.querySelector('canvas');
    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = 'profile_image_with_frame.png';
    downloadLink.click();
}
