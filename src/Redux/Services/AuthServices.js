import { REGISTER } from "../../Apis/ConstantApi";
import { apiInstance } from "./AxiosApi";

export const register = async (payload) => {
  try {
    const response = await apiInstance.post(REGISTER, payload);
    console.log('response', response)
    return response?.data;
  } catch (error) {
    // Handle the error here, e.g., log it or throw a custom error
    console.error("Error in registration:", error);
    throw error;
  }
};
