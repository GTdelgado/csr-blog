type ImageElementComonentProps = {
  url: string;
  alt: string;
};

export default function ImageElementComponent({
  url,
  alt,
}: ImageElementComonentProps) {
  return (
    <div className="py-4 container">
      <img
        src={url}
        alt={alt}
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "320px",
          margin: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
