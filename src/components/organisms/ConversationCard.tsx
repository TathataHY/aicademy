import { RouterOutputs } from "@/trpc/clients/types";
import Link from "next/link";
import { DisplayDate } from "../molecules/DisplayDate";

export const ConversationCard = ({
  conversation,
}: {
  conversation: RouterOutputs["students"]["myConversations"][0];
}) => {
  const courseId = conversation.chapter.Course.id;
  const chapterId = conversation.chapter.id;
  return (
    <Link
      href={`/course/${courseId}/chapter/${chapterId}#conversation`}
      key={conversation.id}
      scroll
    >
      <div className="font-semibold">{conversation.chapter.title}</div>
      <div className="text-sm">{conversation.chapter.Course.title}</div>
      <DisplayDate dateString={conversation.updatedAt} />
    </Link>
  );
};
