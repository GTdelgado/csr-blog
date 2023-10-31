import TextElementComponent from "../TextElement";
import ImageElementComponent from "../ImageElement";
import { PostType } from "../../pages/Posts";

export default function PostComponent({ _id, title, elements }: PostType) {
  return (
    <div
      key={_id}
      className="flex flex-col justify-end align-middle border-b-4 border-blue-500"
    >
      <h2 className="font-bold text-xl pt-16 text-center">{title}</h2>
      {elements.map((element, index) =>
        element.type === "text" ? (
          <TextElementComponent
            content={element.content}
            key={`${_id} ${index}`}
          />
        ) : (
          <ImageElementComponent
            key={`${_id} ${index}`}
            alt={element.content}
            url={element.content}
          />
        )
      )}
    </div>
  );
}
