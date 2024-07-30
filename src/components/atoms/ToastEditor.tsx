import { Editor } from '@toast-ui/react-editor';
import { forwardRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']];

interface EditorProps {
  initialValue?: string;
}

/**
 * @see https://github.com/nhn/tui.editor/tree/master/apps/react-editor#-usage
 * @see https://nhn.github.io/tui.editor/latest/ToastUIEditorCore
 * @see https://velog.io/@matajeu/React-TOAST-UI-Editor-%EC%82%AC%EC%A7%84-%EC%B2%A8%EB%B6%80-%EB%AC%B8%EC%A0%9C
 */
const ToastEditor = forwardRef<Editor, EditorProps>((props, editorRef) => {
  const { initialValue = ' ' } = props;
  return <Editor height="500px" ref={editorRef} initialValue={initialValue} toolbarItems={toolbar} />;
});

export default ToastEditor;
