export interface TextFieldType {
  type?: 'text' | 'password' | 'number';
  name?: string;
  placeholder: string;
  value?: string | number;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number;
  height?: number;
}
