interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function usePressEnterFetch({ handleSubmit }: Props) {
  const handlePressEnterFetch = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return { handlePressEnterFetch };
}

export default usePressEnterFetch;
