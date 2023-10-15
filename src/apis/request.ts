import axios, { AxiosRequestConfig } from "axios";

const request = async <TData, TProps = any>(
  config: AxiosRequestConfig<TProps>
) => {
  const res = await axios<TData>({
	  timeout: 10000,
	  baseURL:"http://test.trs.com",
    ...config
  });
  return res.data;
};

export default request;
