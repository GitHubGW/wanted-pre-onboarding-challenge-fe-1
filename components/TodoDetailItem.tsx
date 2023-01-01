interface TodoDetailItemProps {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const TodoDetailItem = ({ title, content, createdAt, updatedAt }: TodoDetailItemProps) => {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <div>
        <span className="text-base font-semibold">제목</span>
        <h3 className="text-base text-gray-900 break-all">{`${title.length < 50 ? title : `${title.substring(0, 50)}...`}`}</h3>
      </div>
      <div>
        <span className="text-base font-semibold">내용</span>
        <p className="text-base text-gray-900  break-all">{`${content.length < 70 ? content : `${content.substring(0, 70)}...`}`}</p>
      </div>
      <div>
        <span className="text-base font-semibold">생성일</span>
        <div className="text-base text-gray-400">{new Date(createdAt).toLocaleString()}</div>
      </div>
      <div>
        <span className="text-base font-semibold">수정일</span>
        <div className="text-base text-gray-400">{new Date(updatedAt).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default TodoDetailItem;
