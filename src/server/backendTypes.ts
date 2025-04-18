export type CustomErrorInput = {
  method: string;
  overview: string;
  status?: number;
  err: string | Error | unknown;
};

export type CustomErrorOutput = {
  log: string;
  message: {
    err: string;
  };
  status?: number;
};

export type CustomErrorGenerator = (customErrorInput: CustomErrorInput) => CustomErrorOutput;