import ChatInput from "./components/ChatInput";
import Avatar from "./components/Avatar";
import MessageList from "./components/MessageList";
import { useChat } from "./hooks/useChat";

function App() {
  const {
    messages,
    inputValue,
    setInputValue,
    sendMessage,
    isLoading,
    error,
    cancel,
    retry,
  } = useChat({
    systemPrompt:
      "You are a concise and friendly AI assistant embedded in a React demo. Keep responses short and helpful.",
  });

  const handleSend = (value: string) => {
    void sendMessage(value);
  };

  return (
    <div className="app-shell">
      <div className="chat-card">
        <header className="chat-header">
          <div className="chat-header__profile">
            <Avatar alt="Assistant avatar" size={56} />
            <div>
              <h1>Kopi Chat</h1>
              <p>A minimal ChatGPT-style wrapper ready for tooling.</p>
            </div>
          </div>
          {isLoading ? (
            <button className="ghost-button" onClick={cancel}>
              Cancel
            </button>
          ) : null}
        </header>

        <MessageList messages={messages} isLoading={isLoading} />

        <footer className="chat-footer">
          {error ? (
            <div className="chat-error" role="alert">
              <span>{error}</span>
              <button type="button" onClick={retry}>
                Retry
              </button>
            </div>
          ) : null}
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSend}
            disabled={isLoading}
          />
          <p className="chat-footer__hint">
            Responses are powered by the OpenAI Chat Completions API. Configure
            your API key in <code>.env</code>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
