import ImageKit from '@imagekit/nodejs';
const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
const uploadImageToImageKit = async (file) => {
  try {
    const response = await client.files.upload({
      file: file.buffer.toString('base64'),
      fileName: file.originalname,
    });
    return response.url;
  } catch (error) {
    console.error("Error uploading image to ImageKit:", error);
    throw new Error("Failed to upload image");
  }
};
export default uploadImageToImageKit ;

