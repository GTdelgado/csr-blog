type TextElementComonentProps = {
  content: string;
};

export default function TextElementComponent({
  content,
}: TextElementComonentProps) {
  return <p className="py-3">{content}</p>;
}
