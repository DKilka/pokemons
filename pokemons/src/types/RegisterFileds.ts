export type RegisterFileds = {
  required: string;
  minLength: number;
  maxLength: number;
  pattern: {
    value: RegExp;
    message: string;
  };
};
