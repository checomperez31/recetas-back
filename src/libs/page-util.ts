export interface Pagination {
    query: any,
    projection: any,
    options: any
}
export default (params: any): Pagination => {
    let page = params.page ? Number(params.page) : 1, items = params.items ? Number(params.items) : 20;
    let offset = 0;
    offset = (page - 1) * items;
    const options: any = {};
    options.skip = offset;
    options.limit = items;
    if (params.sort) options.sort = params.sort;
    return {
        query: null,
        projection: null,
        options: options
    };
}