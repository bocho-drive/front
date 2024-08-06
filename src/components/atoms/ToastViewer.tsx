import { Viewer } from '@toast-ui/react-editor';

interface Props {
  initialValue: string;
}

const ToastViewer = ({ initialValue }: Props) => {
  return <Viewer initialValue={initialValue} />;
};

export default ToastViewer;
