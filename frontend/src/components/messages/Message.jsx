// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white  pb-2`}>i am the me</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        23:32
      </div>
    </div>
  );
};
export default Message;
