export const useStrapi = () => {
    const config = useRuntimeConfig();
    const baseURL = config.public.strapi.url as string;
    const token = config.strapi.token;

    const find = async (contentType: string, params?: any) => {
        const query = params
            ? `?${new URLSearchParams(params).toString()}`
            : "";
        console.log("Token:", token);

        const response = await $fetch<{ data: any }>(
            `/api/${contentType}${query}`,
            {
                baseURL,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    };

    const findOne = async (
        contentType: string,
        id: string | number,
        params?: any
    ) => {
        const query = params
            ? `?${new URLSearchParams(params).toString()}`
            : "";
        console.log("Token:", token);

        const response = await $fetch<{ data: any }>(
            `/api/${contentType}/${id}${query}`,
            {
                baseURL,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    };

    const create = async (contentType: string, data: any) => {
        return await $fetch(`/api/${contentType}`, {
            method: "POST",
            body: { data },
            baseURL,
        });
    };

    const update = async (
        contentType: string,
        id: string | number,
        data: any
    ) => {
        return await $fetch(`/api/${contentType}/${id}`, {
            method: "PUT",
            body: { data },
            baseURL,
        });
    };

    const remove = async (contentType: string, id: string | number) => {
        return await $fetch(`/api/${contentType}/${id}`, {
            method: "DELETE",
            baseURL,
        });
    };

    return {
        find,
        findOne,
        create,
        update,
        remove,
    };
};
