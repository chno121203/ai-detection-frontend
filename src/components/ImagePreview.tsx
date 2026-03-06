interface ImagePreviewProps {
  image: File | null;
}

function ImagePreview({ image }: ImagePreviewProps) {

  if (!image) return null

  return (
    <div className="mt-6">

      <img
        src={URL.createObjectURL(image)}
        alt="preview"
        className="rounded-lg shadow max-h-96"
      />

    </div>
  )
}

export default ImagePreview