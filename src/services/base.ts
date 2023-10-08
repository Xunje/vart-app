// import user from '../model/user';
import request, { get, post } from '@/utils/request'

export const GetData = async <T>(url: string, params: any = null): Promise<T | null> => {
    try {
        const response = await get<T>(url, params);
        return response;
    } catch (error) {
        return null;
    }
};

export const PostData = async<T>(url: string, data: any): Promise<T | null> => {
    try {
        const response = await post<T>(url, data);
        return response;
    } catch (error) {
        return null;
    }
}
