import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useContext, useRef } from "react";
import { ChatContext } from "./ChatContext";

interface ChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="bottom-0 left-0 absolute w-full">
      <div className="flex flex-row gap-3 mx-2 md:mx-4 lg:mx-auto md:last:mb-6 lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex md:flex-col flex-1 items-stretch h-full">
          <div className="relative flex flex-col flex-grow p-4 w-full">
            <div className="relative">
              <Textarea
                rows={1}
                ref={textareaRef}
                maxRows={4}
                autoFocus
                onChange={handleInputChange}
                value={message}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();

                    addMessage();

                    textareaRef.current?.focus();
                  }
                }}
                placeholder="Enter your question..."
                className="scrollbar-thumb-blue py-3 pr-12 scrollbar-thumb-rounded scrollbar-w-2 text-base resize-none scrollbar-track-blue-lighter scrolling-touch"
              />

              <Button
                disabled={isLoading || isDisabled}
                className="right-[8px] bottom-1.5 absolute"
                aria-label="send message"
                onClick={() => {
                  addMessage();

                  textareaRef.current?.focus();
                }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
